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


```

