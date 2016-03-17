# get 和 post 的区别
##### get 和 post 的区别？
```html
    与POST相比，GET更简单也更快，并且在大部分情况下都能用。
    然而，在以下情况下，请使用POST请求：
    1、无法使用缓存文件(更新服务器上的文件或者数据库)；
    2、向服务器发送大量数据(POST没有数据量限制)；
    3、发送包含未知字符的用户输入时，POST比GET更稳定也更可靠。
```

##### get 请求
```javascript
xmlhttp.open("GET","demo_get.html",true);
xmlhttp.send();
```
上面的例子中，可能得到的是缓存的结果，为了避免这种情况，在URL添加一个唯一的ID:
```javascript
xmlhttp.open("GEt","demo_get.html?t=" + Math.random(),true);
xmlhttp.send();
```
