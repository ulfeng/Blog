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
