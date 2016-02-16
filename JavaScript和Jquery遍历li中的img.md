##### JavaScript
```javascript
var img_list = document.getElementById("game_list").getElementsByTagName("img");
for (var i = 0; i < img_list.length; i++) {
    var w = img_list[i].width / 2;
    img_list[i].style.marginLeft = -w + "px";
}
```

##### Jquery
```jquery 
$(".list_img img").each(function() {
    var realWidth = $(this).width() / 2;
    $(this).css("margin-left", -realWidth + "px");
})
```

##### Jquery 在chrome下用上述方法获取不到，可用如下方法
```jquery

```
