## 原型和原型链


##### JavaScript 原型
```javascript
刚学习JavaScript的时候，一般都是用如下方式来写代码
var decimalDigits = 2,
    tax = 5;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}
通过执行各个function来得到结果，学习了原型之后，我们可以使用如下方式来美化一下代码

原型使用方式1：
var Calculator = function(decimalDigits, tax) {
    this.decimalDigits = decimalDigits;
    this.tax = tax;
}

Calculator.prototype = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    }
};
var caluc=new Calculator();
alert(caluc.add(1,5));

原型使用方式2：
语法:
Calculator.prototype = function() {}();
优点:封装私有的function,通过return的形式暴露出简单的使用名称，以达到public/private的效果
var Calculator = function(decimalDigits, tax) {
    this.decimalDigits = decimalDigits;
    this.tax = tax;
}
Calculator.prototype = function() {
    add = function(x, y) {
            return x + y;
        },
        subtract = function(x, y) {
            return x - y;
        }
    return {
        add: add,
        subtract: subtract
    }
}();
alert((new Calculator()).add(1,4));

使用方式3 原型继承
var BaseCalculator=function(){
	this.decimalDigits=2;
};

使用原型给BaseCalculator扩展两个对象方法
BaseCalculator.prototype.add=function(x,y){
	return x+y;
}
BaseCalculator.prototype.subtract=function(x,y){
	return x-y;
};

var Calculator=function(){
	this.tax=5; 
};

Calculator.prototype=new BaseCalculator();

var caluc=new Calculator();
alert(caluc.add(1,2));  // 3
alert(caluc.decimalDigits)  // 2

上面Calculator的原型是指向BaseCalculator的实例上的，所以可以访问他的decimalDigits属性值，
若不想让Calculator访问BaseCalculator的构造函数里申明的属性值，如下:
Calculator.prototype = BaseCalculator.prototype;
var caluc=new Calculator();
alert(caluc.decimalDigits)  // undefined

覆盖重写前面的add功能
需要写 Calculator.prototype = BaseCalculator.prototype; 的后面
Calculator.prototype.add=function(x,y){
	return x+y+this.tax;
}
var caluc = new Calculator();
alert(caluc.add(1, 2)); // 8

```

--

##### JavaScript 原型链
```javascript
// 引语
function Foo() {
    this.value = 42;
}

Foo.prototype = function() {
    method: function() {}
}

function Bar() {}

Bar.prototype = new Foo();
Bar.prototype.foo='Hello World';

Bar.prototype.constructor=Bar;

var test=new Bar();
```
test 从Bar.prototype和Foo.prototype继承下来，可以访问Bar.foo和Foo.method。<br>
需要注意的是 new Bar()不会创造一个新的实例，而是重复使用它原型上的实例，<br>


**属性查找**
```javascript
function foo() {
    this.add = function(x, y) {
        return x + y;
    }
}

foo.prototype.add = function(x, y) {
    return x + y + 10;
}

Object.prototype.substract = function(x, y) {
    return x - y;
}

var f = new foo();
alert(f.add(1,3));// 4 而不是 14
alert(f.substract(2,1)); 1
```
属性查找的时候先查找自身的属性，如果没有再查找原型，如果没有再往上查找。<br>


注意：*任何类型的对象的原型都不能赋值*
```javascript
function f(){}
f.prototype = 1; // 无效
```

**hasOwnPerproty()** 
为了判断一个属性是对象自身而不是原型上的，我们需要使用hasOwnPerproty()函数<br>
hasOwnPerproty() 是JavaScript 唯一一个处理属性而不查找原型链的方法
```javascript
Object.prototype.bar=1;
var foo={
	goo:undefined
};
alert(foo.bar); // 	1

alert('bar' in foo); // true

alert(foo.hasOwnProperty('bar')); // false
alert(foo.hasOwnProperty('goo')); // true
```
JavaScript 不会保护 hasOwnProperty 被非法占用，因此如果一个对象碰巧存在这个属性，<br>
就需要使用外部的 hasOwnProperty 函数来获取正确的结果。
```javascript
var foo={
	hasOwnProperty:function(){
		return false;
	},
	bar:'Here be dragons'
};
alert(foo.hasOwnProperty('bar'));  // false
alert({}.hasOwnProperty.call(foo,'bar'));  // true
```
当检查对象上某个属性是否存在时，hasOwnProperty 是唯一可用的方法。<br>
同时在使用 for in loop 遍历对象时，推荐总是使用 hasOwnProperty 方法，<br>
这将会避免原型对象扩展带来的干扰，我们来看一下例子：
```javascript
Object.prototype.bar=1;
var foo={moo:2};
for(var i in foo){
	console.log(i);
} // bar moo

// moo
for(var i in foo){
	if(foo.hasOwnProperty(i)){
		console.log(i);
	}
}
```
