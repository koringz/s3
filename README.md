# S3.js

<b>S3.js</b> 只是创建一个简单的应用程序与画布[Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API),它能实现简单的游戏动画效果,目前这个库只支持绘画circle的功能,后续更新中...

![S3.js sample](https://github.com/koringz/s3/blob/master/images/7.png)

## Usage

![S3.js Circle](http://images.cnblogs.com/cnblogs_com/hao5599/695043/o_5.png)

```js
const Body = s3.body(s3.dom('canvas'));
Body.component('circle', { type:'Array', property: [
  {color: '#AB5EEE', x: 100, y: 100, radius: 50}
]})
```

## Draw multiple

![S3.js multi Circle](http://images.cnblogs.com/cnblogs_com/hao5599/695043/o_99.png)

```js
const Body = s3.body(s3.dom('canvas'));
Body.component('circle', { type:'Array', property: [
  {color: '#AB5EEE', x: 100, y: 100, radius: 50},
  {color: '#5716D9', x: 250, y: 100, radius: 50},
  {color: '#701B73', x: 400, y: 100, radius: 50}
]})
```

## Examples

[View examples ~](https://koringz.github.io/s3/index.html)
