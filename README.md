# defclass
Simple classical inheritance that is a whopping ten lines. Its [Augment](http://github.com/javascript/augment) without the augment.

In the words of @aaditmshah
> No premature optimization. No need to read the documentation of libraries like ClassManager. I can directly focus on the task at hand and optimize those things that really need optimization.


## Usage
```js
var Beer = defclass({
  constructor: function (type) {
    this.temp = 'cold';
    this.type = type;
  },
  getDrink: function () {
    alert("Here's a " + this.temp + " " + this.type + "!");
  }
});

var favBeer = new Beer("Spotted Cow");
favBeer.getDrink(); //Here's a cold Spotted Cow!
```

If you need to inherit from another class use `extend`.
```js
var defclass = require('defclass');

var Tea = defclass.extend(Beer, {
  constructor: function (type) {
    this.type = type;
    this.temp = 'hot';
  }
});

var favTea = new Tea("Darjeeling Black");
favTea.getDrink(); //Here's a hot Darjeeling Black!
```

## Credit
+ [Aadit M Shah](http://aaditmshah.github.io/) 