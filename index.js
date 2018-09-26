module.exports = {
  extends: 'standard',
  rules: {
    'array-callback-return': 'error',
    'no-magic-numbers': ['warn', {
      ignoreArrayIndexes: true,
      enforceConst: true,
      ignore: [0, 1, 2, -1, 7, 10, 12, 24, 60, 100, 360, 365, 1000, 1024, 9999]
    }],
    'require-jsdoc': 'warn',
    'valid-jsdoc': 'warn',
    'require-yield': 'error',
    'quote-props': ['error', 'as-needed']
  },
}