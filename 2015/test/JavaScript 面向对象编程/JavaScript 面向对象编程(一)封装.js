/**
 * 
 * @authors ufree (1104506375@qq.com)
 * @date    2016-02-01 15:17:08
 * @version 1.0
 */

var Cat = {
    name: "",
    color: ""
}

var cat1 = {}; // 创建一个空对象
cat1.name = "大毛"; // 根据原始对象的属性进行赋值
cat1.color = "黄色";

var cat2 = {};
cat2.name = "二毛";
cat2.color = "黑色";

function Cat1(name, color) {
    return {
        name: name,
        color: color
    }
}

var cat1 = Cat1("大毛", "黄色");
var cat2 = Cat1("二毛", "黑色");

// constructor
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.type="猫科动物";
    this.eat=function(){
    	alert("好吃，真好吃！");
    }
}
var dog1 = new Dog("大毛", "黄色");
var dog2 = new Dog("二毛", "黑色");

console.log(dog1.name); // 大毛
console.log(dog2.color); // 黑色
console.log(dog1.constructor == Dog);  // constructor true
console.log(dog2.constructor == Dog);  // constructor true
console.log(dog1 instanceof Dog);  // instanceof true
console.log(dog2 instanceof Dog);  // instanceof true
console.log(dog1.type);
dog1.eat();
console.log(dog1.eat==dog2.eat); // false 


// 内存泄漏问题解决办法 prototype
function Pig(name,color){
	this.name=name;
	this.color=color;
}
Pig.prototype.type="禽兽";
Pig.prototype.eat=function(){
	alert("你是猪吗?")
}
var pig1=new Pig("七戒","白色");
var pig2=new Pig("八戒","黑色");
console.log(pig1.name);
console.log(pig2.color);
console.log(pig1.eat==pig2.eat);

// isPrototypeOf
console.log(Pig.prototype.isPrototypeOf(pig1));
console.log(Pig.prototype.isPrototypeOf(pig2));

// hasOwnProperty
console.log(pig1.hasOwnProperty("name"));
console.log(pig1.hasOwnProperty("type"));

// in 
console.log("name" in pig1);
console.log("xx" in pig1);

for(var prop in pig1){
	console.log("pig1["+prop+"]="+pig1[prop]);
}
