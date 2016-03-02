## 构造函数
JavaScript 通过 new 关键词方式调用的函数都被认为是构造函数<br>
在构造函数内部-也就是被调用的函数内-this指向新创建的对象Object.<br>
这个新创建的对象的prototype被指向到构造函数的prototype<br>
如果构造函数没有显式的return表达式，则隐式的会返回this对象-<br>
也就是新创建的对象<br>
```javascript
function Foo() {
    this.bla = 1;
}

Foo.prototype.test = function() {
    consoloe.log(this.bla);
};

var test = new Foo();
```
上面代码中Foo作为构造函数调用，并设置新创建对象的prototype为Foo.prototype<br>
显式的return 表达式将会影响返回结果，但仅限于返回的一个对象。<br>
```javascript
function Bar() {
    return 2;
}
new Bar(); // 返回新创建的对象

function Test() {
    this.value = 2;
    return {
        foo: 1;
    };
}
new Test(); // 返回的对象
```
new Bar() 返回的是新创建的对象，而不是数字的字面值2.<br>
因此 new Bar().constructor === Bar,但如果返回的是数字对象，结果就不同了，<br>
如下所示:
```javascript
function Bar() {
    return new Number(2);
}
new Bar().constructor === Number;
```
new Test() 是函数返回的对象，而不是通过new 关键词新创建的对象，因此:<br>
```javascript
(new Test()).value === undefined;
(new Test()).foo === 1;
```
如果 new 被遗漏了，则函数不会返回新创建的对象。
```javascript
function Foo(){
	this.bla=1; // 获取设置全局对象
}
Foo(); // undefined
```