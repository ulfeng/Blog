## call 和 apply
call 方法可以用来代替另一个对象调用一个方法。说明白一点就是更改对象的内部指针，<br>
即改变对象的this指向的内容。这在面向对象的js编程过程中是很重要的。
```html
<input id="demo" value="input value">
   <script>
        function obj(){
            this.value="对象";
        }

        var value="global 变量";
        function Fun1(){
            alert(this.value);
        }
        window.Fun1();        // global 变量
        Fun1.call(window);    // global 变量
        Fun1.call(document.getElementById('demo'));  // input value
        Fun1.call(new obj()); // 对象
   </script>
```

call 和 apply的第一个参数都是要传入当前对象的对象，以及函数内部的this。<br>
后面的参数都是传递给当前对象的参数。
```javascript
    var func = new function() {
        this.a = "func";
    }

    var myFunc = function(x) {
        var a = "myfunc";
        alert(this.a);
        alert(x);
    }

    myFunc.call(func, "var"); // func var 
```

##### 不同点
对于第一个参数意义都一样，但对于第二个参数:<br>
apply传入的是一个参数数组:func.apply(func,[var1,var2,var3])<br>
call的写法:func.call(func,var1,var2,var3);
