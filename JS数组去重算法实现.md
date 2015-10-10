
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
#### 2、对象键值对法
    该方法执行的速度比其他任何方法都快， 就是占用的内存大一些；实现思路：新建一js对象以及新数组，遍历传入数组时，判断值是否为js对象的键，不是的话给对象新增该键并放入新数组。
    注意点： 判断是否为js对象键时，会自动对传入的键执行“toString()”，不同的键可能会被误认为一样；例如： a[1]、a["1"] 。解决上述问题还是得调用“indexOf”。
```javascript
// 对象键值对法
// 速度最快，占空间最多(空间换时间)
function unique2(array) {
    var i, n = {}, r = [], len = array.length, val, type;
    for (i = 0; i < len; i++) {
        val = array[i];
        type = typeof val;
        if (!n[val]) {
            n[val] = [type];
            r.push(val);
        }
        else if (n[val].indexOf(type) < 0) {
            n[val].push(type);
            r.push(val);
        }
    }
    return r;
}
// for test
var arr = [1, 1, 2, 3, 4, 4, 3, 2];
alert(unique2(arr));
```
