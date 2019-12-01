# JD Moblie Website Demo
>一个简陋版京东移动端首页demo，图片瞎凑的hhhh，纯练手
## Notes
1. 百分比自适应布局/流式布局
2. 在移动设备种，浏览器和网页还有一层虚拟容器viewport，用来承载网页，可以缩放

## Problems
1. 背景图片设置问题
  * 正确写法：background-image: url('');
  * url栏中地址先要用../回到父级路径，再寻找images文件夹中图片（前提是该CSS文件在css文件夹中），结合css文件的位置写路径！
  * 要设置background-size，否则背景图片仍然不显示！

2. img为行内元素，margin、padding等设置对其无效，要生效可将它转换为块级元素，即display: block;

