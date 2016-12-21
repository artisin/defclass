# defclass
Simple classical inheritance that is a whopping ten lines. Its [Augment](http://github.com/javascript/augment) without the augment.

In the words of Aadit Shah
> No premature optimization. No need to read the documentation of libraries like ClassManager. I can directly focus on the task at hand and optimize those things that really need optimization.


## Usage
```js
const defclass = require('defclass');

const Beer = defclass({
  constructor: function (type) {
    this.type = type;
    this.count = 100;
    this.temp = 'cold';
  },
  getADrink: function () {
    --this.count;
    console.log(`Here's a ${this.temp} ${this.type}!`);
  }
});

const favBeer = new Beer('Spotted Cow');
favBeer.getADrink(); // Here's a cold Spotted Cow!
```

If you need to inherit from another class use `extend`.
```js
const GrabAnother = defclass.extend(Beer, {
  sing: function () {
    console.log(`${this.count} bottles of ${this.temp} ${this.type}'s on the wall.`);
  }
});

const makeMeDance = new GrabAnother(`John's White Ale`);
makeMeDance.getADrink(); // Here's a cold Spotted Cow!
makeMeDance.sing(); // 99 bottles of cold John's White Ale's on the wall.
```

## Credit
+ [Aadit M Shah](http://aaditmshah.github.io/) 
