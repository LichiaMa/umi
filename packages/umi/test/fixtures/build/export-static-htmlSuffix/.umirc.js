
export default {
  exportStatic: {
    htmlSuffix: true,
  },
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    'react-router': 'window.ReactRouter',
    'react-router-dom': 'window.ReactRouterDOM',
    'react-router-config': 'window.ReactRouterConfig',
    'assert': 'window.assert',
  },
  chainWebpack(webpackConfig, { webpack }) {
    webpackConfig
      .plugin('ignore-core-js')
      .use(
        webpack.IgnorePlugin,
        [
          /regenerator-runtime|react-loadable|umi-history/,
        ],
      );
  },
}
