/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-02 09:47:02
 * @version $Id$
 */

// 传递参数
// function foo() {
//     bar.apply(null, arguments);
// }

// function bar(a, b, c) {
//     // do stuff here
// }

// // 另一个技巧是同时使用 call 和 apply，创建一个快速的解绑包装器
// function Foo() {};

// Foo.prototype.method = function(a, b, c) {
//     console.log(this, a, b, c);
// }

// Foo.method = function() {
//     // 结果：Foo.prototype.method.call(this, arg1, arg2... argN);
//     Function.call.apply(Foo.prototype.method, arguments);
// }

// // 上面的Foo.method和下面的函数效果一样
// Foo.method = function() {
//     var args = Array.prototype.slice.call(arguments);
//     Foo.prototype.method.apply(args[0], args.slice(1));
// };

// // 自动更新
// // arguments 对象为其内部属性形式参数创建getter 和 setter方法。
// // 因此 改变形参的值会影响到arguments对象的值，反之亦然。
// function foo(a, b, c) {
//     arguments[0] = 2;
//     a; // 2

//     b = 4;
//     arguments[1]; // 4

//     var d = c;
//     d = 9;
//     c; // 3
// }
// foo(1, 2, 3);


// 性能真相
// arguments 对象总会被创建，除了两个特殊情况-作为局部变量声明和
// 作为形式参数。而不管它是否有被使用。

// arguments 的getters和setters方法总会被创建；因此使用arguments
// 对性能不会有什么影响。除非是需要对arguments对象的属性进行多次
// 访问
// function f(a) {
//     "use strict";
//     a = 42;
//     return [a, arguments[0]];
// }
// var pair = f(17);
// // assert(pair[0] === 42);
// // assert(pair[1] === 17);

// // 使用 arguments.callee 会显著影响现代JavaScript引擎的性能。
// function foo() {
//     arguments.callee; // do something width this function object
//     arguments.callee.caller; // and the calling function object
// }

// function bigLoop() {
//     for (var i = 0; i < 1000000; i++) {
//         foo(); // Would normally be inlined...
//     }
// }

// 构造函数
// JavaScript 通过 new 关键词方式调用的函数都被认为是构造函数
// 在构造函数内部-也就是被调用的函数内-this指向新创建的对象Object.
// 这个新创建的对象的prototype被指向到构造函数的prototype
//如果构造函数没有显式的return表达式，则隐式的会返回this对象-
// 也就是新创建的对象
// function Foo() {
//     this.bla = 1;
// }

// Foo.prototype.test = function() {
//     consoloe.log(this.bla);
// };

// var test = new Foo();
// 上面代码中Foo作为构造函数调用，并设置新创建对象的prototype
//为Foo.prototype
// 显式的return 表达式将会影响返回结果，但仅限于返回的一个对象。
// function Bar() {
//     return 2;
// }
// new Bar(); // 返回新创建的对象

// function Test() {
//     this.value = 2;
//     return {
//         foo: 1
//     };
// }
// new Test(); // 返回的对象

// new Bar() 返回的是新创建的对象，而不是数字的字面值2.
// 因此 new Bar().constructor === Bar,但如果返回的是数字对象，结果就不同了，
// 如下所示:
// function Bar() {
//     return new Number(2);
// }
// new Bar().constructor === Number;

// new Test() 是函数返回的对象，而不是通过new 关键词新创建的对象，因此:
// (new Test()).value === undefined;
// (new Test()).foo === 1;

// 如果 new 被遗漏了，则函数不会返回新创建的对象。
// function Foo() {
//     this.bla = 1; // 获取设置全局对象
// }
// Foo(); // undefined

// 工厂模式
// 为了不使用**new**关键词，构造函数必须显式的返回一个值。
// function Bar() {
//     var value = 1;
//     return {
//         method: function() {
//             return value;
//         }
//     }
// }
// Bar.prototype = {
//     foo: function() {}
// };
// new Bar();
// Bar();

// new Bar() 和Bar()返回的值完全相同，一个新创建的拥有method属性的
// 对象被返回，其实这里创建了一个**闭包**。
// new Bar() 并不会改变返回对象的原型。
// 在上面的例子中，使用或者不使用new关键字没有功能性的区别。如下：
// var bar1 = new Bar();
// typeof(bar1.method); // "function"
// typeof(bar.foo); // "undefined"

// var bar2 = Bar();
// typeof(bar2.method); // "function"
// typeof(bar2.foo); // "undefined"

// 通过工厂模式创建新对象
// 为了创建对象，我们可以创建一个工厂方法，并且在方法
// 内构造一个新对象。
// function Foo() {
//     var obj = {};
//     obj.value = 'blub';

//     var private = 2;
//     obj.someMethod = function(value) {
//         this.value = value;
//     }
//     obj.getPrivate = function() {
//         return private;
//     }
//     return obj;
// }

// if (typeof(Storage) != 'undefined') {
//     // Some Code...
// } else {
//     // Sorry...
// }

// localStorage 实例 计算用户点击次数
// function clickCounter() {
//     if (typeof(Storage) != 'undefined') {
//         if (localStorage.clickcount) {
//             localStorage.clickcount = Number(localStorage.clickcount + 1);
//         } else {
//             localStorage.clickcount = 1;
//         }
//         document.getElementById('result').innerHTML = "You have clicked the button " + localStorage.clickcount + " 次！";

//     } else {
//         document.getElementById('result').innerHTML = "Sorry! Your browser don't support localStorage";
//     }
// }

// sessionStorage 实例
// function clickCounter() {
//     if (typeof(Storage) != 'undefined') {
//         if (sessionStorage.clickcount) {
//             sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
//         } else {
//             sessionStorage.clickcount = 1;
//         }
//         document.getElementById('result').innerHTML = sessionStorage.clickcount;

//     } else {
//         document.getElementById('result').innerHTML = "Sorry...";
//     }
// }

// 作用域和命名空间
function test() { // 一个作用域
    for (var m = 0; m < 10; m++) { // 不是一个作用域
        // Do something...
    }
    alert(m);
}
test();