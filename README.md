# @minikit/arith

Perform addition, subtraction, multiplication and division operations precisely using javascript

### Why

```js
0.1 + 0.2 = 0.30000000000000004
1.0 - 0.9 = 0.09999999999999998
0.105.toFixed(2) = 0.1 // not 0.11
```

### Install

```
npm install @minikit/arith --save
```

### Methods

```js
arith.strip(num)         // strip a number to nearest right number
arith.plus(num1, num2, num3, ...)   // addition, num + num2 + num3, two numbers is required at least.
arith.minus(num1, num2, num3, ...)  // subtraction, num1 - num2 - num3
arith.multip(num1, num2, num3, ...)  // multiplication, num1 * num2 * num3
arith.divide(num1, num2, num3, ...) // division, num1 / num2 / num3
arith.round(num, ratio)  // round a number based on ratio
```

### Usage

```js
import arith from '@minikit/arith'
arith.strip(0.09999999999999998); // = 0.1
arith.plus(0.1, 0.2);             // = 0.3, not 0.30000000000000004
arith.plus(2.3, 2.4);             // = 4.7, not 4.699999999999999
arith.minus(1.0, 0.9);            // = 0.1, not 0.09999999999999998
arith.multip(3, 0.3);              // = 0.9, not 0.8999999999999999
arith.multip(0.362, 100);          // = 36.2, not 36.199999999999996
arith.divide(1.21, 1.1);          // = 1.1, not 1.0999999999999999
arith.round(0.105, 2);            // = 0.11, not 0.1
```

PS: If you want to get rid of `XXX is beyond boundary when transfer to integer, the results may not be accurate`, use this at the beginning of your app to turn off boundary checking.
```js
arith.enableBoundaryChecking(false); // default param is true
```

### License
MIT

