/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-14 16:18:40
 * @version $Id$
 */

function Animal() {
    // this.species = "动物";
}
Animal.prototype.species = "动物";


// 1、构造函数继承
function Cat() {
    //Animal.apply(this, arguments);
    this.name = "xx";
    this.color = "yellow";
}

var cat1 = new Cat();
// alert(cat1.species);

// 2、prototype 继承
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat2 = new Cat();
// alert(cat2.species);

// 3、prototype 直接继承
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
// alert(Animal.prototype.constructor); // Cat()
var cat3 = new Cat();
alert(cat3.species);
