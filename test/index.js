
var t = require('../index')
  , assert = require("assert")
  , tests;

tests = {
  'test that true returns the Boolean value `true`': function () {
    assert.strictEqual(true, t());
  },
  
  'test that true returns the Boolean value `true` even if we provide a param `false`': function () {
    assert.strictEqual(true, t(false));
  }
};

module.exports = tests;
