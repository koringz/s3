const CAN = s3.dom("canvas")
const BODY = s3.body(CAN)
const OOC = s3.dom(".openOrclose")
function  go(inherit) {
  BODY.set({ width: document.body.offsetWidth, height: document.body.offsetHeight })
  BODY.component('circleShape', { type:'Array', property: inherit });
}

var open_or_close = 0;
var mouseX = 0;
var mouseY = 0;
var virX = 0;
var virY = 0;
var changed = 0;
var score = null;
var interface = void 0;
function moveBottom (api) {
  var ai = api.iterator
  var speed = ai.speed;
  var x = ai.x;
  var y = ai.y;
  var y1 = ai.y1;
  var radius = ai.radius;
  y += speed;
  api.setState( { y : y } )
  if(y > y1 + radius * 2) {
    api.setState( { y: - + radius * 2 } )
  }
  var val = [[x, y]];
  interface = api
  if(changed){
    api.collection[0].characteristic.property = interface.collection[0].characteristic.property
    if(api.score){
      if( ai.color !== "white") api.score+= 1
    }
    changed = 0
  }
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
for(var z = 0, results = [], angl = ang.length, ml = m.length; z < 100; z++) {
  var d = {
    color: color(),
    x: Math.random() * document.body.offsetWidth,
    y: Math.random() * document.body.offsetHeight,
    speed: Math.random() * 2,
    radius: Math.random() * 38,
    trails: Math.random() * 10,
    startAngles: ang[Math.round(Math.random() * angl)],
    stopAngles: ang[Math.round(Math.random() * angl)],
    motion: motion,
    method: moveBottom
  }
  results.push(d)
}

go(results)

function addLister(domnode,eventType,handler){
  el();
  if(el().all) domnode.attachEvent("on"+eventType,handler)
  else domnode.addEventListener(eventType,handler,false)
}

function el(element){
  if(!element){element = document}
  return element
}

const plus = s3.dom(".plus")
const add = s3.dom(".add")
const keeping = s3.dom(".keeping")
const times = s3.dom(".times")
addLister(CAN,'mousemove', function(e){
  this.box = e;
  this.clitx = e.clientX;
  this.clity = e.clientY;

  mouseX = this.clitx,
  mouseY = this.clity
})

var clear = 0;
var curTime = null;
var nextTime = null;
addLister(OOC,'click',function(e){
  open_or_close = !open_or_close
  if (open_or_close) {
    OOC.innerHTML = "已开始"
    curTime = (new Date).getTime()
  }
  else {
    OOC.innerHTML = "已关闭"
    nextTime = (new Date).getTime() - curTime
    var originalTimes = Number(times.innerText)
    var seconds = (nextTime / 1000)
    times.innerHTML = originalTimes + seconds
    if (clear) clearTimeout(clear)
    clear = setTimeout( function () {
      add.classList = "add followsuspend-aside"
    },500)
  }
})

addLister(keeping,'click',function(e){
    add.classList = "add"
})

addLister(CAN,'click',function(e){
  if(open_or_close){
    var inter = interface.collection[0].characteristic.property
    for (var il = inter.length, i = 0; i < il; i++){
        var r = inter[i].radius
        var y = inter[i].y
        var x = inter[i].x
        if ( mouseY > y - r && mouseY < y + r ){
          if ( mouseX > x - r && mouseX < x + r ) {
            if(!score) interface.score = 1
            if(inter[i].color === "white"){}
            else changed = 1
            inter[i].color = "white"
          }
        }
    }
    if(changed) {
      var TOTAL= Number(plus.innerText) + interface.score
      plus.innerHTML = TOTAL
    }
  }
})