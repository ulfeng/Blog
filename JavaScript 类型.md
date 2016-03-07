## JavaScript 类型

##### 相等与比较
**等于操作符 ==**<br>
JavaScript 是*弱类型*的弱类型的语言，这就意味着，等于操作符会为了比较两个值而进行强制类型转换。

**严格等于操作符 ===**<br>
强烈推荐使用*严格等于操作符*。如果类型需要转换，应该在比较之前显式的转换，而不是使用语言本身<br>
复杂的强制类型转换。

--

##### typeof 操作符
typeof操作符(和instanceof一起)或许是JavaScript中最大的设计缺陷，因为几乎不可能从它们那里得到<br>
想要的结果。
typeof只有一个实际的应用，用来检测一个对象是否已经定义或者是否已经赋值，而这个应用却不是用来检查<br>
对象的类型。<br>
**JavaScript类型表格**
```javascript
Value                Class         Type
----------------------------------------
"foo"                String        string  
new String("foo")    String        object 
1.2                  Number        number
new Number(1.2)      Number        object
true                 Boolean       boolean
new Boolean(true)    Boolean       object
new Date()           Date          object
new Error()          Error         object
[1,2,3]              Array         object
new Array(1,2,3)     Array         object
new Function("")     Function      function
/abc/g               RegExp        object(function in Nitro/V8)
new RegExp("meow")   RegExp        object(function in Nitro/V8)
{}                   Object        object
new Object()         Object        object
```
Class 一列表示对象的内部属性[[Class]]的值。<br>
为了获取对象的[[Class]],我们需要使用定义在Object.prototype上的方法*toString*

**对象的类定义**
JavaScript标准文档只给出了一种获取[[Class]]值的方法，那就是使用Object.prototype.toString.
```javascript
function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}
is('String', 'test'); // true
is('String', new String('test')); // true
```
上面例子中，Object.prototype.toString方法被调用，this被设置为了需要获取[[Class]]对象。

**测试为定义变量**
```javascript
typeof foo !== 'undefined'
```
上面代码会检测foo是否已经定义；如果没有定义而直接使用会导致ReferenceError的异常。<br>
这是typeof唯一有用的地方

**结论**
为了检测一个对象的类型，强烈推荐使用Object.prototype.toString方法；因为这是唯一一个<br>
可依赖的方式。正如上面表格所示，typeof的一些返回值在标准文档中并为定义，因此不同的<br>
引擎实现可能不同。<br>

除非为了检测一个变量是否已经定义，我们应尽量避免使用typeof操作符。

--

#####　instanceof 操作符
instanceof可以在操作符中用来判断一个实例是否属于它的父类型。<br>
只有在比较自定义的对象时才有意义。如果用来比较内置类型，将会和typeof操作符一样用处不大。
**比较自定义对象**
```javascript
function Foo() {}

function Bar() {}
Bar.prototype = new Foo();
new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true

// 如果仅仅设置 Bar.prototype函数Foo本身，而不是Foo构造函数的一个实例
Bar.prototype = Foo;
new Bar() instanceof Foo; // false
```

**instanceof 比较内置类型**
```javascript
new String('foo') instanceof String; // true
new String('foo') instanceof Object; // true

'foo' instanceof String; // false
'foo' instanceof Object; // false
```






