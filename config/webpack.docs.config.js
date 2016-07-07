import webpack from 'webpack';
import path    from 'path';

const dependencies = [
  'react',
  'classnames',
  'component-playground',
];

export default {
  cache: true,
  devTool: 'cheap-module-source-map',
  entry: {
    vendor:      dependencies,
    avatar:      path.join(__dirname, '../src/scripts/docs/AvatarApp.jsx'),
    bucket:      path.join(__dirname, '../src/scripts/docs/BucketApp.jsx'),
    button:      path.join(__dirname, '../src/scripts/docs/ButtonApp.jsx'),
    datepicker:  path.join(__dirname, '../src/scripts/docs/DatePickerApp.jsx'),
    dropdown:    path.join(__dirname, '../src/scripts/docs/DropdownApp.jsx'),
    feedback:    path.join(__dirname, '../src/scripts/docs/FeedbackApp.jsx'),
    form:        path.join(__dirname, '../src/scripts/docs/FormApp.jsx'),
    icon:        path.join(__dirname, '../src/scripts/docs/IconApp.jsx'),
    label:       path.join(__dirname, '../src/scripts/docs/LabelApp.jsx'),
    loader:      path.join(__dirname, '../src/scripts/docs/LoaderApp.jsx'),
    message:     path.join(__dirname, '../src/scripts/docs/MessageApp.jsx'),
    modal:       path.join(__dirname, '../src/scripts/docs/ModalApp.jsx'),
    navigation:  path.join(__dirname, '../src/scripts/docs/NavigationApp.jsx'),
    progressbar: path.join(__dirname, '../src/scripts/docs/ProgressBarApp.jsx'),
    pill:        path.join(__dirname, '../src/scripts/docs/PillApp.jsx'),
    tabs:        path.join(__dirname, '../src/scripts/docs/TabsApp.jsx'),
    tooltips:    path.join(__dirname, '../src/scripts/docs/TooltipsApp.jsx'),
  },
  output: {
    path: path.join(__dirname, '../build/scripts'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      react: path.join(__dirname, '../', 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: false, exclude: /vendor/ }),
  ],
};
