export default {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    // `style: true` 会加载 less 文件
    ['import', { libraryName: 'antd-mobile', style: 'css' }],
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    ['@babel/plugin-proposal-class-properties'],
  ],
};
