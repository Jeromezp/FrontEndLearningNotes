#canvas绘图是基于状态的
即表示只要属性被指定过后，canvas会重新根据新的属性进行重新绘制

##beginPath()
表示重新开始一个状态进行图形绘制，不会重新绘制前面已经绘制的图形
如下代码实例:
```
 context.beginPath();
        context.fillStyle = "#Def70F";
        context.moveTo(100,100);
        context.lineTo(300,100);
        context.lineTo(150,200);
        context.fill();


        context.beginPath();
        context.fillStyle = "#000";
        context.moveTo(300,500);
        context.lineTo(800,600);
        context.lineTo(450,200);
        context.fill();
```
这两段代码绘制的图形不会进行覆盖，值得注意的是，用填充的方式进行图形绘制是，canvas会自动将剩下的边框进行填充，因为图形填充时需要封闭的图形

##closePath()
表示图形绘制的结束，并且跟beginPath()连用表示一个封闭的图形
```
        context.beginPath();
        context.moveTo(600,100);
        context.lineTo(500,100);
        context.lineTo(700,200);
        context.closePath();
        context.stroke();
```