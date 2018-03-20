function  go(a) {
  const body = s3.body(s3.dom("canvas"))
  body.set({ width: document.body.offsetWidth, height: document.body.offsetHeight })
  var bc = body.component('circleShape', { type:'Array', property: a });
}
function moveBottom (api) {
  var it = api.iterator
  var speed = it.speed;
  var x = it.x;
  var y = it.y;
  var y1 = it.y1;
  var radius = it.radius;
  y += speed;
  api.setState( { y : y } )
  if(y > y1 + radius * 2) {
    api.setState( { y: - + radius * 2 } )
  }
  var val = [[x, y]];
  return val
}
function moveTop (api) {
  var it = api.iterator
  var speed = it.speed;
  var x = it.x;
  var y = it.y;
  var y1 = it.y1;
  var radius = it.radius;
  y -= speed;
  api.setState( { y : y } )
  if(y < - radius * 2) {
    api.setState( { y: y1 + radius * 2 } )
  }
  var val = [[x, y]];
  return val
}
var m = ["stop","move"];
var ang = [10,230,360,80,160];
function color () {
  return 'hsla('+ Math.round(Math.random() * 360) +','+Math.round(Math.random() * 100)+'%,'+Math.round(Math.random() * 100)+'%,'+'1)';
}
function motion (ml) {
  var md = Math.random()
  return m[Math.round(md * ml)]
}
for(var z = 0, results = [], angl = ang.length, ml = m.length; z < 60; z++) {
  var d = {
    color: color(),
    x: Math.random() * document.body.offsetWidth,
    y: Math.random() * document.body.offsetHeight,
    speed: Math.random() * 2,
    radius: Math.random() * 50,
    trails: Math.random() * 10,
    startAngles: ang[Math.round(Math.random() * angl)],
    stopAngles: ang[Math.round(Math.random() * angl)],
    motion: motion,
    method: moveBottom
  }
  results.push(d)
}
go(results)