/**
 * 
 * @ufree (1104506375@qq.com)
 * @date    2016-02-14 09:57:56
 * @version $Id$
 */

function Animal() {
    this.species = "animal";
}

function Cat() {
    this.name = "miaoxingren";
    this.color = "yellow";
}

// way 1:
// 构造函数绑定，使用call或apply方法，将父类的构造函数绑定在子对象中
// function Cat(){
// 	Animal.apply(this,arguments);
// 	this.name="miaoxingren";
// 	this.color="yellow";
// }
// var cat1 = new Cat();
// alert(cat1.species);

// way 2
// prototype
// Cat.prototype=new Animal;
// Cat.prototype.constructor=Cat;
// var cat1=new Cat();
// alert(cat1.species);

// way 3 
// prototype 直接继承
// function Animal(){}
// Animal.prototype.species="animal";

// Cat.prototype=Animal.prototype;
// Cat.prototype.constructor=Cat;
// var cat1=new Cat();
// alert(cat1.species);  // animal
// 存在一个问题
// alert(Animal.prototype.constructor); // Cat

// way 4
// 空对象
// var F = function() {}
// F.prototype = Animal.prototype;
// Cat.prototype = new F();
// Cat.prototype.constructor = Cat;
// var cat1 = new Cat();
// alert(cat1.species);
// alert(Animal.prototype.constructor);

// way 5

