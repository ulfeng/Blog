/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-02 09:47:02
 * @version $Id$
 */

// 传递参数
function foo() {
    bar.apply(null, arguments);
}

function bar(a, b, c) {
    // do stuff here
}

// 另一个技巧是同时使用 call 和 apply，创建一个快速的解绑包装器
function Foo() {};

Foo.prototype.method = k(a, b, c) {
    console.log(this, a, b, c);
}

Foo.method = function() {
	// 结果：Foo.prototype.method.call(this, arg1, arg2... argN);
    Function.call.apply(Foo.prototype.method, arguments);
}

// 上面的Foo.method和下面的函数效果一样
Foo.method=function(){
	var args=Array.prototype.slice.call(arguments);
	Foo.prototype.method.apply(args[0],args.slice(1));
};

// 自动更新
// arguments 对象为其内部属性形式参数创建getter 和 setter方法。
// 因此 改变形参的值会影响到arguments对象的值，反之亦然。
function foo(a,b,c){
	arguments[0]=2;
	a; // 2

	b=4;
	arguments[1]; // 4

	var d= c;
	d=9;
	c; // 3
}
foo(1,2,3);


// 性能真相
// arguments 对象总会被创建，除了两个特殊情况-作为局部变量声明和
// 作为形式参数。而不管它是否有被使用。

// arguments 的getters和setters方法总会被创建；因此使用arguments
// 对性能不会有什么影响。除非是需要对arguments对象的属性进行多次
// 访问
function f(a){
	"use strict";
	a = 42;
	return[a,arguments[0]];
}
var pair=f(17);
assert(pair[0]===42);
assert(pair[1]===17);

// 使用 arguments.callee 会显著影响现代JavaScript引擎的性能。
function foo(){
	arguments.callee; // do something width this function object
	arguments.callee.caller; // and the calling function object
}
function bigLoop(){
	for(var i=0; i<1000000; i++){
		foo(); // Would normally be inlined...
	}
}

// 
