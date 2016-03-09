## JavaScript 面向对象编程(一):封装 [原文地址](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
Javascript是一种基于对象（object-based）的语言，你遇到的所有东西几乎都是对象。<br>但是，它又不是一种真正的面向对象编程（OOP）语言，因为它的语法中没有class（类）。<br>
那么，如果我们要把"属性"（property）和"方法"（method），封装成一个对象，甚至要从<br>
原型对象生成一个实例对象，我们应该怎么做呢？

##### 一、生成对象的原始模式
假定把猫看作一个对象，它有"名字"和"颜色"两个属性
```javascript
var Cat = {
    name: "",
    color: ""
}
```
现在，我们需要根据这个原型对象的规格（schema），生成两个实例对象。
```javascript
var cat1 = {}; // 创建一个空对象
cat1.name = "大毛"; // 根据原始对象的属性进行赋值
cat1.color = "黄色";

var cat2 = {};
cat2.name = "二毛";
cat2.color = "黑色";
```
好了，这就是最简单的封装了，把两个属性封装在一个对象里面。但是，这样的写法有两个缺点，<br>一是如果多生成几个实例，写起来就非常麻烦；二是实例与原型之间，没有任何办法，可以看出有<br>什么联系。

--

##### 二、原始模式的改进
我们可以写一个函数，解决代码重复的问题。
```javascrit
function Cat1(name, color) {
    return {
        name: name,
        color: color
    }
}
// 生成实例对象，等于调用函数
var cat1 = Cat1("大毛", "黄色");
var cat2 = Cat1("二毛", "黑色");
```
这种方法的问题依然是，cat1和cat2之间没有内在的联系，不能反映出它们是同一个原型对象的实例。

--

##### 三、构造函数模式
为了解决从原型对象生成实例的问题，Javascript提供了一个构造函数（Constructor）模式。<br>
所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。对构造函数使用new运算符，<br>
就能生成实例，并且this变量会绑定在实例对象上。
比如，狗的原型对象现在可以这样写:
```javascript
function Dog(name, color) {
    this.name = name;
    this.color = color;
}
```
生成实例对象：
```javascript
var dog1 = new Dog("大毛", "黄色");
var dog2 = new Dog("二毛", "黑色");

console.log(dog1.name); // 大毛
console.log(dog2.color); // 黑色
```
这时dog1和dog2会自动含有一个constructor属性，指向他们的构造函数：
```javascript
console.log(dog1.constructor == Dog);  // constructor true
console.log(dog2.constructor == Dog);  // constructor true
```
instanceof 运算符，验证原型对象与实例对象之间的关系：
```javascript
console.log(dog1 instanceof Dog);  // instanceof true
console.log(dog2 instanceof Dog);  // instanceof true
```

--

##### 四、构造函数模式的问题
构造函数方法很好用，但是存在一个浪费内存的问题。<br>
请看，我们现在为Cat对象添加一个不变的属性"type"（种类），再添加一个方法eat（吃sei）。<br>
那么，原型对象Dog就变成了下面这样：
```javascript
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.type="猫科动物";
    this.eat=function(){
    	alert("好吃，真好吃！");
    }
}
```
同样的方法，生成实例：
```javascript
var dog1 = new Dog("大毛", "黄色");
var dog2 = new Dog("二毛", "黑色");
dog1.eat(); // 吃 sei
```

表面上好像没什么问题，但是实际上这样做，有一个很大的弊端。那就是对于每一个实例对象，<br>
type属性和eat()方法都是一模一样的内容，每一次生成一个实例，都必须为重复的内容，多占用<br>
一些内存。这样既不环保，也缺乏效率。
```javascript
alert(cat1.eat == cat2.eat); // false
```
能不能让type属性和eat()方法在内存中只生成一次，然后所有实例都指向那个内存地址呢？回答是可以的。

-- 

##### 五、prototype模式
Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和<br>
方法，都会被构造函数的实例继承。<br>
这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上。<br>
原型对象：
```javascript
function Pig(name,color){
	this.name=name;
	this.color=color;
}
Pig.prototype.type="禽兽";
Pig.prototype.eat=function(){
	alert("你是猪吗?")
}
```
生成实例：
```javascript
var pig1=new Pig("七戒","白色");
var pig2=new Pig("八戒","黑色");
console.log(pig1.name);
console.log(pig2.color);
console.log(pig1.eat==pig2.eat);  // true
```
这时所有实例的type属性和eat()方法，其实都是同一个内存地址，指向prototype对象，因此就提高了运行效率。

--

##### 六、Prototype模式的验证方法
为了配合prototype属性，Javascript定义了一些辅助方法，帮助我们使用它。<br>

* isPrototypeOf()
这个方法用来判断，某个proptotype对象和某个实例之间的关系。<br>
```javascript
console.log(Pig.prototype.isPrototypeOf(pig1));  // true
console.log(Pig.prototype.isPrototypeOf(pig2));  // false
```

* hasOwnPrototype()
每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，<br>
还是继承自prototype对象的属性。
```javascript
console.log(pig1.hasOwnProperty("name"));  // true
console.log(pig1.hasOwnProperty("type"));  // false
```

* in运算符
in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
```javascript
onsole.log("name" in pig1);
console.log("xx" in pig1);

for(var prop in pig1){
	console.log("pig1["+prop+"]="+pig1[prop]);
}
```

--

系列文章：<br>
第二部分[构造函数的继承]()<br>
第三部分[非构造函数的继承]()
