- ### 2017.5.10
#### 为什么仿知乎用canvas,而绘制拓扑使用svg？
<canvas>和<svg>都是HTML5推荐使用的图形技术，Canvas基于像素，提供2D绘制函数，是一种HTML元素类型，依赖于HTML，只能通过脚本绘制图形；SVG为矢量，提供一系列图形元素（Rect, Path, Circle, Line…），还有完整的动画，事件机制，本身就能独立使用，也可以嵌入到HTML中
Canvas提供的功能更原始，适合像素处理，动态渲染和大数据量绘制，SVG更适合用来做动态交互，而且SVG绘图很容易编辑，只需要增加或移除相应的元素就可以了。
由于后续需要添加设置路由等功能，所以采用了基于svg的数据可视化库，d3.js

- ### 2017 5.11
- [x] 添加缩放功能，主要思路是添加一个和svg同样大小的矩形，用于监听缩放事件
问题：缩放之后，力导向图不动了
解决：这个是由于无法选择圆的元素，应该把矩形在圆和线之前生成，因为svg的层叠关系是由元素生成顺序决定的。
- [ ] 取消连线，将两个点push进数组，然后将两个点之间的连线设置为白色
显示其他颜色：获取某一行的值，然后画线
设置路由：将两个点push进数组，更新 route数组
然后清空svg重绘？

- ### 2017 5.14
- [x] 为路由图添加了箭头
先写一对<defs>，里面再写一对<marker>，其中marker的属性意义为：
viewBox：坐标系的区域  
refX, refY：在 viewBox 内的基准点，绘制时此点在直线端点上（要注意大小写）  
markerUnits：标识大小的基准，有两个值：strokeWidth（线的宽度）和userSpaceOnUse（图形最前端的大小）  
markerWidth, markerHeight：标识的大小  
orient：绘制方向，可设定为：auto（自动确认方向）和 角度值  
id：标识的id号  
然后在 marker 里绘制图形即可，可用 path 绘制了一个箭头的图形。
http://www.tuicool.com/articles/Bzmemuy  
- [ ] 修改路由这个功能还是通过修改数组，然后重绘比较好
