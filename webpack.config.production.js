// pathモジュールの読み込み
const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.jsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "docs")
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/react"
                        ]
                    },
                }],
                exclude: / node_modules /,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                }]
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },
};