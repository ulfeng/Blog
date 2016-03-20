## substr and substring

####　substr
```javascript
stringObject.substr(start,length);
// start 必须，开始位置
// length 可选，截取长度，如果不写截取到尾部
```

#### substring
```javascript
stringObjcet.substring(start,end);
// start 必选，开始位置
// end 可选，结束位置，如果不写截取到尾部
```

#### 截取字符串指定长度
```javascript
var str1 = "x1x2x3x4x5x6x7x8x9x10x11x12xxxxxxxxxxxxxxxxxxxxxxxxxx";
var str2 = "x1x2x3x4x5x6x7x8x9";

// js substring
function substrText(text, num) {
    var subText;
    if (text.length <= num) {
        subText = text;
    } else {
        subText = text.substring(0, num) + "...";
    }
    return subText;
}

alert(substrText(str1, 25)); // x1x2x3x4x5x6x7x8x9x10x11x...
alert(substrText(str2, 25)); // x1x2x3x4x5x6x7x8x9
```
