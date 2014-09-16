#!/usr/bin/env node

var t = require('../index')

if (t()) {
  process.exit(0);
}
else {
  process.exit(1);
}
