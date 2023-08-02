// Type definitions for bwip-js  __BWIPJS_VERS__
//
// THIS DEFINITION FILE IS MACHINE GENERATED - DO NOT EDIT
//
// Project: https://github.com/metafloor/bwip-js
//
// This definition file was based on:
//
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
//                 Guillaume VanderEst <https://github.com/gvanderest>
//                 Ryan Jentzsch <https://github.com/RyanNerd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// platform-specific includes

export namespace BwipJs {
    export interface BwippOptions {
        includecheck?: boolean | undefined;
        includecheckintext?: boolean | undefined;

        parse?: boolean | undefined;
        parsefnc?: boolean | undefined;

        height?: number | undefined;
        width?: number | undefined;

        inkspread?: number | undefined;
        inkspreadh?: number | undefined;
        inkspreadv?: number | undefined;
        dotty?: boolean | undefined;

        binarytext?: boolean | undefined;   // really a bwip-js option but better positioned here
        includetext?: boolean | undefined;
        textfont?: string | undefined;
        textsize?: number | undefined;
        textgaps?: number | undefined;
        alttext?: string | undefined;

        textxalign?: 'offleft' | 'left' | 'center' | 'right' | 'offright' | 'justify' | undefined;
        textyalign?: 'below' | 'center' | 'above' | undefined;
        textxoffset?: number | undefined;
        textyoffset?: number | undefined;

        showborder?: boolean | undefined;
        borderwidth?: number | undefined;
        borderleft?: number | undefined;
        borderright?: number | undefined;
        bordertop?: number | undefined;
        boraderbottom?: number | undefined;

        barcolor?: string | undefined;
        backgroundcolor?: string | undefined;
        bordercolor?: string | undefined;
        textcolor?: string | undefined;

        addontextxoffset?: number | undefined;
        addontextyoffset?: number | undefined;
        addontextfont?: string | undefined;
        addontextsize?: number | undefined;

        guardwhitespace?: boolean | undefined;
        guardwidth?: number | undefined;
        guardheight?: number | undefined;
        guardleftpos?: number | undefined;
        guardrightpos?: number | undefined;
        guardleftypos?: number | undefined;
        guardrightypos?: number | undefined;
    }
    export interface RenderOptions extends BwippOptions {
        bcid: string;
        text: string;

        scaleX?: number | undefined;
        scaleY?: number | undefined;
        scale?: number | undefined;

        rotate?: 'N' | 'R' | 'L' | 'I' | undefined;

        paddingwidth?: number | undefined;
        paddingheight?: number | undefined;

        paddingleft?: number | undefined;
        paddingright?: number | undefined;
        paddingtop?: number | undefined;
        paddingbottom?: number | undefined;

        monochrome?: boolean | undefined;
        sizelimit?: number | undefined;
    }
    export interface RawOptions extends BwippOptions {
        bcid: string;
        text: string;
    }
    export interface DrawingContext<T> {
        scale(sx: number, sy: number): [number, number] | null;
        measure(
            str: string,
            font: string,
            fwidth: number,
            fheight: number,
        ): { width: number; ascent: number; descent: number };
        init(width: number, height: number): void;
        line(x0: number, y0: number, x1: number, y1: number, lw: number, rgb: string): void;
        polygon(pts: Array<[number, number]>): void;
        hexagon(pts: [[number, number], [number, number], [number, number], [number, number], [number, number]]): void;
        ellipse(x: number, y: number, rx: number, ry: number, ccw: boolean): void;
        fill(rgb: string): void;
        text(
            x: number,
            y: number,
            str: string,
            rgb: string,
            font: { name: string; width: number; height: number; dx: number },
        ): void;
        end(): T;
    }
    export function render<T>(params: RenderOptions, drawing: DrawingContext<T>): T;
    export function raw(
        options: RawOptions,
    ):
        | Array<{ bbs: number[]; bhs: number[]; sbs: number[] }>
        | Array<{ pixs: number[]; pixx: number; pixy: number; height: number; width: number }>;
    export function raw(
        bcid: string,
        text: string,
        opts: string,
    ):
        | Array<{ bbs: number[]; bhs: number[]; sbs: number[] }>
        | Array<{ pixs: number[]; pixx: number; pixy: number; height: number; width: number }>;
    export function raw(
        bcid: string,
        text: string,
        opts?: BwippOptions,
    ):
        | Array<{ bbs: number[]; bhs: number[]; sbs: number[] }>
        | Array<{ pixs: number[]; pixx: number; pixy: number; height: number; width: number }>;
		
    export const BWIPP_VERSION: string;
    export const BWIPJS_VERSION: string;

    // wrapper around FontLib.loadFont()
    export function loadFont(name: string, data: string | Uint8Array): void;
    export function loadFont(name: string, mult: number, data: string | Uint8Array): void;
    export function loadFont(name: string, multy: number, multx: number, data: string | Uint8Array): void;

    export namespace FontLib {
        export interface PathData
            extends Array<
                | { type: 'M'; x: number; y: number }
                | { type: 'L'; x: number; y: number }
                | { type: 'Q'; x: number; y: number; cx: number; cy: number }
                | { type: 'C'; x: number; y: number; cx1: number; cy1: number; cx2: number; cy2: number }
            > {
            ascent: number;
            descent: number;
            advance: number;
        }
        export function lookup(font: string): number;
        export function monochrome(mono: boolean): void;
        export function getglyph(
            fontid: number,
            charcode: number,
            width: number,
            height: number,
        ): {
            glyph: number;
            top: number;
            left: number;
            width: number;
            height: number;
            advance: number;
            pixels: Uint8Array;
            bytes: Uint8Array;
            cachekey: string;
            offset: number;
        };
        export function getpaths(fontid: number, charcode: number, width: number, height: number): PathData;
        export function loadFont(name: string, data: string | Uint8Array): void;
        export function loadFont(name: string, mult: number, data: string | Uint8Array): void;
        export function loadFont(name: string, multy: number, multx: number, data: string | Uint8Array): void;
    }
    
    // platform-specific exports
    export type ToDataURLCallback = (err: string | Error, png: { width: number; height: number; uri: string }) => void;
    export type DataURL = { width: number; height: number; uri: string };
    export function toDataURL(opts: RenderOptions, callback: ToDataURLCallback) : void;
    export function toDataURL(opts: RenderOptions): Promise<DataURL>;

    export function auspost(opts: RenderOptions): Promise<DataURL>;
    export function auspost(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function azteccode(opts: RenderOptions): Promise<DataURL>;
    export function azteccode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function azteccodecompact(opts: RenderOptions): Promise<DataURL>;
    export function azteccodecompact(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function aztecrune(opts: RenderOptions): Promise<DataURL>;
    export function aztecrune(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function bc412(opts: RenderOptions): Promise<DataURL>;
    export function bc412(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function channelcode(opts: RenderOptions): Promise<DataURL>;
    export function channelcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function codablockf(opts: RenderOptions): Promise<DataURL>;
    export function codablockf(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code11(opts: RenderOptions): Promise<DataURL>;
    export function code11(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code128(opts: RenderOptions): Promise<DataURL>;
    export function code128(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code16k(opts: RenderOptions): Promise<DataURL>;
    export function code16k(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code2of5(opts: RenderOptions): Promise<DataURL>;
    export function code2of5(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code32(opts: RenderOptions): Promise<DataURL>;
    export function code32(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code39(opts: RenderOptions): Promise<DataURL>;
    export function code39(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code39ext(opts: RenderOptions): Promise<DataURL>;
    export function code39ext(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code49(opts: RenderOptions): Promise<DataURL>;
    export function code49(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code93(opts: RenderOptions): Promise<DataURL>;
    export function code93(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function code93ext(opts: RenderOptions): Promise<DataURL>;
    export function code93ext(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function codeone(opts: RenderOptions): Promise<DataURL>;
    export function codeone(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function coop2of5(opts: RenderOptions): Promise<DataURL>;
    export function coop2of5(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function daft(opts: RenderOptions): Promise<DataURL>;
    export function daft(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarexpanded(opts: RenderOptions): Promise<DataURL>;
    export function databarexpanded(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarexpandedcomposite(opts: RenderOptions): Promise<DataURL>;
    export function databarexpandedcomposite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarexpandedstacked(opts: RenderOptions): Promise<DataURL>;
    export function databarexpandedstacked(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarexpandedstackedcomposite(opts: RenderOptions): Promise<DataURL>;
    export function databarexpandedstackedcomposite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarlimited(opts: RenderOptions): Promise<DataURL>;
    export function databarlimited(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarlimitedcomposite(opts: RenderOptions): Promise<DataURL>;
    export function databarlimitedcomposite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databaromni(opts: RenderOptions): Promise<DataURL>;
    export function databaromni(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databaromnicomposite(opts: RenderOptions): Promise<DataURL>;
    export function databaromnicomposite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarstacked(opts: RenderOptions): Promise<DataURL>;
    export function databarstacked(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarstackedcomposite(opts: RenderOptions): Promise<DataURL>;
    export function databarstackedcomposite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarstackedomni(opts: RenderOptions): Promise<DataURL>;
    export function databarstackedomni(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databarstackedomnicomposite(opts: RenderOptions): Promise<DataURL>;
    export function databarstackedomnicomposite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databartruncated(opts: RenderOptions): Promise<DataURL>;
    export function databartruncated(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function databartruncatedcomposite(opts: RenderOptions): Promise<DataURL>;
    export function databartruncatedcomposite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function datalogic2of5(opts: RenderOptions): Promise<DataURL>;
    export function datalogic2of5(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function datamatrix(opts: RenderOptions): Promise<DataURL>;
    export function datamatrix(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function datamatrixrectangular(opts: RenderOptions): Promise<DataURL>;
    export function datamatrixrectangular(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function datamatrixrectangularextension(opts: RenderOptions): Promise<DataURL>;
    export function datamatrixrectangularextension(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function dotcode(opts: RenderOptions): Promise<DataURL>;
    export function dotcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function ean13(opts: RenderOptions): Promise<DataURL>;
    export function ean13(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function ean13composite(opts: RenderOptions): Promise<DataURL>;
    export function ean13composite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function ean14(opts: RenderOptions): Promise<DataURL>;
    export function ean14(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function ean2(opts: RenderOptions): Promise<DataURL>;
    export function ean2(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function ean5(opts: RenderOptions): Promise<DataURL>;
    export function ean5(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function ean8(opts: RenderOptions): Promise<DataURL>;
    export function ean8(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function ean8composite(opts: RenderOptions): Promise<DataURL>;
    export function ean8composite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function flattermarken(opts: RenderOptions): Promise<DataURL>;
    export function flattermarken(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1_128(opts: RenderOptions): Promise<DataURL>;
    export function gs1_128(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1_128composite(opts: RenderOptions): Promise<DataURL>;
    export function gs1_128composite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1_cc(opts: RenderOptions): Promise<DataURL>;
    export function gs1_cc(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1datamatrix(opts: RenderOptions): Promise<DataURL>;
    export function gs1datamatrix(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1datamatrixrectangular(opts: RenderOptions): Promise<DataURL>;
    export function gs1datamatrixrectangular(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1dldatamatrix(opts: RenderOptions): Promise<DataURL>;
    export function gs1dldatamatrix(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1dlqrcode(opts: RenderOptions): Promise<DataURL>;
    export function gs1dlqrcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1dotcode(opts: RenderOptions): Promise<DataURL>;
    export function gs1dotcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1northamericancoupon(opts: RenderOptions): Promise<DataURL>;
    export function gs1northamericancoupon(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function gs1qrcode(opts: RenderOptions): Promise<DataURL>;
    export function gs1qrcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hanxin(opts: RenderOptions): Promise<DataURL>;
    export function hanxin(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hibcazteccode(opts: RenderOptions): Promise<DataURL>;
    export function hibcazteccode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hibccodablockf(opts: RenderOptions): Promise<DataURL>;
    export function hibccodablockf(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hibccode128(opts: RenderOptions): Promise<DataURL>;
    export function hibccode128(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hibccode39(opts: RenderOptions): Promise<DataURL>;
    export function hibccode39(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hibcdatamatrix(opts: RenderOptions): Promise<DataURL>;
    export function hibcdatamatrix(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hibcdatamatrixrectangular(opts: RenderOptions): Promise<DataURL>;
    export function hibcdatamatrixrectangular(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hibcmicropdf417(opts: RenderOptions): Promise<DataURL>;
    export function hibcmicropdf417(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hibcpdf417(opts: RenderOptions): Promise<DataURL>;
    export function hibcpdf417(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function hibcqrcode(opts: RenderOptions): Promise<DataURL>;
    export function hibcqrcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function iata2of5(opts: RenderOptions): Promise<DataURL>;
    export function iata2of5(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function identcode(opts: RenderOptions): Promise<DataURL>;
    export function identcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function industrial2of5(opts: RenderOptions): Promise<DataURL>;
    export function industrial2of5(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function interleaved2of5(opts: RenderOptions): Promise<DataURL>;
    export function interleaved2of5(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function isbn(opts: RenderOptions): Promise<DataURL>;
    export function isbn(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function ismn(opts: RenderOptions): Promise<DataURL>;
    export function ismn(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function issn(opts: RenderOptions): Promise<DataURL>;
    export function issn(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function itf14(opts: RenderOptions): Promise<DataURL>;
    export function itf14(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function jabcode(opts: RenderOptions): Promise<DataURL>;
    export function jabcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function japanpost(opts: RenderOptions): Promise<DataURL>;
    export function japanpost(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function kix(opts: RenderOptions): Promise<DataURL>;
    export function kix(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function leitcode(opts: RenderOptions): Promise<DataURL>;
    export function leitcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function mailmark(opts: RenderOptions): Promise<DataURL>;
    export function mailmark(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function mands(opts: RenderOptions): Promise<DataURL>;
    export function mands(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function matrix2of5(opts: RenderOptions): Promise<DataURL>;
    export function matrix2of5(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function maxicode(opts: RenderOptions): Promise<DataURL>;
    export function maxicode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function micropdf417(opts: RenderOptions): Promise<DataURL>;
    export function micropdf417(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function microqrcode(opts: RenderOptions): Promise<DataURL>;
    export function microqrcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function msi(opts: RenderOptions): Promise<DataURL>;
    export function msi(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function onecode(opts: RenderOptions): Promise<DataURL>;
    export function onecode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function pdf417(opts: RenderOptions): Promise<DataURL>;
    export function pdf417(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function pdf417compact(opts: RenderOptions): Promise<DataURL>;
    export function pdf417compact(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function pharmacode(opts: RenderOptions): Promise<DataURL>;
    export function pharmacode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function pharmacode2(opts: RenderOptions): Promise<DataURL>;
    export function pharmacode2(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function planet(opts: RenderOptions): Promise<DataURL>;
    export function planet(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function plessey(opts: RenderOptions): Promise<DataURL>;
    export function plessey(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function posicode(opts: RenderOptions): Promise<DataURL>;
    export function posicode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function postnet(opts: RenderOptions): Promise<DataURL>;
    export function postnet(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function pzn(opts: RenderOptions): Promise<DataURL>;
    export function pzn(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function qrcode(opts: RenderOptions): Promise<DataURL>;
    export function qrcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function rationalizedCodabar(opts: RenderOptions): Promise<DataURL>;
    export function rationalizedCodabar(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function raw(opts: RenderOptions): Promise<DataURL>;
    export function raw(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function rectangularmicroqrcode(opts: RenderOptions): Promise<DataURL>;
    export function rectangularmicroqrcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function royalmail(opts: RenderOptions): Promise<DataURL>;
    export function royalmail(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function sscc18(opts: RenderOptions): Promise<DataURL>;
    export function sscc18(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function swissqrcode(opts: RenderOptions): Promise<DataURL>;
    export function swissqrcode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function symbol(opts: RenderOptions): Promise<DataURL>;
    export function symbol(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function telepen(opts: RenderOptions): Promise<DataURL>;
    export function telepen(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function telepennumeric(opts: RenderOptions): Promise<DataURL>;
    export function telepennumeric(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function ultracode(opts: RenderOptions): Promise<DataURL>;
    export function ultracode(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function upca(opts: RenderOptions): Promise<DataURL>;
    export function upca(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function upcacomposite(opts: RenderOptions): Promise<DataURL>;
    export function upcacomposite(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function upce(opts: RenderOptions): Promise<DataURL>;
    export function upce(opts: RenderOptions, callback: ToDataURLCallback): void;
    export function upcecomposite(opts: RenderOptions): Promise<DataURL>;
    export function upcecomposite(opts: RenderOptions, callback: ToDataURLCallback): void;
}

export = BwipJs
