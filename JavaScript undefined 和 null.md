## undefined 和 null
JavaScript 有两个表示*空*的值，其中有用的是undefined。

##### undefined 的值
undefined 是一个值为 undefined 的类型。<br>

这个语言也定义了一个全局变量，它的值是 undefined，<br>
这个变量也被称为 undefined。 但是这个变量不是一个常量，<br>
也不是一个关键字。这意味着它的值可以轻易被覆盖。<br>

**下面的情况会返回undefined值**<br>

* 访问未修改的全局变量 undefined。
* 由于没有定义 return 表达式的函数隐式返回。
* return 表达式没有显式的返回任何内容。
* 访问不存在的属性。
* 函数参数没有被显式的传递值。
* 任何被设置为 undefined 值的变量。

##### 处理undefined值的改变
由于全局变量undefined只是保存了undefined类型实际值的副本，因此对它<br>
赋新值不会改变类型undefined的值。<br>

然而，为了方便其它变量和undefined做比较，我们需要事先获取类型undefined的值。<br>

为了避免可能对undefined值的改变，一个常用的技巧是使用一个传递到匿名包装器的额外参数。<br>
在调用时，这个参数不会获取任何值。
```javascript
var undefined = 123;
(function(something, foo, undefined) {
    // 局部作用域里的undefined变量重新获得了'undefined'值
})('Hello World', 42);

// 另外一种达到相同方法是在函数内使用变量声明。
var undefined = 123;
(function(something, foo) {
    var undefined;
    // ...
})('Hello World', 42);
// 这里唯一的区别是，在压缩后并且函数内没有其它需要使用var声明变量的情况下，这个版本会<br>
多出4个字节的代码。

```

##### null 的用处
JavaScript 中的undefined的使用场景类似于其它语言中的null,实际上JavaScript中的null是另外<br>
一种数据类型。<br>

它在JavaScript内部有一些使用场景(比如声明原型链的终结Foo.prototype = null),但大多数情况下<br>
都可以使用undefined来代替。