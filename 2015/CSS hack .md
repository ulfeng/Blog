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
