const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist/js'),
        filename: 'main.js'
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/js/'
    },

    performance:{
        maxEntrypointSize: 400000,
        maxAssetSize: 400000
    },


    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "production",
  
    module: {
      rules: [
        {
          // 拡張子 .js の場合
          test: /\.js$/,
          use: [
            {
              // Babel を利用する
              loader: "babel-loader",
              // Babel のオプションを指定する
              options: {
                presets: [
                  // プリセットを指定することで、ES2020 を ES5 に変換
                  "@babel/preset-env",
                  // React の JSX を解釈
                  "@babel/react"
                ]
              }
            }
          ]
        }
      ]
    }
  };