// 1、原生JavaScript实现字符串长度截取
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

// 2、原生JavaScript获取主机域名
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

// 3、原生JavaScript清除空格
String.prototype.trim = function() {
    var reEtraSpace = /^\s*(.*?)\s+$/;
    return this.replace(reEtraSpace, "$1");
}

// 4、原生 JavaScript 替换全部
String.prototype.replaceAll = function(s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

// 5、原生JavaScript转义html标签
function HtmlDecode(text) {
    return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

// 6、原生JavaScript还原html标签
function HtmlDecode(text){
    return text.replace(/&amp;/g,'&').replace(/&quot;/g, '\"').replace
    (/&lt;/g,"<").replace(/&gt;/g,'>')
}

// 7、原生JavaScript时间日期格式转换
Date.prototype.Format = function(formatStr) {
    var str = formatStr;
    var Week = ['日'，'一', '二', '三', '四', '五', '六']；

    str = str.replace(/yyy|YYYY/, this.getFullYear());

    str = str.replace(/yy|YY/, (this.getFullYear() % 100) > 9 ?
        (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));

    str = str.replace(/M/g, (this.getMonth() + 1));

    str = str.replace(/w|W/g, Week[this.getDay()]);

    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' +
        this.getDate());
    str=str.replace(/d|D/g,this.getHours());
}
