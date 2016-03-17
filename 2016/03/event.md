## 事件

##### 冒泡型事件
事件按照从最特定的事件目标到最不特定的事件目标(document对象)的顺序触发。<br>
IE 5.5: div -> body -> document <br>
IE 6.0: div -> body -> html -> document <br>
Mozilla 1.0: div -> body -> html -> document -> window <br>

##### 捕获型事件(event capturing)
事件从最不精确的对象(document 对象)开始触发，然后到最精确(也可以在窗口级别捕获事件，<br>
不过必须由开发人员特别指定)。

##### W3C模型 DOM事件流
同时支持两种事件模型：捕获型事件和冒泡型事件，但是，捕获型事件先发生。两种事件流会<br>
触及DOM中的所有对象，从document对象开始，也在document对象结束。

支持W3C标准的浏览器在添加事件时用addEventListener(event,fn,useCapture)方法，基中第3个<br>
参数useCapture是一个Boolean值，用来设置事件是在事件捕获时执行，还是事件冒泡时执行。<br>
而不兼容W3C的浏览器(IE)用attachEvent()方法，此方法没有相关设置，不过IE的事件模型默认是<br>
在事件冒泡时执行的，也就是在useCapture等于false的时候执行，所以把在处理事件时把useCapture
设置为false是比较安全，*也实现兼容浏览器的效果*。<br>
true="捕获"<br>
false="冒泡"<br>

##### 标准的事件转送模式
* 1、事件捕捉(Capturing)阶段
* 2、目标(target)阶段
* 3、冒泡阶段(Bubbling)阶段
并非所有的事件都会经过冒泡阶段的所有的事件都要经过捕捉阶段和目标阶段，但是有些事件会跳过冒泡阶段。<br>
例如，让元素获得输入焦点的focus事件以及失去输入焦点的*blur*事件就都不会冒泡。

##### 停止事件冒泡和阻止事件的默认行为
“停止事件冒泡“和”阻止浏览器的默认行为“，这两个概念非常重要，它们对复杂的应用程序处理非常有用。<br>
**1.停止事件冒泡**<br>
停止事件冒泡是指，停止冒泡型事件的进一步传递（取消事件传递,不只是停止IE和DOM标准共有的冒泡型事件，<br>
我们还可以停止支持DOM标准浏览器的捕捉型事件，用topPropagation()方法）。例如上图中的冒泡型事件传递中，<br>
在body处理停止事件传递后，位于上层的document的事件监听器就不再收到通知，不再被处理。<br>

**2.阻止事件的默认行为**<br>
停止事件的默认行为是指，通常浏览器在事件传递并处理完后会执行与该事件关联的默认动作（如果存在这样的动作）<br>
。例如，如果表单中input type 属性是 “submit”，点击后在事件传播完浏览器就自动提交表单。又例如，input 元素的 <br>
keydown 事件发生并处理后，浏览器默认会将用户键入的字符自动追加到 input 元素的值中。<br>

**停止事件冒泡的处理方法:**
```javascript
// IE下，通过设置event对象的cancalBubble为true即可。
function someHandle() {
    window.event.cancelBubble = true;
}
```

```javascript
// DOM标准通过调用event对象的stopPropagation()方法即可。
function someHandle() {
    event.stopPropagation();
}
```

```javascript
// 跨浏览器的停止事件传递的方法是:
function someHandle(event) {
    var ev = event || window.event;
    if (ev.stopPropagation) {
        ev.stopPropagation();
    } else {
        ev.cancelBubble = true;
    }
}
```
阻止事件的默认行为的处理方法<br>

就像事件模型和事件对象差异一样，在IE和其它所有浏览器中阻止事件的默认行为的方法也不同。
```javascript
// IE下
function someHandle() {
    window.event.returnValue = false;
}
```
```javascript
// DOM标准
function someHandle() {
    event.preventDefault();
}
```
```javascript
// 跨浏览器通过调用event对象的preventDefault
function someHandle() {
    var ev = event || window.event;
    if (ev.preventDefault) {
        ev.preventDefault();
    } else {
        event.returnValue = false;
    }
}
```
```javascript
var EventUtil = {
    addHandler: function(element, type, handler) {
        if (event.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    removeHandler: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};

```

##### 捕获型事件和冒泡型事件模型的应用场景
**1、捕获型应用场合**
例如你想作全局的点击事件监听，相对于document结点与document下所有的子结点，在某个条件下要<br>
求所有的子结点点击无效，这种情况下冒泡模型就解决不了了，而捕获型却非常适合，可以在最顶层结<br>
点添加捕获型事件监听器，伪码如下:
```javascript

// 抛开IE
function globalClickListener(event) {
    if (canEventPass == false) {
        // 取消事件进一步向子节点传递和冒泡传递
        event.stopPropagation();
        // 取消浏览器事件的默认行为
        event.preventDefault();
    }
}
```
这样一来，当canEventPass条件为假时，document下所有的子结点click注册事件都不会被浏览器处理。<br>

**冒泡型的事件传递**
```html
<body onclick="alert('current is body');">
    <div id="div0" onclick="alert('current is '+this.id)">
        <div id="div1" onclick="alert('current is '+this.id)">
            <div id="div2" onclick="alert('current is '+this.id)">
                <div id="event_source" onclick="alert('current is '+this.id)" style="height:200px;width:200px;background-color:red;"></div>
            </div>
        </div>
    </div>
</body>
// current is event_source
// current is div2
// current is div1
// current is div0
// current is body
```
```javascript
var div2 = document.getElementById("div2");
EventUtil.addHandler(div2,"click",function(event){
    event=EventUtil.getEvet(event);
    EventUtil.stopPropagation(event);
},false);
```
在支持DOM标准的浏览器中，添加一下代码：
```javascript
document.body.addEventListener('click'，function(event){
    event.stopPropagation();
},true);
```






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
window.onload = function() {

    var Btn = document.getElementById("btn");
    var oUl = document.getElementById('ul');
    var aLi = document.getElementsByTagName('li');
    var iNow = 4;

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
        if (target.nodeName.toLowerCase() == "li") {
            target.style.background = "";
        }
    }

    Btn.onclick = function() {
        iNow++;
        var oLi = document.createElement("li");
        oLi.innerHTML = 11111111 * iNow;
        oUl.appendChild(oLi);
    }

}
```


