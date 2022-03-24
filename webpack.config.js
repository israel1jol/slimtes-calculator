const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname, "dist/"),
        publicPath:"/dist/",
        filename:"main.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",
                options:{presets:["@babel/preset-env", "@babel/preset-react"]}
            },
            {
                test:/\.css$/,
                use:["style-loader", "css-loader"]
            }
        ]
    },
    resolve:{
        extensions:["*", ".js", ".jsx"]
    },
    devServer:{
        port:5000,
        host:"localhost"
    },
    plugins:[new webpack.HotModuleReplacementPlugin()]
}