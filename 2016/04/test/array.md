## JavaScript 数组

#### 在Javascript中什么是伪数组？如何将伪数组转化为标准数组？
伪数组（类数组）：<br>
无法直接调用数组方法或期望length属性有什么特殊的行为，但仍可以对真正数组遍历方法来遍历它们。典型的是函数的argument参数，<br>
还有像调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组。<br>
可以使用Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象。<br>
```javascript
function log() {
    var args = Array.prototype.slice.call(arguments);
    // 为了使用unshift数组方法，将arguments转化为真正的数组
    args.unshift('(app)');
    console.log.apply(console, args);
}
```
