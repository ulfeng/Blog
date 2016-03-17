/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-17 14:02:17
 * @version $Id$
 */

// window.onload = function() {

//     var oBtn = document.getElementById("btn");
//     var oUl = document.getElementById("ul");
//     var aLi = document.getElementsByTagName("li");
//     var iNow = 4;

//     for (var i = 0; i < aLi.length; i++) {
//         aLi[i].onmouseover = function() {
//             this.style.backgroundColor = "red";
//         }
//         aLi[i].onmouseout = function() {
//             this.style.backgroundColor = "";
//         }
//     }

//     oBtn.onclick = function() {
//         iNow++;
//         var oLi = document.createElement("li");
//         oLi.innerHTML = 1111 * iNow;
//         oUl.appendChild(oLi);
//     }

// }

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

function someHandle() {
    window.event.cancelBubble = true;
}

function someHandle() {
    event.stopPropagation();
}

function someHandle(event) {
    var ev = event || window.event;
    if (ev.stopPropagation) {
        ev.stopPropagation();
    } else {
        ev.cancelBubble = true;
    }
}

function someHandle() {
    window.event.returnValue = false;
}

function someHandle() {
    event.preventDefault();
}

function someHandle() {
    var ev = event || window.event;
    if (ev.preventDefault) {
        ev.preventDefault();
    } else {
        event.returnValue = false;
    }
}

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

// 抛开IE
function globalClickListener(event) {
    if (canEventPass == false) {
        // 取消事件进一步向子节点传递和冒泡传递
        event.stopPropagation();
        // 取消浏览器事件的默认行为
        event.preventDefault();
    }
}

var div2 = document.getElementById("div2");
EventUtil.addHandler(div2,"click",function(event){
    event=EventUtil.getEvet(event);
    EventUtil.stopPropagation(event);
},false);

document.body.addEventListener('click'，function(event){
    event.stopPropagation();
},true);