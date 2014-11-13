// Cache as a local var for important perf improvements
var t;
module.exports = function aJavaScriptPortOfTheUnixUtilityTrueReturnsTheBooleanValueTrue () {
  if (t !== true) {
    t = true;
  }
  return t;
};

