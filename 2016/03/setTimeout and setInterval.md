## setTimeout and setInterval
由于 JavaScript 是异步的，可以使用 setTimeout 和 setInterval 来计划执行函数。
```javascript
function foo() {
    alert(1);
}

// 3s 后执行foo(),foo()只执行一次
var id = setTimeout(foo, 3000);

// setInterval() 无限循环
var id = setInterval(foo, 3000);

```
基于 JavaScript 引擎的计时策略，以及本质上的单线程运行方式，所以其它代码的运行<br>
可能会阻塞此线程。 因此没法确保函数会在 setTimeout 指定的时刻被调用。<br>

作为第一个参数的函数将会在全局作用域中执行，因此函数内的 this 将会指向这个全局<br>
对象。

```javascript
function Foo() {
    // var that = this;
    this.vale = 42;
    this.method = function() {
        // this 指向全局对象
        alert(this.value); // undefined
    };
    setTimeout(this.method, 500);
}

new Foo();

```

##### setInterval的堆调用

setTimeout 只会执行回调函数一次，不过 setInterval - 正如名字建议的<br>
 - 会每隔 X 毫秒执行函数一次。 但是却不鼓励使用这个函数。<br>

当回调函数的执行被阻塞时，setInterval仍然会发布更多的回调指令。在很小<br>的定时间隔情况下，这会导致回调函数被堆积起来。
```javascript
function foo() {
    // 阻塞执行 1s
}
setInterval(foo, 1000);
```

在 foo 被阻塞的时候，setInterval 仍然在组织将来对回调函数的调用。 因此，<br>当第一次 foo 函数调用结束时，已经有 10 次函数调用在等待执行。

##### 处理可能的阻塞调用
最简单也是最容易控制的方案，是在回调函数内部使用 setTimeout 函数。
```javascript
function foo() {
    // 阻塞执行1s
    setTimeout(foo, 1000);
}
foo();

```
这样不仅封装了 setTimeout 回调函数，而且阻止了调用指令的堆积，可以有更多<br>
的控制。 foo 函数现在可以控制是否继续执行还是终止执行。

##### 手工清空定时器
可以通过将定时时产生的 ID 标识传递给 clearTimeout 或者 clearInterval 函数来清<br>
除定时， 至于使用哪个函数取决于调用的时候使用的是 setTimeout 还是 setInterval。

```javascript
var id = setTimeout(foo, 1000);
clearTimeout(id);

```

##### 清楚所有定时器
由于没有内置的清除所有定时器的方法，可以采用一种暴力的方式来达到这一目的。
```javascript
for (var i = 1; i < 1000; i++) {
    clearTimeout(i);
}
```
可能还有些定时器不会在上面代码中被清除（译者注：如果定时器调用时返回的 ID <br>
值大于 1000）， 因此我们可以事先保存所有的定时器 ID，然后一把清除。


##### 隐藏使用eval
setTimeout 和 setInterval 也接受第一个参数为字符串的情况。 这个特性绝对不要<br.
使用，因为它在内部使用了 eval。
```javascript
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
```
由于 eval 在这种情况下不是被直接调用，因此传递到 setTimeout 的字符串会自全<br>
局作用域中执行； 因此，上面的回调函数使用的不是定义在 bar 作用域中的局部变量 foo。<br>

建议不要在调用定时器函数时，为了向回调函数传递参数而使用字符串的形式。<br>

##### 结论
绝对不要使用字符串作为 setTimeout 或者 setInterval 的第一个参数， <br>这么写的代码明显质量很差。当需要向回调函数传递参数时，可以创建一个匿<br>
名函数，在函数内执行真实的回调函数。<br>

另外，应该避免使用 setInterval，因为它的定时执行不会被 JavaScript 阻塞。