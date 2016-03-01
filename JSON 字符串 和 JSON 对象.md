## JSON 字符串 和 JSON 对象
**JSON字符串:**
```javascript
var str1='{"name":"haorooms","sex":"man"}';
```

**JSON对象**
```javascript
var obj={"name":"haorooms","sex":"man"};
```

##### JSON字符串转换为JSON对象
```javascript
// json 字符串转换为 json 对象
var str = '{"name":"sunlifeng","sex":"man"}';

// way 1:
var obj = eval('(' + str + ')');
// alert(typeof(obj));  // object

// way 2:
var obj = $.parseJSON(str);
// alert(typeof(obj));  // object

// way 3:
var obj = JSON.parse(str);
// alert(obj.name);     // sunlifeng
```

##### JSON 对象转化为 JSON 字符串
```javascript
var obj = {
    "name": "ulfeng",
    "sex": "man",
    "age": 23
}

var strX=JSON.stringify(obj);
// alert(typeof(strX));  // string
```
