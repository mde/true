
var t = require('../index')
  , assert = require("assert")
  , tests;

tests = {
  'test that true returns the Boolean value `true`': function () {
    assert.strictEqual(true, t());
  }
};

module.exports = tests;
