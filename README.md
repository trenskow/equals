@trenskow/equals
----

A very simple JavaScript library to test equality between two (or more) values.

# Usage

Below is an example of usage.

````javascript
import equals from '@trenskow/equals';

equals(1, 1); // true
equals(1, 0); // false
equals([1, 2, 3], [1, 2, 3]); // true
equals([1, 2, 3], [3, 2, 1]); // false
equals({ a: 1, b: 2}, { a: 1, b: 2 }); // true
equals({ a: 1, b: 2}, { a: 2, b: 1 }); // false
equals(true, 1); // false
equals(false, 0); // false
````

# License

See license in LICENSE
