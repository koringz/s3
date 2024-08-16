const Body = s3.body()
const circle = Body.makeCircle(100, 50, 8) // 创建一个圆
const line = Body.makeLine(100, 50, 8) // 创建一条线

circle.fill = '#FF016B' // 设置圆的填充色
circle.stroke = 'orangered'  // 设置圆的边框填充色
line.fill = 'rgb(0, 200, 255)'

circle.amount(88) // 共创建88个圆 (暂存)
line.amount(10) // 共创建10条线 (暂存)

// 组件内只能调用和设置每一个圆(circle)和线(line)的属性
Body.component([circle,line], function (circle, line) {
  let len = circle.children.length
  while(len--){
    circle.children[len].rotation = 1
    circle.children[len].x = 10 + len
    circle.children[len].y = 80 + len
    circle.children[len].radius = 5
  }
})

// 更新圆和线的动画效果
Body.bind('update', function (api) {
  circle.scale += 1
  circle.rotation += 4 * Math.PI
  line.scale += 10
  line.linewidth  += 40
})

Body.play()