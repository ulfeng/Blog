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
3、原生JavaScript清楚空格
```javascript
String.prototype.trim = function() {
    var reEtraSpace = /^\s*(.*?)\s+$/;
    return this.replace(reEtraSpace, "$1");
}
```
4、原生 JavaScript 替换全部
```javascript
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}
```
5、原生JavaScript转义html标签
```javascript
function HtmlDecode(text) {
    return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
```
6、原生JavaScript时间日期格式转换
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
7、
```javascript

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
