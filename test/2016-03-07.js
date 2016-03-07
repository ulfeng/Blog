/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-07 10:03:41
 * @version $Id$
 */
function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}
is('String', 'test'); // true
is('String', new String('test')); // true

function Foo() {}

function Bar() {}
Bar.prototype = new Foo();
new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true

// 如果仅仅设置 Bar.prototype函数Foo本身，而不是Foo构造函数的一个实例
Bar.prototype = Foo;
new Bar() instanceof Foo; // false

new String('foo') instanceof String; // true
new String('foo') instanceof Object; // true

'foo' instanceof String; // false
'foo' instanceof Object; // false
