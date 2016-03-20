## this 的工作原理

#### JavaScript this 的工作原理
JavaScript 有一套完全不同于其它语言的对 this　的处理机制。在5种不同的情况下， this <br>
指向的各不相同。<br>
  
**全局范围内:**
```javascript 
this;
```
当在全局范围内使用 this,它将会指向全局对象。<br>

**函数调用:**
```javascript
foo();
```
这里的this也会指向全局对象。<br>

**方法调用:**
```javascript
test.foo();
```
这个例子中，this 指向 test 对象。 <br>

**调用构造函数:**
```javascript
new foo();
```
如果函数倾向于和 new 关键词一块使用，则我们称这个函数是构造函数。在函数内部,<br>
this 指向新创建的对象。

**显示的设置 this:**
```javascript 
function foo(a,b,c){}

var bar = {};
foo.apply(bar,[1,2,3]);  // 数组将会被扩展，如下所示:
foo.call(bar,1,2,3); // 传递到foo的参数是：a = 1, b = 2, c = 3
```
当使用Fuction.prototype上的 call 或者 apply 方法时，函数内的this将会被显式设置为函数调用的第一个参数。

**常见误解**
尽管大部分的情况都说的过去，不过直接调用函数时， this 指向全局对象，被认为是 JavaScript 设计错误的一个<br>
地方，因为它从来就没有实际的用途。
```javascript
Foo.method=function(){
    function test(){
        // this 将会被设置为全局对象(window 对象)
    }
    test();
}
```
一个常见的误解是 this 将会指向 Foo 对象，实际上不是这样子的。为了在 test 中获取对 Foo 对象的引用，我们<br>
需要在 method 函数内部创建一个局部变量指向 Foo 对象。
```javascript
Foo.method = function(){
    var that = this;
    function test(){
        // 使用 that 来指向 Foo 对象
    }
    test();
}
```

**方法的赋值表达式:**
将一个方法赋值给一个变量
```javascript
var test = someObject.methodTest;
test();
```
上例中，test 就像一个普通的函数被调用，因此，函数内的 this 将不再被指向到 someObject 对象。<br>
虽然 this 的晚绑定特性似乎并不友好，但这确实是基于原型继承赖以生存的土壤。
```javascript
function Foo(){};
Foo.prototype.method=function(){};

function Bar(){};
Bar.prototype = Foo.prototype;

new Bar().method();
```
当 method 被调用的时候，this 将会指向 bar 的实例对象
