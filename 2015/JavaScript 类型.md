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

##### JavaScript 类型转换
JavaScript 是弱类型语言，所以会在任何可能的情况下应用*强制类型转换*。
```javascript
// 下面的比较结果是:true
new Number(10) == 10; // Number.toString() 返回的字符串被再次转换为数字

10 == '10'; // 字符串被转换为数字
10 == '+10'; // 同上
10 == '010'; // 同上
isNaN(null) == false; // null 被转换为数字0
// 0 当然不是一个 NaN 

// 下面的比较结果是:false
10 == 010;
10 == '-10';
```
为了避免上面复杂的强制类型转换，强烈推荐使用严格的等于操作符。虽然这<br>
可以避免大部分的问题，但JavaScript的弱类型系统仍然会导致一些其它问题。

##### 内置类型的构造函数
内置类型(比如Number和String)的构造函数在被调用时，使用或者不使用new的<br>
结果完全不同。
```javascript
new Number(10) === 10; // False,对象与数字的比较
Number(10) === 10; // True, 数字与数字的比较
new Number(10) + 0 === 10; // True,由于隐式的类型转化
```

**转换为字符串**
```javascript
'' + 10 === '10'; // true
```
将一个值加上空字符串可以轻松转换为字符串类型。

**转换为数字**
```javascript
+'10' === 10;  // true
```
使用一元的加号操作符，可以把字符串转换为数字。

**字符串转换为数字的常用方法**
```javascript
+ '010' === 10;
Number('010') === 10;
parseInt('010', 10) === 10 // 用来转换为整数

    + '010.2' === 10.2;
Number('010.2') === 10.2;
parseInt('010.2', 10) === 10;

```

**转换为布尔型**
通过使用否操作符两次，可以把一个值转换为布尔型。
```javascript
!!'foo'; // true
!!'';    // false
!!'0';   // true
!!'1';   // true
!!'-1';  // true
!!{};    // true
!!true;  // true
```
















