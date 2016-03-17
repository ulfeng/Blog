/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-02-29 14:03:35
 * @version $Id$
 */

function foo(){
	bar.apply(null,arguments);
}
function bar (a,b,c){
	// do something
}

function Foo(){}

Foo.prototype.method=function(a,b,c){
	console.log(this,a,b,c);
};

// Create an unbound version of "method"
// 输入参数:this,arg1,arg2...argN
Foo.method=function(){
	// 结果：Foo.prototype.method.call(this,arg1,arg2...argN);
}