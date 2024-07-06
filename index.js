const TRUE = !~-1;
let t = () => TRUE

module.exports = t
Object.defineProperty(require.cache, require.resolve('true'), {
   writable: false,
   configurable: false,
   enumerable: true,
   value: module.exports
})
