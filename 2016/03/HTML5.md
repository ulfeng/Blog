## HTM5 常用<meta>总结
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```

#### 拨打电话
```html
<a href="tel:139xxxxxxxx">一键拨打号码</a>
<a href="sms:139xxxxxxx">一键发送短信</a>
```

#### 视频做背景
```html
<video autoplay="" loop="" poster="bg.jpg" id="video">
    <source src="video.webm" type="video/webm">
    <source src="video.mp4" type="video/mp4">
</video>
<!-- autoplay 自动播放 -->
<!-- loop 循环播放 -->
<!-- poster 视屏未加载完成前，用背景图片代替 -->
```
```css
#video{
	position: absolute;
	left:0%;
	top: 0;
	width:1920px;
	height:1080px;
	z-index: -100;
	background: url(bg.jpg) no-repeat;
}
```
**视频背景技术在IE8上的问题**
IE8不仅不能识别<video>标记，它对所有的HTML5标记都不能识别，这是一个问题，对于IE8,我们至少要让替代的背景<br>
图片能显示出来。为了能达到这个目的，我们需要两件事情：一行JavaScript 代码，一个CSS条件判断注释语句。
```javascript
<!-- [if lt IE 9]>
<script>
document.createElement('video');
</script>
<![endif]-->
```
```css
video {display: block;}
```

