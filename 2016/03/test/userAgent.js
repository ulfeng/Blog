/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-13 16:15:36
 * @version $Id$
 */

// 判断浏览器
var browser = {
    versions: function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return { //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

// 判断是否在移动设备打开
if (browser.versions.mobile) { //判断是否是移动设备打开。browser代码在下面
    var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
    }
    if (ua.match(/WeiBo/i) == "weibo") {
        //在新浪微博客户端打开
    }
    if (ua.match(/QQ/i) == "qq") {
        //在QQ空间打开
    }
    if (browser.versions.ios) {
        //是否在IOS浏览器打开
    }
    if (browser.versions.android) {
        //是否在安卓浏览器打开
    }
} else {
    //否则就是PC浏览器打开
}

// 判断操作系统
function detectOS() {
    var sUserAgent = navigator.userAgent;

    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);

    var bIsAndroid = sUserAgent.toLowerCase().match(/android/i) == "android";
    if (isLinux) {
        if (bIsAndroid) return "Android";
        else return "Linux";
    }
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 ||
            sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
    }
    return "other";
}

// 判断是否为PC
//平台、设备和操作系统
var system = {
    win: false,
    mac: false,
    xll: false
};
//检测平台
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//跳转语句
if (system.win || system.mac || system.xll) {
    alert("PC访问");
} else {
    alert("非PC访问");
}


// 访问不同设备加载不同页面
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        window.location.href = B页面;
    }
}
