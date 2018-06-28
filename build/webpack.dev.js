const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    'vant-docs': './docs/src/index.js',
    // 'vant-mobile': './docs/src/mobile.js'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  stats: {
    modules: false,
    children: false
  },
  serve: {
    open: false,
    host: '0.0.0.0',
    dev: {
      logLevel: 'warn'
    },
    hot: {
      logLevel: 'warn'
    }
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      package: path.join(__dirname, '../packages')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                /**
                 * 默认为 true。 这意味着编译好的渲染函数会保留所有 HTML 标签之间的空格。
                 * 如果设置为 false， 则标签之间的空格会被忽略。
                 * 这能够略微提升一点性能但是可能会影响到内联元素的布局。
                 */
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|postcss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          'fast-vue-md-loader'
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['vant-docs'],
      template: 'docs/src/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    // new HtmlWebpackPlugin({
    //   chunks: ['vant-mobile'],
    //   template: 'docs/src/index.tpl',
    //   filename: 'mobile.html',
    //   inject: true
    // })
  ]
};
