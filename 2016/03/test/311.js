/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-11 10:39:25
 * @version $Id$
 */

function foo() {
    alert(1);
}
// var id = setTimeout(foo, 3000); 
// var id = setInterval(foo, 3000);

window.onload = function() {

}


function Foo() {
    // var that = this;
    this.vale = 42;
    this.method = function() {
        // this 指向全局对象
        alert(this.value); // undefined
    };
    setTimeout(this.method, 500);
}

// new Foo();

function foo() {
    // 阻塞执行 1s
}
setInterval(foo, 1000);

var id = setTimeout(foo, 1000);
clearTimeout(id);

for (var i = 1; i < 1000; i++) {
    clearTimeout(i);
}

function foo() {
    // 将会被调用
}

function bar() {
    function foo() {
        // 不会被调用
    }
    setTimeout('foo()', 1000);
}
bar();
