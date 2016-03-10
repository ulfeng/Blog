## JavaScript 逻辑运算符 "||" and "&&"

##### 逻辑与("&&")
```javascript
// 只有前后都是true的时候才返回true
alert(true && true);  // true
alert(false && true); // false
alert(true && false); // false
alert(false && false);// false
```
不单单是Boolean的情况：
```javascript
alert('' && 1);     // false true  ''
alert('' && 0);     // false false ''
alert('a' && 1);    // true true   1
alert('a' && 0);    // true false  0
alert('a' && '');   // true false  ''
alert(0 && 'a');    // false true  0
alert(0 && '');     // false false 0
```
**结论:**
1、"&&"前面是false，都将返回"&&"前面的值；<br>
2、"&&"前面是true，都将返回"&&"后面的值。

##### 逻辑或("||")
```javascript
// 只有只有一个true 则返回true
alert(false || true);   // true
alert(false || false);  // false
alert(true || true);    // true
alert(true || false);   // true
```
其它情况:
```javascript
alert(0 || 1);       // false true    1
alert(2 || 1);       // true true     2
alert('a' || 1);     // true true     a
alert('' || 1);      // false true    1
alert('a' || 0);     // true false    a
alert('a' || 'b');   // true true     a
alert('' || 0);      // false false   0
alert(0 || '');      // false false   ''
```
**结论：**
1、前面是false，都将返回后面的值；<br>
2、前面是true,都将返回前面的值；


