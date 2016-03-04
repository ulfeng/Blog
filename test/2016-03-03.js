/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-03 10:23:15
 * @version $Id$
 */

// 作用域和命名空间
function test() { // 一个作用域
    for (var m = 0; m < 10; m++) { // 不是一个作用域
        // Do something...
    }
    alert(m);
}
// test();
// 如果return对象的左括号和return不在一行上就会出错
function add(a, b) {
    return a + b;
}
// alert(add(1, 2));

// 数组
// 遍历
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0, l = arr.length; i < l; i++) {
    console.log(arr[i]);
}

// length 属性
var list = [1, 2, 3, 4, 5, 6];
list.length = 3;
alert(list); // [1, 2, 3];

list.length = 6;
alert(list); // [1, 2, 3, , , ];


// Array 构造函数

