/**
 * 
 * @authors ufree (1104506375@qq.com)
 * @date    2016-02-02 16:10:06
 * @version 1.0
 */

$(function() {
	// 获取<p>元素的HTML代码
	$("input:eq(0)").click(function(){
		alert($("p").html());
	})
	// 获取<p>元素的文本
	$("input:eq(1)").click(function(){
		alert($("p").text());
	})
	// 设置<p>元素的HTML代码
	$("input:eq(2)").click(function(){
		$("p").html("<strong>我是大阴霾！</strong>");
	})
	// 设置<p>元素的文本
	$("input:eq(3)").click(function(){
		$("p").text("<strong>我是大阴霾!");
	})
	// 获取按钮的value值
	$("input:eq(4)").click(function(){
		alert($(this).val());
	})
    // 设置按钮的value值
	$("input:eq(5)").click(function(){
		$(this).val("SB");
	})
})

$(function(){
	$("#email").focus(function(){
		var txt_value=$(this).val();
		if(txt_value=="请输入邮箱"){
			$(this).val("");
		}
	})
	$("#email").blur(function(){
		var txt_value=$(this).val();
		if(txt_value==""){
			$(this).val("请输入邮箱");
		}
	})
	$("#password").focus(function(){
		var txt_value=$(this).val();
		if(txt_value=="请输入密码"){
			$(this).val("");
		}
	})
	$("#password").blur(function(){
		var txt_value=$(this).val();
		if(txt_value==""){
			$(this).val("请输入密码");
		}
	})
})

$(function(){
	$("#email1").focus(function(){
		var txt_value=$(this).val();
		if(txt_value==this.defaultValue){
			$(this).val("");
		}
	})
	$("#email1").blur(function(){
		var txt_value=$(this).val();
		if(txt_value==""){
			$(this).val(this.defaultValue);
		}
	})
	$("#password1").focus(function(){
		var txt_value=$(this).val();
		if(txt_value==this.defaultValue){
			$(this).val("");
		}
	})
	$("#password1").blur(function(){
		var txt_value=$(this).val();
		if(txt_value==""){
			$(this).val(this.defaultValue);
		}
	})
})


