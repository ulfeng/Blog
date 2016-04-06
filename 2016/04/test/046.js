/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-04-06 09:49:25
 * @version $Id$
 */

// split()
var str = "How are you doing today?";
// alert(str.split(" "));
// alert(str.split(""));
// alert(str.split(" ",3));

// join()
var arr = new Array(3);
arr[0] = "sun";
arr[1] = "li";
arr[2] = "feng";

// alert(arr.join());
// alert(arr.join("."));

var arr = ["sun", "li", "feng"];
var arr1 = ["sxx"];
// alert(arr.push("is")); // push() 在末尾添加 返回长度
// alert(arr.pop());  // 末尾删除并返回删除的子元素

// unshift() 头部添加
// shift() 头部删除

// reverse() 倒序
// alert(arr.reverse());

// 降序排列
function sortArray() {
    var arr1 = [1, 3, 2, 9, 7];
    arr1.sort(function (a, b) {
        return b - a;
    })
    alert(arr1);
}
// sortArray();

// concat()
// alert(arr.concat(arr1));

// splice()
// alert(arr.splice(1,1,"xx"));
// alert(arr);


// document 对象中所有对象名称和类型
function myFunction() {
    for (var i in document) {
        var v = document[i];
        alert(i + ":" + typeof(v));
    }
}
// myFunction();

// 动态创建一个表格
function createTable() {
    var _row;
    var _cell;

    for (var i = 0; i < 10; i++) {
        _row = document.getElementById("_table").insertRow(0);
        for (var j = 0; i < 10; j++) {
            _cell = _row.insertCell(0);
            _cell.innerText = "222";
        }
    }
}
// createTable();

function getCheckBox() {
    var domList = document.getElementsByTagName("input");
    var len = domList.length;
    var checkBoxList = [];
    while (len--) {
        if (domList[len].type = "checkbox") {
            getCheckBox.push(domList[len]);
        }
    }
}

// 输出年月日
function getDay() {
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var day = d.getDate();
    day = day < 10 ? "0" + day : day;
    var nowDate = y + "-" + m + "-" + day;
    alert(nowDate);

}
// getDay();

// 字符串反转
function strReverse(str) {
    var res = str.split("");
    var resArr = res.reverse().toString();
    alert(resArr);
}

// strReverse("fstewsjhll");


/**
 * 对象克隆
 * 支持基本数据类型及对象
 * 递归方法
 */
function funClone(obj) {
    var o;
    switch (typeof obj) {
        case "undefined":
            break;
        case "string":
            o = obj + "";
            break;
        case "boolean":
            o = obj;
            break;
        case "object":
            if (obj === null) {
                o = null;
            } else {
                if (Object.prototype.toString.call(obj).slice(8, -1) === "Array") {
                    o = [];
                    for (var i = 0; i < obj.length; i++) {
                        o.push(funClone(obj[i]));
                    }
                }
                else {
                    o = {};
                    for (var k in obj) {
                        o[k] = funClone(obj[k]);
                    }
                }
            }
            break;
        default:
            o = obj;
            break;
    }
    return o;
}

var arr1=[1,2,3,3,4,3,2,2,4,5,6],
    arr2=[];
for(var i= 0,len=arr1.length;i<len;i++){
    if(arr2.indexOf(arr1[i])<0){
        arr2.push(arr1[i]);
    }
}
alert(arr2);


/**
 * 数组去重
 */
function arraySingle(arr){
    var resArr=[];
    for(var i=0;i<arr.length;i++){
        if(resArr.indexOf(arr[i])<0){
            resArr.push(arr[i]);
        }
    }
    return resArr;
}



















