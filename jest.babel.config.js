module.exports = {
  presets: [
    ['next/babel', { 'preset-env': { modules: 'commonjs' } }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // Modern JSX transform
      },
    ],
  ],
};