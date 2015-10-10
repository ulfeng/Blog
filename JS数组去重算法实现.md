
## JS数组去重算法实现
[原文地址](http://www.cnblogs.com/wteam-xq/p/4732351.html)
#### 1、遍历数组法
    最简单的最简单的去重方法， 实现思路：新建一新数组，遍历传入数组，值不在新数组就加入该新数组中；
    注意点：判断值是否在数组的方法“indexOf”是ECMAScript5 方法，IE8以下不支持，需多写一些兼容低版本浏览器代码，源码如下：
```javascript
// 判断浏览器是否支持indexOf ，indexOf 为ecmaScript5新方法 IE8以下（包括IE8， IE8只支持部分ecma5）不支持
if (!Array.prototype.indexOf) {
    // 新增indexOf方法
    Array.prototype.indexOf = function (item) {
        var result = -1, a_item = null;
        if (this.length == 0) {
            return result;
        }
        for (var i = 0, len = this.length; i < len; i++) {
            a_item = this[i];
            if (a_item === item) {
                result = i;
                break;
            }
        }
        return result;
    }
}

function unique1(array) {
    var n = []; // 一个新的临时数组
    // 遍历当前数组
    for (var i = 0; i < array.length; i++) {
        // 如果当前数组的第i已经保存进了临时数组，那么跳过，
        // 否则把当前项push到临时数组里面
        if (n.indexOf(array[i]) == -1) n.push(array[i]);
    }
    return n;
    alert(n);
}
// for test
var arr = [1, 1, 2, 3, 4, 4, 3, 2];
alert(unique1(arr));
```
