# flight-withEach

[![Build Status](https://secure.travis-ci.org/olivierlesnicki/flight-withEach.png)](http://travis-ci.org/olivierlesnicki/flight-withEach)

A [Flight](https://github.com/flightjs/flight) mixin that enriches components with underscore.js _.each function.

### Installation

```bash
bower install --save flight-withEach
```

### Example

```javascript
define(function(require) {
    
  var defineComponent = require('flight/lib/component');
  var withDialog      = require('bower_components/flight-withEach/lib/withEach');

  return defineComponent(fancyComponent, withEach);

  function fancyComponent() {
    
    // Logs each number in turn
    this.each([1, 2, 3], function(value, i) {
        console.log(value);
    });
    
    // Logs each number in turn
    this.each({one: 1, two: 2, three: 3}, function(value, i){
        console.log(value);
    });
    
  }
  
});
```

### Development

Development of this component requires [Bower](http://bower.io), and preferably
[Karma](http://karma-runner.github.io) to be globally installed:

```bash
npm install -g bower karma
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install
bower install
```

To continuously run the tests in Chrome and Firefox during development, just run:

```bash
karma start
```

### Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
