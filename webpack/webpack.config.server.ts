import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

const config: Configuration = {
  name: 'server',
  entry: {
    server: './server/index.tsx',
  },
  mode: (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  target: 'node',
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ context: 'server', from: 'views', to: 'views' }],
    }),
  ],
};

export default config;
