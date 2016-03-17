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

#### 工厂模式
为了不使用**new**关键词，构造函数必须显式的返回一个值。
```javascript
function Bar() {
    var value = 1;
    return {
        method: function() {
            return value;
        }
    }
}
Bar.prototype = {
    foo: function() {}
};
new Bar();
Bar();
```

new Bar() 和Bar()返回的值完全相同，一个新创建的拥有method属性的<br>
对象被返回，其实这里创建了一个**闭包**。new Bar() 并不会改变返回对象的原型。<br>
在上面的例子中，使用或者不使用new关键字没有功能性的区别。如下：<br>
```javascript
var bar1 = new Bar(); 
typeof(bar1.method); // "function"
typeof(bar.foo); // "undefined"

var bar2 = Bar();
typeof(bar2.method); // "function"
typeof(bar2.foo); // "undefined"
```
**通过工厂模式创建新对象**<br>
为了创建对象，我们可以创建一个工厂方法，并且在方法内构造一个新对象。<br>
```javascript
function Foo() {
    var obj = {};
    obj.value = 'blub';

    var private = 2;
    obj.someMethod = function(value) {
        this.value = value;
    }
    obj.getPrivate = function() {
        return private;
    }
    return obj;
}
```
虽然上面的方式比起 new 的调用方式不容易出错，并且可以充分利用私有变量带来的便利， <br>但是随之而来的是一些不好的地方。<br>

1、会占用更多的内存，因为新创建的对象不能共享原型上的方法。<br>
2、为了实现继承，工厂方法需要从另外一个对象拷贝所有属性，或者把一个对象作为新创建
对象的原型。<br>
3、放弃原型链仅仅是因为防止遗漏 new 带来的问题，这似乎和语言本身的思
想相违背。<br>

**总结**

虽然遗漏 new 关键字可能会导致问题，但这并不是放弃使用原型链的借口。 <br>最终使用哪种方式取决于应用程序的需求，选择一种代码书写风格并坚持下去才是最重
要的。