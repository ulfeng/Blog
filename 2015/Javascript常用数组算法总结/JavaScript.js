/************************* +
数组去重
+ **************************/

// 1、遍历数组法
// 最简单数组去重法

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
// alert(unique1(arr));

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
// alert(unique2(arr));

// 3、数组下标判断法（有问题）
function unique3(array) {
    var n = [array[0]]; // 结果数组
    // 从第二项开始遍历
    for (var i = 1; i < array.length; i++) {
        // 如果当前数组的第i项在当前数组中第一次出项的位置不是i,
        // 那么表示第i项是重复的，忽略掉。否则存入结果数组
        if (array.indexOf(array[i]) == i) n.push(array[i]);
    }
    return n;
}
// for test
var arr = [1, 1, 2, 3, 4, 4, 3, 2];
// alert(unique3(arr));

// 4.排序后相邻去除法
// 将相同的值相邻，然后遍历除去重复值
function unique4(array) {
    array.sort();
    var re = [array[0]];
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== re[re.length - 1]) {
            re.push(array[i]);
        }
    }
    return re;
}
// for test
var arr = [1, 1, 2, 3, 4, 4, 3, 2,"2","3"];
//alert(unique4(arr));

// 5.优化遍历数组法
// 获取没重复的最右一值放入新数组
function unique5(array) {
    var r = [];
    for (var i = 0, len = array.length; i < len; i++) {
        for (var j = i + 1; i < len; j++) {
            if (array[i] === array[j]) j = ++i;
            r.push(array[i]);
        }
    }
}
// for test
var arr = [1, 1, 2, 3, 4, 4, 3, 2];
// alert(unique5(arr));

/************************* +
数组扰乱顺序
+ **************************/

// 方法1：
// 每次随机抽一个数字并移动到新数组中
function shuffle(array) {
    var copy = [],
        len = array.length,
        i;
    // 如果还剩有元素则继续
    while (len > 0) {
        // 每次抽取一个元素
        i = Math.floor(Math.random() * len);
        // 如果这个元素之前没有被选中过
        if (i in array) {
            copy.push(array[i]);
            delete array[i];
            len--;
        }
    }
    return copy;
}
// for test
var arr = ["a", "b", "c", "d", "e", "f"];
 alert(shuffle(arr));


