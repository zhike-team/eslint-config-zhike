module.exports = {
  extends: 'standard',
  rules: {
    'array-callback-return': 'error',
    'no-magic-numbers': ['warn', {
      ignoreArrayIndexes: true,
      enforceConst: true,
      ignore: [0, 1, 2, -1, 7, 10, 24, 60, 100, 1000]
    }],
    'require-jsdoc': 'warn',
    'valid-jsdoc': 'warn',
    'require-yield': 'error'
  },
}