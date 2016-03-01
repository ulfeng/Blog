/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-01 13:37:39
 * @version $Id$
 */

// json 字符串转换为 json 对象
var str = '{"name":"sunlifeng","sex":"man"}';

// way 1:
var obj = eval('(' + str + ')');
// alert(typeof(obj));  // object

// way 2:
var obj = $.parseJSON(str);
// alert(typeof(obj));  // object

// way 3:
var obj = JSON.parse(str);
// alert(obj.name);     // sunlifeng

var obj = {
    "name": "ulfeng",
    "sex": "man",
    "age": 23
}

var strX=JSON.stringify(obj);
// alert(typeof(strX));  // string