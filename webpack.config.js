import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin'
import { resolve as _resolve } from 'path'

const DEVELOPMENT_MODE = process.env.DEVELOPMENT_MODE

export const mode = DEVELOPMENT_MODE
export const context = _resolve(__dirname)
export const devtool = 'inline-source-map'
export const entry = './src/index.tsx'
export const resolve = {
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  alias: {
    const: _resolve(__dirname, 'src', 'const'),
    store: _resolve(__dirname, 'src', 'store'),
    pages: _resolve(__dirname, 'src', 'pages'),
    public: _resolve(__dirname, 'public'),
    api: _resolve(__dirname, 'src', 'api'),
    hooks: _resolve(__dirname, 'src', 'hooks'),
    context: _resolve(__dirname, 'src', 'context'),
    services: _resolve(__dirname, 'src', 'services'),
    utils: _resolve(__dirname, 'src', 'utils'),
    components: _resolve(__dirname, 'src', 'components'),
    styles: _resolve(__dirname, 'src', 'styles')
  }
}
export const output = {
  path: _resolve(__dirname, 'build'),
  filename: 'index.js',
  publicPath: '/',
  clean: true
}
export const devServer = {
  port: 3000,
  historyApiFallback: true
}
export const plugins = [
  new Dotenv({
    path: './.env'
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/assets/webpack-logo.png'
  }),
  new MiniCssExtractPlugin()
]
export const module = {
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

    { test: /\.css$/i, use: [_loader, 'css-loader'] },
    {
      test: /\.s(a|c)ss$/i,
      use: [_loader, 'css-loader', 'sass-loader']
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      type: 'asset/resource'
    },
    {
      test: /\.(woff2?|ttf)$/i,
      type: 'asset/resource'
    }
  ]
}
