const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(eot|ttf|woff2?|otf|svg|png)$/,
                loader: 'file-loader',
                options: { name: '[name].[ext]' }
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 8080,
        publicPath: "http://localhost:8080/dist/",
        hotOnly: true,
        open: true,
        historyApiFallback: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};