# Ajax 请求的几种写法

##### JavaScript Ajax
```javascript
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
```
--

##### JQuery Ajax

简写：
```javascript
    $.getJSON("json/address.json", function(item) {
        if (item.errcode == 0) {
            var address_value = item.o2o.data;
            $.each(address_value, function(n, value) {
                var uls = "";
                uls += "<ul><li class='fore1'>" + value.shopName + "</li> <li class='fore2'>" + value.shopAddress + "</li> <li>" + value.shopTel + "</li> </ul>";
                $("#address_list").append(uls);
            });
        } else {
            alert(item.errmsg);
        }
    });
```
上述写法等价于：
```javascript
$.ajax({
    type: "post",
    // type: "get",
    url: "http:www.xxx.com",
    data: {
        "name" : "张三"，
        "性别" : "李四"
    },
    dataType: "json",
    success: function(data){
        alert(data.xx);
    },
    err:function(){
        alert("请求失败");
    }
})
```










