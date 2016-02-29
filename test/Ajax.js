/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-02-26 10:41:46
 * @version $Id$
 */

function loadXMLDoc() {

    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+,Firefox,Chrome,Opera,Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveObject("Microsoft.XMLHTTP");
    }
    
    // 0:请求未初始化
    // 1:服务器连接已建立
    // 2:请求已接收
    // 3:请求处理中
    // 4:请求已完成，且响应就绪
    // 200:OK
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("demo").innnerHTML = xmlhttp.responseText;
        }
    }

    // 向服务器发送请求
    xmlhttp.open("GET", "Ajax_File.txt", true);
    // post
    xmlhttp.open("POST", "Ajax_File.txt", , true)
    xmlhttp.send();
}
