#include <stdio.h>
#define STB_TRUETYPE_IMPLEMENTATION
#include "stb_truetype.h"
#define STB_IMAGE_WRITE_IMPLEMENTATION
#include "stb_image_write.h"

char buffer[1<<20];

int main(int argc, char **argv) {
	stbtt_fontinfo font;
	int i,j,ch=0;
	float scale;
	char *text;
	int   width = 0, height = 0, ascent = 0, descent = 0, xpos = 0;
	unsigned char* image;

	// usage:  stbtt font-size font-path text png-path
	//
	// font-size in pixels
	if (argc != 5) {
		fprintf(stderr, "Usage:   stbtt font-path font-size text png-path\n");
		fprintf(stderr, "Example: stbtt ../fonts/ocrb7.otf 15 0123456789 c-digits.png\n");
		return 1;
	}

	fread(buffer, 1, 1<<20, fopen(argv[1], "rb"));
	stbtt_InitFont(&font, buffer, 0);

	// This scaling matches our javascript (pixel size == ascent)
	stbtt_GetFontVMetrics(&font, &ascent, 0, 0);
	scale = (float)atoi(argv[2]) / ascent;

	ascent = 0;
	for (char* text = argv[3]; *text; text++) {
		int advance,lsb,x0,y0,x1,y1,a,d;
		stbtt_GetCodepointHMetrics(&font, *text, &advance, &lsb);
		width += (int)(advance * scale);

		stbtt_GetCodepointBitmapBox(&font, *text, scale, scale, &x0, &y0, &x1, &y1);

		// y0 is negative/above the baseline
		if (ascent < -y0) {
			ascent = -y0;
		}
		if (descent < y1) {
			descent = y1;
		}
	}
	height = ascent + descent;

	image = (unsigned char*)malloc(width * height);
	for (char* text = argv[3]; *text; text++) {
		int advance,lsb,x0,y0,x1,y1,w,t;
		stbtt_GetCodepointHMetrics(&font, *text, &advance, &lsb);
		stbtt_GetCodepointBitmapBox(&font, *text, scale, scale, &x0, &y0, &x1, &y1);
		stbtt_MakeCodepointBitmap(&font, &image[(ascent + y0) * width + xpos + x0], x1-x0, y1-y0, width, scale, scale, *text);
		xpos += (int)(advance * scale);
	}

	// Convert alpha to grayscale
	for (int y = 0; y < height; y++) {
		unsigned char* row = image + width * y;
		for (int x = 0; x < width; x++) {
			row[x] = 255 - row[x];
		}
	}

	//stbi_write_png(char const *filename, int w, int h, int comp, const void *data, int stride_in_bytes);
	stbi_write_png(argv[4], width, height, 1, image, width);

	return 0;
}
