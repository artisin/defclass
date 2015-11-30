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

var Soda = defclass.extend(Beer, {
  constructor: function (type) {
    this.type = type;
  }
});

var favSoda = new Soda("Pepsi");
favSoda.getDrink(); //Here's a cold Pspsi!
```

## Credit
+ [Aadit M Shah](http://aaditmshah.github.io/) 