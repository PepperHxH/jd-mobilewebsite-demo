# JD Moblie Home-page Demo
>一个实现了自适应响应布局的简陋版京东移动端首页demo，图片瞎凑的hhhh，纯练手
## Demo Screenshot
![screenshot1](screenshot1.jpg)
![screenshot1](screenshot2.jpg)

## Notes
1. 百分比自适应布局/流式布局
2. 在移动设备中，浏览器和网页还有一层虚拟容器viewport，用来承载网页，可以缩放

## Problems
### 1. 背景图片设置问题
  * 正确写法：background-image: url('');
  * url栏中地址先要用../回到父级路径，再寻找images文件夹中图片（前提是该CSS文件在css文件夹中），结合css文件的位置写路径！
  * 要设置background-size，否则背景图片仍然不显示！

### 2. img为行内元素，margin、padding等设置对其无效，要生效可将它转换为块级元素，即display: block;

### 3. scrollTop()的浏览器兼容问题
  在写js获取页面滚动条距顶部的距离时，遇到了浏览器兼容的问题，尝试使用如下代码后解决了问题。
  ```
  var top = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop
          || 0; 
  ```
  各浏览器下scrollTop的差异总结如下：
  ### IE6/7/8/9/10：
  对于没有doctype声明的页面里可以使用  document.body.scrollTop 来获取 scrollTop高度；
  对于有doctype声明的页面则可以使用 document.documentElement.scrollTop；
  ### Safari:
  safari 比较特别，有自己获取scrollTop的函数：window.pageYOffset；
  ### Firefox:
  document.documentElement.scrollTop；
  ### Chrome
  document.documentElement.scrollTop

  
