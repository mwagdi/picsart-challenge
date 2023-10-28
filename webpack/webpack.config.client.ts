import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import { WebpackManifestPlugin } from 'webpack-manifest-plugin';

const config: Configuration = {
  name: 'client',
  mode: (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development',
  entry: './client/index.tsx',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@client': path.resolve(__dirname, '../client'),
      '@queries': path.resolve(__dirname, '../queries'),
      '@contexts': path.resolve(__dirname, '../contexts'),
      '@projectTypes': path.resolve(__dirname, '../types'),
      '@utils': path.resolve(__dirname, '../utils'),
    },
  },
  target: 'web',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '',
  },
  plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin({})],
  devtool: 'inline-source-map',
};

export default config;
