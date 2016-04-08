/**
 * Created by Sina_lifeng on 2016/4/8.
 */
// JavaScript
// 基于对象（Object）和事件驱动(Event Driven)
// 动态、弱类型、基于原型

// 数据类型
// Number/String/Boolean/undefined/null
// Object(function/Array/RegExp/)

// 获取input输入框的值
(function () {
    // var oInput=document.getElementById("demo").value;
})()

// 获取页面中的checkbox
//(function(){
//    var inputList=document.getElementsByName("input");
//    var len=inputList.length;
//    var checkBoxList=[];
//    while(len--){
//        if(inputList[len].type=='checkbox'){
//            checkBoxList.push(inputList[len]);
//        }
//    }
//})()

// dom结构的事件流模型都有什么?

// 看下面代码的输出值
var undefined;
undefined == null;
// true
1 == true;
// true
2 == true;
// false
0 == false;
// true
0 == '';
// true
NaN == NaN;
// false
[] == false;
// true
[] == ![];
// true

// undefined与null相等，但不恒等（===）
// 一个是number一个是string时，会尝试将string转换为number
// 尝试将boolean转换为number，0或1
// 尝试将Object转换成number或string，取决于另外一个对比量的类型
// 所以，对于0、空字符串的判断，建议使用 “===” 。“===”会先判断两边的值类型，类型不匹配时为false。

function test1() {
    var foo = "11" + 2 - "1";
    console.log(foo); // 111
    console.log(typeof foo); // number
}

// 12 引用数据类型
function test12() {
    var a = new Object();
    a.value = 1;
    b = a;
    b.value = 2;
    alert(a.value); // 2
}
// test12();

// var stringArray = [“This”, “is”, “Baidu”, “Campus”]，Alert出”This is Baidu Campus”。

function joinArray() {
    var stringArray = ['This', 'is', 'Baidu', 'Campus'];
    alert(stringArray.join(" "));

}
// joinArray();

// 已知有字符串foo=”get-element-by-id”,写一个function将其转化成驼峰表示法”getElementById”。

function stringApi(str) {
    var arr = str.split("-");
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length - 1);
    }
    str = arr.join('');
    alert(str);
}


var foo = "get-element-by-id";
// stringApi(foo);

// 数组降序排列
function arraySort(arr) {
    arr = arr.sort(function (a, b) {
        return b - a;
    });
    alert(arr);
}

var arr = [2, 4, 5, 6];
// arraySort(arr);

// 今天日期
function getDay() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    var nowDate = y + "-" + m + "-" + d;
    alert(nowDate);
}
// getDay();

// 正则表达式
// 将字符串”<tr><td>{$id}</td><td>{$name}</td></tr>”中的{$id}替换成10，{$name}替换成Tony （使用正则表达式）
// ”<tr><td>{$id}</td><td>{$id}_{$name}</td></tr>”.replace(/{\$id}/g, ’10′).replace(/{\$name}/g, ‘Tony’);

// 字符串转义
// .为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，请写一个函数escapeHtml，将<, >, &, “进行转义

function escapeHtml(str) {
    return str.replace(/[<>'&]/g, function (match) {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '\'':
                return '&quot;';
        }
    });
}

// 用js实现随机选取10–100之间的10个数字，存入一个数组，并排序。
function getRandom(istart, iend) {
    var iChioce = iend - istart + 1;
    return Math.floor(Math.random() * iChioce + 10);
}

function getArraySort() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr.push(getRandom(10, 100));
    }
    alert(arr.sort());
}
//getArraySort();

// 有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e，请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，
// 将其按key-value形式返回到一个json结构中，如{a:’1′, b:’2′, c:”, d:’xxx’, e:undefined}。

function serilizeUrl(url) {
    var result = {};
    var resUrl = url.split("?")[1];
    var map = resUrl.split("&");
    for (var i = 0, len = map.length; i < len; i++) {
        result[map[i].split("=")[0]] = map[i].split("=")[1];
    }
    alert(result.a);
}

var url = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e';
// serilizeUrl(url);

// 看下面代码的输出结果
function test24() {
    for (var i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 0);
    }
    ;
}
// test24(); // 4,4,4

function test241() {
    for (var i = 1; i <= 3; i++) {
        setTimeout((function (a) { //改成立即执行函数
            console.log(a);
        })(i), 0);
    }
    ;

    //输出 1,2,3
}

// test241();

// 清除字符串左右空格

function clearSpace() {

}
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+/, "").replace(/\s+$/, "");
    }
}

// test the function
var str = "  test string     ".trim();
// alert(str == "test string");
// alerts "true"

// caller
// 在一个函数调用另一个函数时，被调用函数会自动生成一个caller属性，指向调用它的函数对象。如果该函数当前未被调用，或并非被其他函数调用，则caller为null。

function myCaller() {
    var caller = myCaller.caller;
    alert(caller);
}
// myCaller(); // null

function useCaller() {
    myCaller();
}
// useCaller(); // myCaller()

// callee
// 当函数被调用时，它的arguments.callee对象就会指向自身，也就是一个对自己的引用。
// 由于arguments在函数被调用时才有效，因此arguments.callee在函数未调用时是不存在的（即null.callee），且引用它会产生异常。
function myCallee(arg) {
    alert(arguments.callee);  // myCallee(arg)
}

// myCallee();

// 方法一：
Object.prototype.clone = function () {
    var o = this.constructor === Array ? [] : {};
    for (var e in this) {
        o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
    }
    return o;
}

//方法二：

/**
 * 克隆一个对象
 * @param Obj
 * @returns
 */
function clone(Obj) {
    var buf;
    if (Obj instanceof Array) {
        buf = []; //创建一个空的数组
        var i = Obj.length;
        while (i--) {
            buf[i] = clone(Obj[i]);
        }
        return buf;
    } else if (Obj instanceof Object) {
        buf = {}; //创建一个空对象
        for (var k in Obj) { //为这个对象添加新的属性
            buf[k] = clone(Obj[k]);
        }
        return buf;
    } else { //普通变量直接赋值
        return Obj;
    }
}

// 数组去重
Array.prototype.single = function () {

}

// 面向对象
function Dog() {
    this.wow = function() {
        alert("Wow");
    }
    this.yelp=function(){
        this.wow();
    }
}

function madDog(){
    this.yelp= function () {
        var that=this;
        setInterval(function(){
            that.wow();
        },500)
    }
}

var dog=new Dog();
// dog.yelp();

//madDog.prototype = new Dog();
//var mad= new madDog();
//mad.yelp();


// 点击li,显示其index
//(function(){
//    var ali=document.getElementById('test').getElementsByTagName('li');
//    var len=ali.length;
//    for(var i=0;i<len;i++){
//        ali[i].index=i;
//        ali[i].onclick=function(){
//            alert(this.index);
//        }
//    }
//})()

(function(){
    var ali=document.getElementById('test').getElementsByTagName('li');
    var len=ali.length;
    for(var i=0;i<len;i++){
        ali[i].index=i;
        ali[i].onclick=(function(a){
            return function(){
                alert(a);
            }
        })(i)
    }
})()







































