# 100个常用的原生JavaScipt代码片段 - 01
1、原生JavaScript实现字符串长度截取
```javascript
function cutStr(str, len) {
    var temp,
        icount = 0,
        patrn = /[^\x00-\xff]/,
        strre = "";
    for (var i = 0; i < str.length; i++) {
        if (icount < len - 1) {

            // substr(start,length) 截取从start开始的指定长度的字符串 
            temp = str.substr(i, 1);
            if (patrn.exec(temp) == null) {
                icount += 1;
            } else {
                icount += 2;
            }
            strre += temp;
        } else {
            break;
        }
    }
    return strre + "...";
}
```
2、原生JavaScript获取主机域名
```javascript
function getHost(url) {
    var host = "null";
    if (typeof url == "undefined" || url = null) {
        url = window.location.href;
    }
    var regex = /^\w+\:\/\/([^\/]*)/;
    var match = url.match(regex);
    if (typeof match != "undefined" && match != null) {
        host = match[1];
    }
    return host;
}
```
3、原生JavaScript清除空格
```javascript
// 清除字符串左右空格
String.prototype.trim = function() {
    var reEtraSpace = /^\s*(.*?)\s+$/;
    return this.replace(reEtraSpace, "$1");
}

// 另一种写法
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/,"");
    }
}

// test 
var str = "   x s t  ";
alert(str.trim() == "x s t");  // true

```
4、原生 JavaScript 替换全部
```javascript
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}
```
5、原生JavaScript转义html标签
```javascript
function HtmlEncode(text){
    return text.replace(/&/g,'&amp').replace(/\"/g,
        '&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
```
6、原生JavaScript还原html标签
```javascript
function HtmlDecode(text) {
    return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
```
7、原生JavaScript时间日期格式转换
```javascript
Date.prototype.Format = function(formatStr) {
    var str = formatStr;
    var Week = ['日'，
        '一', '二', '三', '四', '五', '六'
    ]；

    str = str.replace(/yyy|YYYY/, this.getFullYear());

    str = str.replace(/yy|YY/, (this.getFullYear() % 100) > 9 ?
        (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));

    str = str.replace(/M/g, (this.getMonth() + 1));

    str = str.replace(/w|W/g, Week[this.getDay()]);

    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' +
        this.getDate());
    str = str.replace(/d|D/g, this.getDate());
    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' +
        this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' +
        this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());
    str = str.replace(/ss|SS/, this.getSeconds() > 9 > this.getSeconds().toString(): '0' +
        this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());
    return str;
}
```

8、原生JavaScript判断是否为数字类型
```javascript
function isDigit(value) {
    var patrn = /^[0-9]*$/;
    if (patrn.exec(value) == null || value == "") {
        return false;
    } else {
        return true;
    }
}

```
9、原生JavaScript设置cookie值
```javascript
function setCookie(name, value, Hours) {
    var d = new Date();
    var offset = 8;
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = utc + (3600000 * offset);
    var exp = new Date(nd);
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" +
        exp.toGMTString() + ";domain=360doc.com;"
}
```
10、原生JavaScript获取cookie值
```javascript
function getCookie(name) {
    var arr = document.cookie.match(new RegExp("(^|)" +
        name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null;
}
```

11、实现一个函数clone，可以对JavaScript中的5种主要的数据类型（包括Number、String、Object、Array、Boolean）进行值复制
```javascript
/**
 * 方法一：
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

// 方法二:
Object.prototype.clone = function(){
    var o = this.constructor === Array ? [] : {};
    for(var e in this){
        o[e] = typeof this[e] === "object" ? this[e].clone() : this[e];
    }
    return o;
}

// 方法三:
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
    }else if (Obj instanceof Object){
        buf = {}; //创建一个空对象
        for (var k in Obj) { //为这个对象添加新的属性
            buf[k] = clone(Obj[k]);
        }
        return buf;
    }else{ //普通变量直接赋值
        return Obj;
    }
}


```

12、数组去重
```javascript
/**
 * 最简单的方法
 * 数组去重
 * 注意点：判断值是否在数组的方法“indexOf”是ECMAScript5 方法，IE8以下不支持，需多写一些兼容低版本浏览器代码，源码如下：
 */
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

function arraySingle(arr){
    var resArr=[];
    for(var i=0;i<arr.length;i++){
        if(resArr.indexOf(arr[i])<0){
            resArr.push(arr[i]);
        }
    }
    return resArr;
}
```
[其它方法](https://github.com/ulfeng/blog/blob/master/2015/JS%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0.md)

--

13、数组快速排序
```javascript
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0]; // 返回被删除的数组
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));
}
```
--

14、截取url参数信息
```javascript
// 方法1
// 中文字符串会出现乱码
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

// 方法2
// 截取中文字符
function getRequest() {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

// 方法3
// 提取url参数信息
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null){
        return decodeURI(r[2]);
    }else{
        return null;
    }
}


```

-- 
15、获得数字的N数倍
```javascript
// 获得5N倍
function getMaxLength(num) {
    var maxArray = [];
    var tmpMax = 0;
    
    // N 数倍
    for (var i = 0; i < num; i++) {
        if (i % 5 == 0) {
            maxArray.push(i);
        }
    }
    
    // 数组最大值
    for (var i = 0; i < maxArray.length; i++) {
        if (tmpMax < maxArray[i]) {
            tmpMax = maxArray[i];
        }
    }
    return tmpMax + 1;
}

```

16、html5图片上传预览
```html
<form enctype="multipart/form-data" action="" method="post">
    <input type="file" name="imageUpload"/>
    <div id="preview" style="width: 300px;height:300px;border:1px solid gray;"></div>
</form>
```

```css
#preview {
            width: 300px;
            height: 300px;
            overflow: hidden;
        }
        #preview img {
            width: 100%;
            height: 100%;
        }
```

```javascript

function preview1(file) {
            var img = new Image(), url = img.src = URL.createObjectURL(file)
            var $img = $(img)
            img.onload = function() {
                URL.revokeObjectURL(url)
                $('#preview').empty().append($img)
            }
        }
        function preview2(file) {
            var reader = new FileReader()
            reader.onload = function(e) {
                var $img = $('<img>').attr("src", e.target.result)
                $('#preview').empty().append($img)
            }
            reader.readAsDataURL(file)
        }
         
        $(function() {
            $('[type=file]').change(function(e) {
                var file = e.target.files[0]
                preview1(file)
            })
        })
```




