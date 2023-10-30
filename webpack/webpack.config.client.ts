import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
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
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin({}),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'json',
      statsFilename: '../client-bundle.json',
      generateStatsFile: true,
    }),
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: false,
        reactPackage: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|react-transition-group|styled-components)[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: 10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};

export default config;
