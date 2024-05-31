#!/usr/bin/env node

var t = require('../index')

try {
  if (t()) {
      let myTrueValue = t()
      console.log(myTrueValue)
      process.exit(0);
  } else {
      throw new Error('true is not true');
  }
} catch (err) {
  console.log(err.message);
  console.log(err.stack);
  process.exit(1);
}
