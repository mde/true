## true

[![Build Status](https://travis-ci.org/mde/true.png)](https://travis-ci.org/mde/true)

A JavaScript port of the Unix utility 'true'. Returns the Boolean value `true`

### Overview

This module should be used when you need a function that returns the Boolean
value `true`.

### Installing

```bash
$ npm install true
```

### Usage

Simply require the `true` module. The export is a function which returns the
Boolean value `true`:

```javascript
  var t = require('./true')
    , myTrueValue = t();

console.log(myTrueValue === true); // Logs 'true'
```

### CLI

If you install `true` globally, you can call it appropriately as a CLI command:

```bash
$ npm install true -g
```

You will likely have to use `sudo` to install it globally.

### Tests

Running the tests requires the [Jake JavaScript build
tool](https://github.com/mde/jake). In the root project directory, run the
following:

```bash
$ jake test
```

### Contributing

Please feel free to file bugs or suggest improvements here:

https://github.com/mde/true/issues

