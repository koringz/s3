
const Can = s3.dom("canvas");
const Body = s3.body(Can);
function go(inherit) {
    Body.set({ width: document.body.offsetWidth, height: document.body.offsetHeight });
    Body.component('circleShape', { type: 'Array', property: inherit });
}

function reset() {
    var ang = [10, 230, 360, 80, 160];
    function color() {
      return 'hsla(' + Math.round(Math.random() * 360) + ',' + Math.round(Math.random() * 100) + '%,' + Math.round(Math.random() * 100) + '%,' + '1)';
    }
    for (var z = 0, results = [], angl = ang.length; z < 100; z++) {
        results.push({
            color: color(),
            x: Math.random() * document.body.offsetWidth,
            y: Math.random() * document.body.offsetHeight,
            speed: Number(Math.random().toFixed(1)),
            radius: (Math.random() * 26) + 10,
            trails: Math.random() * 10,
            startAngles: ang[Math.round(Math.random() * angl)],
            stopAngles: ang[Math.round(Math.random() * angl)],
            motion: 'move',
            method: moveBottom
        })
    }
    results[10].motion = 'stop'
    return results
}

go(reset())

var mouseX = 0;
var mouseY = 0;
var score = 0;
var clear = 0;
var interface = null;
var curTime = null;
var changed = false;
var open_or_close = false;

function moveBottom(api) {
    var current = api.current;
    if (!interface) interface = api.properties;
    var speed = current.speed;
    var x = current.x;
    var y = current.y;
    var y1 = current.y1;
    var radius = current.radius;
    y += speed;
    api.setState({ y: y });
    if (y > y1 + radius * 2) api.setState({ y: -+radius * 2 });
    if (changed) changed = false;

    return [[x, y]];
}


const plus = s3.dom(".plus");
const add = s3.dom(".add");
const ooc = s3.dom(".openOrclose");
const keeping = s3.dom(".keeping");
const times = s3.dom(".times");
const configuration = s3.dom(".configuration");
const button = s3.dom("button");

addLister(Can, 'mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
})
addLister(Can, 'click', function(e) {
    if (open_or_close) {
        var i = interface.length
        while (i--) {
            var r = interface[i].radius;
            var y = interface[i].y;
            var x = interface[i].x;
            if (mouseY > y - r && mouseY < y + r & mouseX > x - r && mouseX < x + r) {
                if (interface[i].color !== "white") {
                    interface[i].color = "white";
                    score++;
                    changed = true;
                }
            }
        }
        if (changed) {
            plus.innerHTML = score;
            if (Number(plus.innerText) >= 76) {
                configuration.innerHTML = "恭喜你！闯关成功！";
                button.innerHTML = "再来一次";
                button.setAttribute("awards", "1");
            }
        }
    }
})
addLister(ooc, 'click', function(e) {
    open_or_close = !open_or_close;
    if (open_or_close) {
        ooc.innerHTML = "已开始(查)";
        curTime = (new Date).getTime();
    } else {
        ooc.innerHTML = "已停止";
        var nextTime = (new Date).getTime() - curTime;
        var seconds = nextTime / 1000;
        var originalTimes = Number(times.innerText);
        times.innerHTML = seconds + originalTimes;
        if (clear) clearTimeout(clear);
        clear = setTimeout(function() {
            add.classList = "add followsuspend-aside";
        }, 500)
    }
})
addLister(keeping, 'click', function(e) { add.classList = "add" })
addLister(button, 'click', function(e) {
    var _awards = button.getAttribute("awards");

    if (_awards == 1) {
        mouseX = 0;
        mouseY = 0;
        changed = 0;
        score = 0;
        open_or_close = 0;
        clear = 0;
        interface = null;
        go(reset());
        button.setAttribute("awards", 0);
        button.innerHTML = "继续";
        plus.innerHTML = 0;
        configuration.innerHTML = '';
        times.innerHTML = 0;
    }
})

function addLister(domnode, eventType, handler) {
    if (document.all) domnode.attachEvent("on" + eventType, handler);
    else domnode.addEventListener(eventType, handler, false);
}