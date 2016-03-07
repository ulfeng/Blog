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

'foo'
instanceof String; // false
'foo'
instanceof Object; // false

new Number(10) == 10; // Number.toString() 返回的字符串被再次转换为数字

10 == '10'; // 字符串被转换为数字
10 == '+10'; // 同上
10 == '010'; // 同上
isNaN(null) == false; // null 被转换为数字0

10 == 010;
10 == '-10';

new Number(10) === 10; // False, 对象与数字的比较
Number(10) === 10; // True, 数字与数字的比较
new Number(10) + 0 === 10; // True,由于隐式的类型转化

+ '010' === 10;
Number('010') === 10;
parseInt('010', 10) === 10 // 用来转换为整数

    + '010.2' === 10.2;
Number('010.2') === 10.2;
parseInt('010.2', 10) === 10;

!!'foo'; // true
!!''; // false
!!'0'; // true
!!'1'; // true
!!'-1'; // true
!!{}; // true
!!true; // true


var foo = 1;

function test() {
    var foo = 2;
    eval('foo=3');
    return foo;
}
test(); //3
foo; // 1

var foo = 1;

function test() {
    var foo = 2;
    var bar = eval;
    bar('foo=3');
    return foo;
}
test(); // 2
foo; // 3

var foo = 1;

function test() {
    var foo = 2;
    window.foo = 3;
    return foo;
}
test(); // 2
foo; // 3


var foo = 1;

function test() {
    var foo = 2;
    eval.call(window, 'foo=3');
    return foo;
}

test(); // 2
foo; // 3

var undefined = 123;
(function(something, foo, undefined) {
    // 局部作用域里的undefined变量重新获得了'undefined'值
})('Hello World', 42);

var undefined = 123;
(function(something, foo) {
    var undefined;
    // ...
})('Hello World', 42);
