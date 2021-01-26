const path = require("path");
const HtmlPlugin = require( "html-webpack-plugin");
const MiniCssExtracPlugin = require("mini-css-extract-plugin");
module.exports = {

    mode:'development',
    // 入口文件的配置项
    entry:{
        // 打包必须是js 或者是 json文件
        'index':'./src/index.js'
    },

    // 出口文件的配置项
    output:{
        path: path.resolve(__dirname,"dist"),
        filename:'[name].js',
        publicPath:"http://127.0.0.1:8081/"

        // 导出的名字按照要打包文件的名字
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtracPlugin.loader,'css-loader','postcss-loader']
            },{
                test:/\.scss$/,
                use:[MiniCssExtracPlugin.loader,'css-loader','sass-loader']
            },{
                test:/\.(png|jpg|gif)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500,
                        outputPath:'images/'
                    }
                }]
            },{
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new MiniCssExtracPlugin({
            filename:"css/[name].css"
        }),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        compress:true,
        port:8081,
        // open:true
    }
}