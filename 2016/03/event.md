## 事件

##### 冒泡型事件
事件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发。<br>
IE 5.5: div -> body -> document <br>
IE 6.0: div -> body -> html -> document <br>
Mozilla 1.0: div -> body -> html -> document -> window <br>

##### 捕获型事件(event capturing)
事件从最不精确的对象(document 对象)开始触发，然后到最精确(也可以在窗口级别捕获事件，<br>
不过必须由开发人员特别指定)。

##### W3C模型
同时支持两种事件模型：捕获型事件和冒泡型事件，但是，捕获型事件先发生。两种事件流会<br>
触及DOM中的所有对象，从document对象开始，也在document对象结束。

支持W3C标准的浏览器在添加事件时用addEventListener(event,fn,useCapture)方法，基中第3个<br>
参数useCapture是一个Boolean值，用来设置事件是在事件捕获时执行，还是事件冒泡时执行。<br>
而不兼容W3C的浏览器(IE)用attachEvent()方法，此方法没有相关设置，不过IE的事件模型默认是<br>
在事件冒泡时执行的，也就是在useCapture等于false的时候执行，所以把在处理事件时把useCapture
设置为false是比较安全，*也实现兼容浏览器的效果*。<br>
true="捕获"<br>
false="冒泡"

##### 事件委托
事件: onclick, onmouseover, onmouseout <br>
委托: 加到别人身上来做，利用冒泡的原理，把事件加到父级上，触发执行结果。<br>
**好处1：提高性能**<br>
举一个例子：需要出发每个li来改变他们的背景颜色。
```html
    <ul id="ul">
    	<li>aaaaaaaaaaaaaaa</li>
    	<li>bbbbbbbbbbbbb</li>
    	<li>cccccccccccccccc</li>
    	<li>dddddddddddddddd</li>
    </ul>
```
```javascript
window.onload = function() {

    var oUl = document.getElementById("ul");
    var aLi = document.getElementsByTagName("li");

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function() {
            this.style.backgroundColor = "red";
        }
        aLi[i].onmouseout = function() {
            this.style.backgroundColor = "";
        }
    }
}
```

如果有很多的li，for循环会很影响性能，用事件委托实现:
```javascript
window.onload = function() {

    var oUl = document.getElementById('ul');
    var aLi = document.getElementsByTagName('li');

    // 这里要用到事件源:event对象
    // 事件源，不管在哪个事件中，只要你操作的那个元素就是事件源。
    // ie: windwo.event.srcElement
    // 标准下:event.target
    // nodeName：找到元素的标签名

    oUl.onmouseover = function(ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() == "li") {
            target.style.background = "red";
        }
    }
    oUl.onmouseout = function(ev) {
        var ev = ev || window.event;
        var target = ev.target || ev.srcElement;
        if(target.nodeName.toLowerCase()=="li"){
        	target.style.background="";
        }
    }

}
```

**好处2:新添加的元素还会有之前的事件**<br>
我们还拿这个例子看，但是我们要做动态的添加li。点击button动态添加li,如
```html
    <ul id="ul">
    	<li>aaaaaaaaaaaaaaa</li>
    	<li>bbbbbbbbbbbbb</li>
    	<li>cccccccccccccccc</li>
    	<li>dddddddddddddddd</li>
    </ul>
    <input type="button" id="btn" value="XXXX">
```

```javascript
window.onload = function() {

    var oBtn = document.getElementById("btn");
    var oUl = document.getElementById("ul");
    var aLi = document.getElementsByTagName("li");
    var iNow = 4;

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function() {
            this.style.backgroundColor = "red";
        }
        aLi[i].onmouseout = function() {
            this.style.backgroundColor = "";
        }
    }

    oBtn.onclick = function() {
        iNow++;
        var oLi = document.createElement("li");
        oLi.innerHTML = 1111 * iNow;
        oUl.appendChild(oLi);
    }
}
```
新添加的li上面没有鼠标移入事件来改变他们的背景颜色。<br>
因为点击添加的时候for循环已经执行完毕。<br>
事件委托:
```javascript

```


