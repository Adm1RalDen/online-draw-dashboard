/* eslint @typescript-eslint/no-var-requires: "off" */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const CopyPlugin = require('copy-webpack-plugin')

const DEVELOPMENT_MODE = process.env.DEVELOPMENT_MODE

module.exports = {
  mode: DEVELOPMENT_MODE,
  context: path.resolve(__dirname),
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      public: path.resolve(__dirname, 'public'),
      const: path.resolve(__dirname, 'src', 'const'),
      store: path.resolve(__dirname, 'src', 'store'),
      pages: path.resolve(__dirname, 'src', 'pages'),
      public: path.resolve(__dirname, 'public'),
      api: path.resolve(__dirname, 'src', 'api'),
      hooks: path.resolve(__dirname, 'src', 'hooks'),
      context: path.resolve(__dirname, 'src', 'context'),
      services: path.resolve(__dirname, 'src', 'services'),
      utils: path.resolve(__dirname, 'src', 'utils'),
      components: path.resolve(__dirname, 'src', 'components'),
      styles: path.resolve(__dirname, 'src', 'styles'),
      canvas_classes: path.resolve(__dirname, 'src', 'canvas_classes')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
    clean: true
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new Dotenv({
      path: './.env'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/assets/webpack-logo.png'
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'public/assets', to: 'assets' }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]]
          }
        }
      },

      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              ['@babel/preset-react', { runtime: 'automatic' }]
            ]
          }
        }
      },

      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.s(a|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf)$/i,
        type: 'asset/resource'
      }
    ]
  }
}
