## eval
eval 函数会在当前作用域中执行一段JavaScript代码字符串。

##### 为什么不使用eval
```javascript
var foo = 1;

function test() {
    var foo = 2;
    eval('foo=3');
    return foo;
}
test(); //3
foo; // 1
```
但是eval只在被直接调用并且调用函数就是eval本身时，才在当前作用域中执行。
```javascript
var foo = 1;

function test() {
    var foo = 2;
    var bar = eval;
    bar('foo=3');
    return foo;
}
test(); // 2
foo; // 3
```
上面的代码等价于在全局作用域中调用eval,和下面两种写法效果一样：
```javascript
// 写法一：直接调用作用域下的foo变量
var foo=1;
function test() {
    var foo = 2;
    window.foo = 3;
    return foo;
}
test(); // 2
foo; // 3

// 写法二：使用call函数修改eval执行的上下文为全局作用域
var foo = 1;
function test() {
    var foo = 2;
    eval.call(window, 'foo=3');
    return foo;
}

test(); // 2
foo; // 3
```
在任何情况下我们都应该避免使用eval函数。99.9使用eval的场景都有不使用eval的解决方案。

##### 伪装的eval
定时函数setTimeout和setInterval都可以接受字符串作为它们的第一个参数。这个字符串总是<br>
在全局作用域中执行，因此eval在这种情况下没有被直接调用。

##### 安全问题
eval 也存在安全问题，因为它会执行任意传给它的代码，在代码字符串未知或者来自一个不信<br>
任的源时，绝对不要使用eval函数。

##### 结论
绝对不要使用 eval，任何使用它的代码都会在它的工作方式，性能和安全性方面受到质疑。<br>
如果一些情况必须使用到 eval 才能正常工作，首先它的设计会受到质疑，这不应该是首选的<br>
解决方案， 一个更好的不使用 eval 的解决方案应该得到充分考虑并优先采用。