module.exports = {
  extends: 'standard',
  rules: {
    'array-callback-return': 'error',
    'no-magic-numbers': ['warn', {
      ignoreArrayIndexes: true,
      enforceConst: true,
      ignore: [0, 1, -1]
    }],
    'require-jsdoc': ['warn', {
      require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: false
      }
    }],
    'valid-jsdoc': 'warn'
  },
}