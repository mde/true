#!/usr/bin/env node

var t = require('../index')

try {
  if (t()) {
      process.exit(0);
  } else {
      throw new Error('True is false');
  }
} catch (err) {
  console.log(err.message);
  console.log(err.stack);
  process.exit(1);
}
