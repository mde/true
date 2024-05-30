let True = require('true-value')
let t = () => True

module.exports = t
Object.defineProperty(require.cache, require.resolve('true'), {
   writable: false,
   configurable: false,
   enumerable: true,
   value: module.exports
})
