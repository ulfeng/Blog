#### css hack
一般来说是针对不同的浏览器写不同的CSS,就是 CSS Hack。<br>
IE浏览器Hack一般又分为三种，条件Hack、属性级Hack、选择符Hack（详细参考CSS文档：css文档）。例如：
```css
    // 1、条件Hack
   <!--[if IE]>
      <style>
            .test{color:red;}
      </style>
   <![endif]-->
   // 2、属性Hack
    .test{
    color:#0909; /* For IE8+ */
    *color:#f00;  /* For IE7 and earlier */
    _color:#ff0;  /* For IE6 and earlier */
    }
   // 3、选择符Hack
    * html .test{color:#090;}       /* For IE6 and earlier */
    * + html .test{color:#ff0;}     /* For IE7 */
```



1、ie 11 css hack
```css
@media all and (-ms-high-contrast:none) { 
*::-ms-backdrop, .class名字 { 里面的样式:样式值;} 
} 
/*ie11注意里面的标点符号*/ 
```
2、ie 10 css hack
```css
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) { 
.class名字 { 里面的样式:样式值;} 
}
```
3、.svg做背景图片在ie中的问题
```css
// 使用以下代码会出现问题
background-size: 100px auto;
// 修改方法
background-size: 100px 100px;
```

4、ios 清除对input样式的影响
```css
input[type=button],input[type=text],input[type=password]{-webkit-appearance:none;outline:none}
```

5、手机浏览器上，按钮、图片、文本框点击进去的时候有阴影
```css
a,img,button,input,textarea{-webkit-tap-highlight-color:rgba(255,255,255,0);}
```

6、placeholder 颜色
```css
#reg_form .in input::-webkit-input-placeholder { /* WebKit browsers */
    color: #fff;
}

#reg_form .in input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #fff;
}

#reg_form .in input::-moz-placeholder { /* Mozilla Firefox 4 to 19+ */
    color: #fff;
}

#reg_form .in input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: #fff;
}
```

7、css3 自定义字体兼容性写法
```css
@font-face {
    font-family: 'MyFontFamily';
    src: url('myfont-webfont.eot');                     /* IE9 Compat Modes */
    src: url('myfont-webfont.eot?iefix') format('eot'), /* IE6-IE8 */
    url('myfont-webfont.woff') format('woff'),     /* Modern Browsers */
    url('myfont-webfont.ttf') format('truetype'),      /* Safari, Android, iOS */
    url('myfont-webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
    font-weight: <font-weight>;
    font-style: <font-style>;
    // etc.
}
```

8、css 背景透明 文字不透明
```css
.demo{
  padding: 25px;
  background-color:#000000;/* IE6和部分IE7内核的浏览器(如QQ浏览器)下颜色被覆盖 */
  background-color:rgba(0,0,0,0.2); /* IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂，但解析为透明 */
}
.demo p{
    color: #FFFFFF;
}
```
