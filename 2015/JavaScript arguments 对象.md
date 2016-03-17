## arguments 对象
JavaScript 函数内部都能访问一个特殊的变量arguments，这个变量维护着所有传入该函数的<br>
参数列表。<br>
arguments 变量不是一个数组(array)。尽管在语法在它有数组的相关属性length,但它不从<br>
Array.prototype 继承，实际上它是一个对象(Object)。<br>
因此，无法对arguments变量使用标准的数组方法，比如push/pop/slice。虽然使用for循环<br>
遍历也是可以的，但是为了更好的使用数组方法，最好把它转化为一个真正的数组。
##### 转化为数组
```javascript
Array.prototype.slice.call(arguments);
```
这个转化比较**慢**，在性能不好的代码中**不推荐**这种做法。

##### 传递参数
下面将参数从一个函数传递到另一个函数，是推荐的做法。
```javascript
function foo() {
    bar.apply(null, arguments);
}

function bar(a, b, c) {
    // do stuff here
}
```
另一个技巧是同时使用 call 和 apply，创建一个快速的解绑包装器
```
function Foo() {};

Foo.prototype.method = k(a, b, c) {
    console.log(this, a, b, c);
}

Foo.method = function() {
	// 结果：Foo.prototype.method.call(this, arg1, arg2... argN);
    Function.call.apply(Foo.prototype.method, arguments);
}
```
上面的Foo.method和下面的函数效果一样
```javascript
Foo.method=function(){
	var args=Array.prototype.slice.call(arguments);
	Foo.prototype.method.apply(args[0],args.slice(1));
};
```

**自动更新**
arguments 对象为其内部属性形式参数创建getter 和 setter方法。<br>
因此 改变形参的值会影响到arguments对象的值，反之亦然。
```javascript
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
```

**性能真相**
arguments 对象总会被创建，除了两个特殊情况-作为局部变量声明和<br>
作为形式参数。而不管它是否有被使用。<br>

arguments 的getters和setters方法总会被创建；因此使用arguments <br>
对性能不会有什么影响。除非是需要对arguments对象的属性进行多次访问<br>
```javascript
function f(a){
	"use strict";
	a = 42;
	return[a,arguments[0]];
}
var pair=f(17);
assert(pair[0]===42);
assert(pair[1]===17);
```
使用 arguments.callee 会显著影响现代JavaScript引擎的性能。
```javascript
function foo(){
	arguments.callee; // do something width this function object
	arguments.callee.caller; // and the calling function object
}
function bigLoop(){
	for(var i=0; i<1000000; i++){
		foo(); // Would normally be inlined...
	}
}
```


