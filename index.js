module.exports = {
  extends: 'standard',
  rules: {
    'array-callback-return': 'error',
    'no-magic-numbers': ['warn', {
      ignoreArrayIndexes: true,
      enforceConst: true,
      ignore: [0, 1, 2, -1, 10]
    }],
    'require-jsdoc': 'warn',
    'valid-jsdoc': 'warn'
  },
}