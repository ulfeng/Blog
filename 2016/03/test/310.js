/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-10 10:25:35
 * @version $Id$
 */

// alert(true && true);  // true
// alert(false && true); // false
// alert(true && false); // false
// alert(false && false);// false

// alert('' && 1);     // false true  ''
// alert('' && 0);     // false false ''
// alert('a' && 1);    // true true   1
// alert('a' && 0);    // true false  0
// alert('a' && '');   // true false  ''
// alert(0 && 'a');    // false true  0
// alert(0 && '');     // false false 0


alert(false || true);   // true
alert(false || false);  // false
alert(true || true);    // true
alert(true || false);   // true

alert(0 || 1);       // false true    1
alert(2 || 1);       // true true     2
alert('a' || 1);     // true true     a
alert('' || 1);      // false true    1
alert('a' || 0);     // true false    a
alert('a' || 'b');   // true true     a
alert('' || 0);      // false false   0
alert(0 || '');      // false false   ''
