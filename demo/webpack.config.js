module.exports = {
    context: `${__dirname}/src`,
    entry: './main',
    module: {
        loaders: [
            {
                include: `${__dirname}/src`,
                loader: 'babel',
                test: /\.js$/,
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: './public/javascripts',
    },
};
