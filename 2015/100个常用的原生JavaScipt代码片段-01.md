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

17、获取当前日期的相邻日期
```javascript
function getDay(day){
    var today = new Date();

    var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;

    today.setTime(targetday_milliseconds); 

    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tYear+"-"+tMonth+"-"+tDate;
}
function doHandleMonth(month){
    var m = month;
    if(month.toString().length == 1){
        m = "0" + month;
    }
    return m;
}
// test
alert(getDay(1));
    alert(getDay(2));
    alert(getDay(3));
```

18、字符串每隔3位用‘，’号分割
```javascript
// format num
function formatNum(str){
    var newStr = "";
    var count = 0;

    if(str.indexOf(".")==-1){
        for(var i=str.length-1;i>=0;i--){
            if(count % 3 == 0 && count != 0){
                newStr = str.charAt(i) + "," + newStr;
            }else{
                newStr = str.charAt(i) + newStr;
            }
            count++;
        }
        str = newStr; //自动补小数点后两位
        return str;
    }
    else
    {
        for(var i = str.indexOf(".")-1;i>=0;i--){
            if(count % 3 == 0 && count != 0){
                newStr = str.charAt(i) + "," + newStr;
            }else{
                newStr = str.charAt(i) + newStr; //逐个字符相接起来
            }
            count++;
        }
        str = newStr + (str).substr((str).indexOf("."),3);
        return str;
    }
}

```

#### js 常用扩展方法
```javascript
if (!String.prototype.trim)
  String.prototype.trim = function () {
    return this.replace(/^\s*|\s*$/g, '');
  }
String.prototype.htmlEntities = function () {
  return this.replace(/["'<>&]/gm, function (a) {
    return {'"': '&quot;', '\'': '&apos;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}[a];
  });
}
String.prototype.quote = function () {
  return this.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
}
String.prototype.toSBC = function (str) {
  str = str || this;
  var result = "";
  var len = str.length;
  for (var i = 0; i < len; i++) {
    var cCode = str.charCodeAt(i);
    cCode = (cCode >= 0xFF01 && cCode <= 0xFF5E) ? (cCode - 65248) : cCode;
    cCode = (cCode == 0x03000) ? 0x0020 : cCode;
    result += String.fromCharCode(cCode);
  }
  return result;
}
String.prototype.not = function (type) {
  if (type != 'no-emoji') {
    var a = this.not('no-emoji');
    if (a)
      return a;
  }
  switch (type) {
    case 'no-emoji':
      return (!/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/.test(this.trim())) ? false : "不能包含emoji图标";
      break;
    case 'docName':
      return /^.{1,30}$/.test(this.trim()) ? false : "名称需介于1-30个字符";
      break;
    case 'nickname':
      return /^[\u4e00-\u9fa5]{2,5}~{0,1}$/.test(this) ? false : "花名需介于2-5个字符";
    case 'newNickname':
      var v = this.not("nickname");
      if (v)
        return v;
      if (/影数|小影剧本|风语翩|语翩翩|系统|平台|官方/.test(this)) {
        try {
          T.pub("tip")("不能包含专用词组");
        } catch (e) {
        }
        return "不能包含专用词组";
      }

      break;
    case 'email':
      return /^[a-z0-9]([a-z0-9]*[-_.]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i.test(this) ? false : "邮箱地址格式错误";
    case 'shotName':
      return /^[\u4e00-\u9fa5]{2,10}$/.test(this) ? false : "镜头名称需2-10个汉字";
    case 'paraContent':
      return /\S/.test(this) ? false : "内容不能为空";
    case 'mobileNO':
      return /^1\d{10}$/.test(this) ? false : "手机号码格式错误";
    case 'qq':
      return /^\d{4,19}$/.test(this) ? false : "qq号码格式错误";
    case 'password':
      return /^\S{6,18}$/.test(this) ? false : "密码需6-18为非空字符";
    case 'unitPrice':
      var v = Number(this);
      return (!isNaN(v) && v <= 10000 && v >= 1) ? false : "单价需介于1-10000元之间";
      break;
    case 'docPrice':
      return /^[1-9][0-9]{0,5}$/.test(this) ? false : "剧本售价区间为1-999999元（整数）之间";
    case 'realName':
      return /^[\u4e00-\u9fa5]{2,20}$/.test(this) ? false : "请输入真实名字";
    case 'IDCardNO':
      return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(this) ? false : "请输入18位身份证号码";
    case 'zipCode':
      return /^\d{6}$/.test(this) ? false : "邮政编码为6位数字";
  }
};
String.prototype.toUserIcon = function () {
  return this.toImageUrl('thumb', 'userIcon');
}
String.prototype.toImageUrl = function (type, useType) {
  var imageName = this;
  if (useType && useType == 'userIcon')
    if (imageName == '' || imageName == 'defaultIcon')
      return "/style/image/default.jpg";
  var temp = imageName.split('_');
  if (!type)
    type = "normal";
  temp = parseInt(temp[0], 36);
  var url = document.location.protocol + "//image." + document.domain + "/" + parseInt(temp / 1000000) + "/" + parseInt((temp % 1000000) / 1000) + "/" + imageName + "/" + type + ".img";
  return url;
}
String.prototype.toSeconds = function () {
  var n = 0, temp = this.trim();
  if (temp.indexOf("时") != -1) {
    var x = temp.replace(/^(\d+).*$/, '$1');
    n += Number(x) * 3600;
    temp = temp.replace(/^.*时[^\d]*(.*)$/, "$1");
  }
  if (temp.indexOf("分") != -1) {
    var x = temp.replace(/^(\d+).*$/, '$1');
    n += Number(x) * 60;
    temp = temp.replace(/^.*分[^\d]*(.*)$/, "$1");
  }
  if (temp.indexOf('秒') != -1) {
    var x = temp.replace(/^(\d+).*$/, '$1');
    n += Number(x);
  }
  return n;
}
String.prototype.limit = function () {

}
jQuery.fn.limit = function () {
  var self = $('div[limit]');
  self.each(function () {
    var objString = $(this).text();
    var objLength = $(this).text().length;
    var num = $(this).attr('limit');
    if (objLength > num) {
      $(this).attr('title', objString);
      objString = $(this).text(objString.substring(0, num) + '...');
    }
  })
}
Array.prototype.remove = function (e, isOne) {
  var buffer = [];
  for (var i = 0; i < this.length; i++) {
    if (typeof e == 'function') {
      if (e(this[i])) {
        buffer.push(this[i]);
        this.splice(i, 1);
        i--;
        if (isOne)
          break;
      }
    } else {
      if (this[i] == e) {
        buffer.push(this[i]);
        this.splice(i, 1);
        i--;
        if (isOne)
          break;
      }
    }
  }
  if (buffer.length == 1)
    return buffer[0];
  else if (buffer.length == 0)
    return null;
  return buffer;
}
Array.prototype.find = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i))
      return this[i];
  }
  return null;
}
Array.prototype.findIndex = function (callback) {
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i))
      return i;
  }
  return -1;
}
Date.prototype.add = function (part, value) {
  value *= 1;
  if (isNaN(value)) {
    value = 0;
  }
  if (arguments.length == 0) {
    part = 'd';
    value = -1;
  }
  switch (part) {
    case "y":
      this.setUTCFullYear(this.getUTCFullYear() + value);
      break;
    case "m":
      this.setUTCMonth(this.getUTCMonth() + value);
      break;
    case "d":
      this.setUTCDate(this.getUTCDate() + value);
      break;
    case "h":
      this.setUTCHours(this.getUTCHours() + value);
      break;
    case "n":
      this.setUTCMinutes(this.getUTCMinutes() + value);
      break;
    case "s":
      this.setUTCSeconds(this.getUTCSeconds() + value);
      break;
    default:
  }
  return this;
}
Date.prototype.format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
Date.prototype.text = function (fmt) {
  var a = this.getTime(), n = new Date().getTime();
  var justnow = 60 * 1000,
    fifty = 15 * 60 * 1000,
    half = 2 * fifty,
    hours = 2 * half,
    days = 24 * hours,
    week = 7 * days,
    halfMon = 2 * week,
    threeWeek = 3 * week,
    month = 2 * halfMon,
    twoMon = 2 * month,
    threeMon = 3 * month,
    time = 4 * month;
  var t = n - a, str = "";
  if (t > time) {
    str = this.format(fmt ? fmt : "yy-MM-dd");
  } else if (t > threeMon) {
    str = "三个月前";
  } else if (t > twoMon) {
    str = "两个月前";
  } else if (t > month) {
    str = "一个月前";
  } else if (t > threeWeek) {
    str = "三周前";
  } else if (t > halfMon) {
    str = "半个月前";
  } else if (t > week) {
    str = "一周前";
  } else if (t > days) {
    str = parseInt(t / days) + "天前";
  } else if (t > hours) {
    str = parseInt(t / hours) + "小时前"
  } else if (t > half) {
    str = "半小时前";
  } else if (t > fifty) {
    str = "15分钟前";
  } else if (t > justnow) {
    str = parseInt(t / (60 * 1000)) + "分钟前";
  } else {
    var x = (n - this);
    x = x < 0 ? 1 : x;
    str = parseInt(x / 1000) + "秒前";
  }
  return str;
}
Date.prototype.brief = function () {
  var a = new Date(this),
    h = (a.getHours() < 10) ? ('0' + a.getHours()) : (a.getHours()),
    m = (a.getMinutes() < 10) ? ('0' + a.getMinutes()) : (a.getMinutes());
  return (a.getMonth() + 1) + '-' + a.getDate() + ' ' + h + ':' + m;
}
Number.prototype.amount = function () {
  var a = this;
  if (a > 9999) {
    if (a < 100000) {
      return (a / 10000).toFixed(2) + "万";
    } else if (a > 99999 && a < 1000000) {
      return parseInt(a / 10000) + "万";
    } else
      return (a / 1000000).toFixed(2) + "百万";
  } else
    return a;
}
Number.prototype.time = function (boolean, showAll) {
  var num = parseInt(this),
    min = 60,
    hour = 60 * min;
  if (boolean !== false) {
    if (num < 0) {
      return;
    } else if (0 <= num && num < min) {
      return num + '秒';
    } else if (min <= num && num < hour) {
      return '约' + parseInt(num / min) + '分';
    } else if (num >= hour) {
      return '约' + parseInt(num / hour) + '小时' + parseInt(num % hour / min) + '分';
    }
    // if(num<0){
    // 	return;
    // } else if(0<=num&&num<min){
    // 	return num + '秒';
    // } else if(min<=num&&num<hour){
    // 	return parseInt(num/min) + '分' + parseInt(num%min) + '秒';
    // } else if(num>=hour){
    // 	return parseInt(num/hour) + '小时' + parseInt(num%hour/min) + '分' + parseInt(num%hour%min) + '秒';
    // }
  } else {
    if (num < 0) {
      return;
    } else if (0 <= num && num < min) {
      return '00:00:' + ((num < 10) ? '0' : '') + num;
    } else if (min <= num && num < hour) {
      var a = parseInt(num / min),
        b = parseInt(num % min);
      var str = '00:' + ((a < 10) ? '0' : '') + a + ':';
      str += (parseInt(num % hour % min) < 10 ? '0' : '') + (num % hour % min);
      //str+=(num<(5*min)||showAll)?(parseInt(num%hour%min)):"00";
      return str;
    } else if (num >= hour) {
      var a = parseInt(num / hour),
        b = parseInt(num % hour / min),
        c = parseInt(num % hour % min);
      return ((a < 10) ? '0' : '') + a + ':' + ((b < 10) ? '0' : '') + b + ':' + ((c < 10) ? '0' : '') + c;
    }
  }
};
```
