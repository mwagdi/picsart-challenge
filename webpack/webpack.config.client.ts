import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import CopyWebpackPlugin from 'copy-webpack-plugin';
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
  },
  target: 'web',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '',
  },
  plugins: [
    // new CopyWebpackPlugin({
    //   patterns: [{ from: 'public' }],
    // }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin({}),
  ],
};

export default config;
