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
