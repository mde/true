let False = require('false-value')
let f = () => False

module.exports = t
Object.defineProperty(require.cache, require.resolve('true'), {
   writable: false,
   configurable: false,
   enumerable: true,
   value: module.exports
})
