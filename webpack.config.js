//引用path模組
const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  //這個webpack打包的對象，這裡面加上剛剛建立的index.js
  entry: __dirname + "/src/index.js", // 入口文件
  output: {
    //這裡是打包後的檔案名稱
    filename: "index.bundle.js",
    // 輸出時，會在同層root目錄下的dist中產出 index.bundle.js
    path: path.join(__dirname, "/dist"),
  },
  module: {
    rules: [
      // 创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。
      // 这些规则能够对模块(module)应用 loader，或者修改解析器(parser)
      {
        // 哪些模組要使用: test 判斷哪些模組適用此規則 解析.jsx结尾的模块(文件)
        test: /\.(js|jsx)$/,
        // 要做哪些處理: use 設定這些模組要用哪些 Loaders 做處理。
        use: [
          {
            loader: "babel-loader",
          },
        ],
        //排除node_modules下的js文件
        exclude: /(node_modules|bower_components)/,
        //要在 src 目錄中的 js文件
        // include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.s[ac]ss$/i, // or /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "url-loader",
        },
      },
    ],
  },
  // 這段很重要，記得在.XXX => xxx前面+ .
  resolve: {
    extensions: [".js", ".json", ".jsx", ".scss"],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "static"),
    },
    open: true,
    hot: true,
  },
  mode: "none",
  // plugins: [new HtmlWebPackPlugin()], //用不到
};
