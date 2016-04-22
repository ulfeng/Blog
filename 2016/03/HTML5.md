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
