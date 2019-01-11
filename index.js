module.exports = {
  extends: 'standard',
  rules: {
    'array-callback-return': 'error',
    'no-magic-numbers': ['warn', {
      ignoreArrayIndexes: true,
      enforceConst: true,
      ignore: [0, 1, 2, -1, 7, 10, 12, 24, 60, 100, 360, 365, 1000, 1024, 9999]
    }],
    'require-yield': 'error',
    'max-statements': ['error', 75],
    'max-lines-per-function': ['error', 150],
    'max-lines': ['error', 2500],
    'max-depth': ['error', 8],
    'quote-props': ['error', 'as-needed']
  },
}