'utf-8';
(function(foctory) { 
!function(factory) {
  if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    var target = module['exports'] || exports; // module.exports is for Node.js
    factory(target);
  } else if (typeof define === 'function' && define['amd']) {
    // AMD
    define(['exports'], factory);
  } else {
    // No module loader
    factory(window['s3'] = {});
  }
} (function(exports) {

var _s3 = typeof exports !== "undefined" ? exports: {};

// Default global properties.
var doc = exports.document || document,win = window;

function s3(element, options) {
  return new s3.order(element, options) || {}
};

// Add a val in the methods.
(function (){
  var order = function(element, options) {};
  order.prototype = {
    version: "0.0.4",
    dom: function(options) {
      return doc.querySelector(options)
    },
    append: function(element, options) {
      return element.appendChild(options);
    },
    text: function(element, options) {
      return element.innerHTML = options;
    },
    blank: function() {},
    isStr: function(options) {
      return typeof(options) === 'string'
    },
    isObj: function(options) {
      return typeof(options) === 'object'
    },
    isFun: function(options) {
      return typeof(options) === 'function'
    },
    isNum: function(options) {
      return typeof(options) === 'number'
    },
    isArr: function(options) {
      return typeof(options) === 'array'
    },
    trim: function(options) {
      return options.replace(/(\s*)/g, '');
    },
    toString: function(options) {
      return JSON.toString(options);
    },
    parse: function(options) {
      return JSON.parse(options);
    },
    extend: function(prop, options) {
      for (var pop in options) {
        if (pop in prop) {
          prop[pop] = options[pop]
        }
        prop[pop] = options[pop]
      }
      return prop
    },
    indexof: function(prop, options) {
      for (var i = 0; i < prop.length; i++) {
        if (prop[i] === options) {
          return 1;
        }
      }
      return - 1;
    },
    debug: function(options) {
      function warn(options, log) {
        options.call(this, log.options);
      }
      return warn(function(options) {
        win.console.warn(options);
      },
      {
        options: options ? options: 'disable write. call function error'
      })
    },
    Shape: function(options) {
      return new Shape(options, this)
    }
  };

  s3.order = order;
})();


 /**
  * set s3.js libriry version
  * create a model name
  * create date
  * other configuration info
 */
(function(messages) {
 if(!messages) messages = {};
 messages.version = '0.1';
 messages.privateModule = 's3';
 messages.date = '20170912';
 messages.nowDate = new Date;
 messages.config = {};

 s3.messages = messages;
})();


/**
 *The declare attribute used in the call.
 *变量首字母以A开始
 *所有在1000以下的变量用A开头
 *并且变量的第二个字母以99使用的单词开头
 *第三个字母和第二个同名 那么第三字母使用_下划线
 *所有超过1000的按照英文的字母表顺序做变量的开头首字母
 *数组的属性以_下划线开头
 *如果hatShape首字母和其他名称类似 hs中间加一个大写字母
 *ARRSLICE_module
*/
(function (){
  var 
  Am, 
  At, 
  Atp, 
  Ata, 
  Atd, 
  Att, 
  Atr, 
  Ats, 
  Ata, 
  Atc, 
  Atc20, 
  Atc30, 
  Ac,
  Acd,
  Acp,
  Ashape,
  Acls, 
  Acas, 
  Acrs, 
  Acws, 
  Acss, 
  Achs,
  AchIs,
  Acvdp, 
  Ac_2d,
  Accp,
  Ac_, 
  Acm,
  Ach, 
  Aw, 
  Al, 
  Aset, 
  Af, 
  Bc, 
  Bp, 
  Br,

  // functional property
  speed, 
  times, 
  logger, 
  processing, 
  requestAnimation,

  // be used to configure the declared properties.
  put = {},
  counts = 0,
  category = null,
  init = void {};

  init = new(function(_ = {
    a: [],
    puts: put
  }) {
    return function($_ = {}) {
      // original property bind to '$_'.
      $_.self = _.a;
      $_.puts = _.puts;
      // save self in the parent '$_'.
      $_.self.push($_);
      var childs,closureCollection;
      closureCollection = _.a;
      for (var i = 0,
      iterator = $_.self[0], len = iterator.length; i < len; i++) {
        closureCollection[i] = [];
        var child = iterator[i];
        for (var j in child) {
          childs = child[j];
          try {
            if ("function" !== typeof childs) {
                throw "你没有选择函数！" //You are not define function mehtods.
            } else {
              // output function methods save to between one object and another object.
              switch (i) {
                case 0:
                  closureCollection[i][j] = (childs);
                  break;
                case 1:
                  closureCollection[i][j] = (childs);
                  break;
                case 2:
                  closureCollection[i][j] = (childs);
                  break;
                case 3:
                  closureCollection[i][j] = (childs);
                  break;
                default:
                  break;
              }
            }

          } catch(e) {
            throw e
          };
        };
      }
      // 实现反向获得caes 1内部的数组函数
      return closureCollection[0][2](),
      closureCollection[0][3](),
      closureCollection[0][1].call(this, closureCollection),
      closureCollection
    } (
    [
    {
      1 : function(closure) {
        // first ,reset the properties.
        // 实现反向储存方法 
        // 闭包内部的方法可重用
        // 变量实现初始化方法
        // 如果多次调用,必须在q不使用new的前提下使用
        Am = Array.prototype.slice;
        At = closure[1][99];
        Atp = closure[1][98];
        Ata = closure[1][97];
        Atd = closure[1][96];
        Att = closure[1][95];
        Atr = closure[1][94];
        Ats = closure[1][89];
        Ata = closure[1][87];
        Atc = closure[1][86];
        Atc20 = closure[1][85];
        Atc30 = closure[1][84];
        Atpc = closure[1][83];
        Ashape = closure[1][300];
        Ac = closure[1][299];
        Acls = closure[1][298];
        Acas = closure[1][297];
        Acrs = closure[1][296];
        Acws = closure[1][295];
        Acss = closure[1][294];
        Achs = closure[1][293];
        AchIs = closure[1][292];
        Acvdp = closure[1][280];
        Accp = closure[1][279];
        Acp = closure[1][266];
        Acd = closure[1][260];
        Ac_2d = closure[1][250];
        Acw = closure[1][240];
        Ac_ = closure[1][239];
        Ach = closure[1][232];
        Acm = closure[1][219];
        Aset = closure[1][499];
        Af = closure[1][999];
        Bp = closure[1][1000];
        Bc = closure[1][1099];
        Br = closure[1][1299];
      },
      2 : function() {
        // used in the function properties.
        speed = 0.1; // speed lv
        times = 0; // time out
        logger = false; // record
        processing = 1;
        requestAnimation = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || (function() {
          var fps = 1000 / 60;
          var lastTimes = 0;
          return function(callback) {
            var currentTimes = (new Date).getTime();
            var callTimes = Math.max(0, fps - (currentTimes - lastTimes));
            var t = setTimeout(function(callback) {
                callback(callTimes + currentTimes);
            },
            callTimes);
            lastTimes = callTimes + currentTimes;
            return t;
          }
        });
      },
      3 : function() {
        // bind function mehtod in the rename variable.
        // eleven with data and el document.
        // first : properties; second : closure; third : prototype chain; fourth : __proto__ ; fifth : this gesture[6]
        category = [Object,
        // default properties
        // the application is replacement the tools
        { 
          99 : 'tool',
          98 : 'pos',
          97 : 'animation',
          96 : 'draw',
          95 : 'transfer',
          94 : 'render',
          89 : 'scene',
          88 : 'amount',
          86 : 'createGradient',
          85 : 'createGradient20',
          84 : 'createGradient30',
          83 : 'pointerConfig',
          82 : 'startConfig',
          300 : 'shape',
          299 : 'circleShape',
          298 : 'lineShape',
          297 : 'arcShape',
          296 : 'rectShape',
          295 : 'waveShape',
          294 : 'sectorsShape',
          293 : 'hatShape',
          292 : 'hillShape',
          280 : 'validateDrawProperty',
          266 : 'position',
          279 : 'compareProperty',
          260 : 'distance',
          250 : 'context',
          240 : 'wave',
          239 : 'circle',
          232 : 'hill',
          219 : 'math',
          499 : 'set',
          999 : 'freezeProperty',
          1000 : 'plugin',
          1099 : 'cover2DProperty',
          1111 : 'cache',
          1299 : 'render',
        },
        // closure
        {
          1 : 'get',
          2 : 'set',
          3 : 'add',
          66 : 'on'
        },
        // prototype chain
        {
          1 : 'click',
          3 : 'mouseover',
          6 : 'gesture',
          11 : 'atach'
        }
        // gesture events
        ]
      }
    },
    {
      99 : function() {
        this.name = 'tool';
        this.newEmpty = [];
        this.pipe = [];
        this.defaults = {};
        this.data = [arguments[0]];
        var data = this.data[0];
        var messages = s3.messages;
        for (var i in messages) {
          this[i] = messages[i];
        }
        for (var k in data) {
          if (k === 'webkitImageSmoothingEnabled' || 
              k === 'mozImageSmoothingEnabled' || 
              k === 'msImageSmoothingEnabled') k = 'imageSmoothingEnabled';
          var _thing = data[k];
          var m = 0;
          var n = 0;
          if (typeof _thing === 'string' || 
            typeof _thing === 'number' || 
            typeof _thing === 'boolean') {
            this.newEmpty.push(k);
            this.defaults[k] = {
              name: 'withoutMethod',
              type: typeof data[k]
            };
            this.config['withoutMethod'] = n++;
          } else if (typeof _thing === 'function') {
            this.newEmpty.push(k);
            this.defaults[k] = {
              name: 'withMethod',
              type: typeof data[k],
              length: data[k].length
            };
            this.config['withMethod'] = m++;
          }
        }
      },
      88 : function(num) {
        this.name = 'amount';
        this.nums = num;
      },
      86 : function() {
        this.name = 'createGradient';
      },
      85 : function() {
        this.name = 'createGradient20';
      },
      84 : function() {
        this.name = 'createGradient30';
      },
      83 : function() {
        this.name = 'pointerConfig';
        this.TYPE = arguments[0].type;
        this.PROPERTY = arguments[0].property;
      },
      82 : function() {
        this.name = 'startConfig';
        this.SPEED = 0.1;
        this.OPEN = 0;
      },
      300 : function() {
        this.name = 'shape';
        this.borderColor = '#7E8842';
        this.radius = 36; // 半径
        this.thick = 5; // 厚度
        this.motion = 'stop'; // 运动方式 自动 随机 由名称决定
        this.trails = 1; // 运动轨迹 默认1
        this.hertz = 10; // 敏感度高 周期变化重复数多
        this.rate = 5; // 频率大 浮动高度低 否则高
        this.SPEED_3 = null; // start set
        this.speed = this.SPEED_3 || 0.2; // 速度快慢
        this.bMoveMode = !1; // if false is stop moving
        this.opposite = 1;
        this.direction = 'top'; // 方向
        this.slope = 0.99996; // 倾斜度
        this.smooth = 1; // 平滑度
        this.currentTimes = (new Date).getTime();
        this.buffer = new ArrayBuffer(16);
        this.fdata = new Float32Array(this.buffer, 0, 3);
        this.index = this.fdata;
        this._device = win.devicePixelRatio;
        this.x = Math.round(Math.random() * 36 + 36); // start position
        this.y = Math.round(Math.random() * 36 + 36); // start position
        this.x1 = Math.round(Math.random() * 36 + 36) * 2; // end position
        this.y1 = Math.round(Math.random() * 36 + 36) * 2; // end position
        this.calculationProperty = { // 进程的属性
            createWave: init[1][240].createWave,
            createCircle: init[1][239].createCircle,
            createHill: init[1][232].createHill
        };
        this.readyPosition = 50;
        this.beginPosition = {x: 50,y: null};
        this.endPosition = {x: 500,y: null};
        this.startAngles = Math.PI * 0;
        this.stopAngles = Math.PI / 2;
      },
      299 : function() {
        this.name = 'circleShape';
        this.data = [];
        this.o_OPEN = 0;
        this.iterator = {};
        // 运动方式 分别有 自动、随机 向左 右、下 上、停止
        this.moveModel = ['auto', 'random', 'round', 'left', 'right', 'bottom', 'top', 'stop'];
        // 如果是0停止 否则运动
        this.bMoveMode = !1;
        this.isMoveModel = this.bMoveMode ? this.moveModel[0] : this.moveModel[this.moveModel.length-1];
        this.collection = arguments[0];
      },
      298 : function() {
        this.name = 'lineShape';
        this.data = [];
        this.iterator = {};
        this.collection = arguments[0];
      },
      297 : function() {
        this.name = 'arcShape';
        this.data = [];
        this.iterator = {};
        this.collection = arguments[0];
      },
      296 : function() {
        this.name = 'rectShape';
        this.data = [];
        this.iterator = {};
        this.collection = arguments[0];
      },
      295 : function() {
        this.name = 'waveShape';
        this.stop = !0;
        this.s_SPEED = 0;
        this.o_OPEN = 0;
        this.data = [];
        this.iterator = {};
        this.collection = arguments[0];
      },
      294 : function() {
        this.name = 'sectorsShape';
        this.data = [];
        this.iterator = {};
        this.collection = arguments[0];
      },
      293 : function() {
        this.name = 'hatShape';
        this.data = [];
        this.iterator = {};
        this.collection = arguments[0];
      },
      292 : function() {
        this.name = 'hillShape';
        this._direction = ['top','left','right','bottom'];
        this.data = [];
        this.iterator = {};
        this.radius = 0.0001;
        this.collection = arguments[0];
      },
      280 : function (){
        this.name = 'validateDrawProperty';
        this.absolute_position;
        this.setMatchData;
        this.cross;
        this.select = [];
        this.iterator = {};
        this.data = [];
        this.reset = [];
        // input property
        // Define circle shape property, params name(:A1)
        // Define line shape property, params name(:B2)
        this.main = {};
        // defaults property
        this.inhert = {};
        // output property
        this.out = {};
        // storage params
        this.save = [arguments[0],arguments[1]];
        // reset property
        this.reset[0] = 0;
        this.reset[1] = 0;
      },
      279 : function (){
        this.name = 'compareProperty';
        this.iterator = {};
        this.data = [];
      },
      266 : function(options) {
        this.name = 'position';
        this.data = [options];
      },
      260 : function(options) {
        this.name = 'distance';
        this.data = [options];
        this.f_speed;
      },
      250 : function(options) {
        this.name = 'context';
        this.data = [options];
      },
      240 : function() {
        this.name = 'wave';
        this.data = [];
      },
      239 : function() {
        this.name = 'circle';
        this.data = [];
      },
      232 : function() {
        this.name = 'hill';
        this.data = [];
      },
      219 : function() {
        this.name = 'math';
        this.data = [];
        this.ABS = [];
        this.framesRate = [];
      },
      499 : function() {
        this.name = 'set';
        this.data = [];

        if (typeof arguments === 'object') this.data.push(arguments[0]);
      },
      999 : function() {
        this.name = 'freezeProperty';
        this.isFreezeProperties = arguments[0];
        Object.freeze(this.isFreezeProperties)
      },
      1000 : function() {
        this.name = 'plugin';
        shape.plugin(arguments);
      },
      1111 : function() {
         this.name = 'cache';
      },
      1099 : function() {
         this.name = 'cover2DProperty';
      },
      1299 : function() {
         this.name = 'render';
      },
    },
    {
      1 : function() {
        this.name = 'get';
        // used gesture pointer.
      },
      2 : function() {
        this.name = 'set';
      },
      3 : function() {
        this.name = 'add';
      },
      4 : function() {
        this.name = 'on';
      }
    },
    {
      6 : function() {
        this.name = 'gesture';
        // used gesture pointer.
        return {
          linear: function(argument) {},
          easein: function(argument) {},
          easeout: function(argument) {}
        }
      }
    }
    ])
  });

  s3.init = init;
  s3.category = category;
  s3.Aset = Aset;
  s3.At = At;
})();

/**
* options is an obj.
* The 'previous' will be proto methods by reo target.

* Shape.chain()
* 你可以重新写入调用的数据, 因此你可以自定义写插件
* 通过给chain的方法传入2个参数即可, 第一个参数为this
* 第二个参数就是你的插件名 world方法名称

-  var d = Shape.plugin({get:1},{
     init : function(){},
     frame : function(){}
   }
*/
function Shape(options, previous) {
  // inject parameters;
  // Extend previous method of preotype chain properties.
  return new s3.category[1][99],this;
};
Shape.plugin = function() {
  return Shape.plugin.create(arguments)
};
Shape.plugin.create = function(subclasses, definition) {
  Shape.prototype[subclasses] = definition.prototype.initialize;
};

s3.space = {};
s3.tween = {};
s3.node = {};

/*
 * compute position
 * use calculation layout
 * multi math and getter and setter property
 * binding s3.node
*/
(function (){
var q = s3.init;
var o = s3.category;
var _is = 0;
q[0] = o[0];

q[1][266].prototype.constructor = o[1][266];
o[1][266] = q[1][266];
q[0].assign(o[1][266].prototype, {
  initialize: function() {
    return this,
    o[1][266].call(this, arguments),
    o[1][266].prototype
  },
  
});

s3.node._position = o[1][266];
})();

/*
* set position
*/
(function (){
var q = s3.init;
var o = s3.category;
var _is = 0;
q[0] = o[0];

q[1][260].prototype.constructor = o[1][260];
o[1][260] = q[1][260];
q[0].assign(o[1][260].prototype, {
  initialize: function() {
    return this,
    o[1][260].call(this, arguments),
    o[1][260].prototype
  },
  
  /*
    set position storage
    these can changed of property
  */
  setPosition : function (s_x ,s_y){
    this._x = s_x;
    this._y = s_y
  },

  /*
    get storage position
  */
  getPosition : function (){
    return [this._x, this._y]
  },

  /*
    set speed
  */
  setSpeed : function (_speed){
    this.f_speed = parseFloat(_speed)
  },
  getSpeed : function (){
    return this.f_speed
  },
});

s3.node._distance = o[1][260];
})();

/*
 * compareProperty
 * add ...
 * more ...
*/
(function (){
  var q = s3.init;
  var o = s3.category;
	var _is = 0;
  q[0] = o[0];

  q[1][279].prototype.constructor = o[1][279];
  o[1][279] = q[1][279];
  q[0].assign(o[1][279].prototype, {
    initialize: function() {
      return this,
      o[1][279].call(this, arguments),
      o[1][279].prototype
    },
    // inputAndOutput methods
    iAO : function (ma, mi){
    	 this._old = ma;
    	 this._new = mi;

    	 var resetting_item_0 = this._new['A'] || this._old['A'];
    	 var resetting_item_1 = this._new['B'] || this._old['B'];
    	 _is++;

    	 this.relative_position = {
    	 	 pos_a: resetting_item_0,
    	 	 pos_b: resetting_item_1
    	 };

    	 return this.relative_position
    },
    // set initalize property
    getInputPosition : function (options){
    	 if(options === 'x')  this[options] = this.relative_position.pos_a;
    	 if(options === 'y')  this[options] = this.relative_position.pos_b;
    	 return this[options]
    },
    // resolve
    resolvePosition : function (options){
    	 return [{
    	 	 results:[options.pos_a,options.pos_b],
    	 	 complate:_is?true:false,
    	 	 length:options.length
    	 }]
    }
  });

  s3.node._compareProperty = o[1][279];
})();


/*
 * validate draw once params
 * binding s3.node
 * circle line rect 
 * ...
*/
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];

  var com = new s3.node._compareProperty();

  q[1][280].prototype.constructor = o[1][280];
  o[1][280] = q[1][280];
  q[0].assign(o[1][280].prototype, {
    initialize: function() {
      return this,
      o[1][280].call(this, arguments),
      o[1][280].prototype
    },
     // set initalize property
    initProperty : function (){
      this.out = {
      	A1: void null,
      	B2: void null,
      };
      // static default void property 
      this.inhert.subProperty = {
      	default_A: void {},
      	default_B: void {},
      	default_C: void {}
      };
      // await match property
      this.main.dynamicProperty ={
      	match_A: void 0,
      	match_B: void 0,
      	match_C: void 0
      }
    },
    receivingProperty : function (){
    	 this.initProperty();
    	 
    	 // get an object
    	 var gpa_default = this.reset[0] || this.save[0];
    	 var gpa_match = this.reset[1] || this.save[1];

      {
       this.inhert.subProperty.default_A = gpa_default.x;
       this.inhert.subProperty.default_B = gpa_default.y;
       this.main.dynamicProperty.match_A = gpa_match.x;
       this.main.dynamicProperty.match_B = gpa_match.y;
      }
    	 
    	 // swap object
     	this.out.A1 = this.inhert.subProperty;
     	this.out.B2 = this.main.dynamicProperty;

     	return this.out
    },
    validateProperty : function (){
      var pointer = this.receivingProperty();
    	 
    	 // get position pointer
      var pax = pointer.A1.default_A;
      var pay = pointer.A1.default_B;
      var pbx = pointer.B2.match_A;
      var pby = pointer.B2.match_B;
    	
      // reset configure data info
      // base on setMatchProperty methods
      // in the method takes two paramer {} and (0 | 1)
      var Vdata = this.validateData();
      var preData = Vdata.preData(this.select);
      var next = preData.next();

    	// get new params step
     	var compare = new com.iAO( next.childs.pop() || {A:pax,B:pay}, next.childs.pop() || {A:pbx,B:pby});
     	var resolve = new com.resolvePosition(compare);
     	
     	// return resolve plans
     	this.absolute_position = resolve[0];
     	this.cross = resolve[0].complate;

     	return this.cross
    },
    validateData : function (){
      var states = [];
      var params = [];
      var datas = this.setMatchData;

      return {
        preData: function (options){
          states.length = 0;
          states.push(0);
          params.length = 0;
          params.push(options);
          
          return this
        },
        next: function (){
          var p = params[0];
          if(p[0] === 0){
            params[1] = datas;
            states[1] = 0;
            params[0] = 0;
            states[0] = 1
          }
          else if(p[1] === 1){
            params[0] = datas;
            states[0] = 0;
            params[1] = 0;
            states[1] = 1
          }
          else {
            params[0] = 0;
            states[1] = 0;
            params[1] = 0;
            states[0] = 0
          }
          
          return {
            states : states,
            childs : params
          }
        } 
      };
    },
    // if numos equal to 0 and match the first property, else another com.iAO(,1)
    setMatchProperty : function (options,nums){
    	 if(nums>0) this.select[nums] = 1;
       else this.select[nums] = 0;
    	 this.setMatchData = options
    },
    getMatchProperty : function (options){
    	 return this.setMatchData
    },
    complate : function (){
    	 try{
    	 	 if(this.cross) return this.absolute_position;
    	 	 else return 'please you reset the params';
    	 }catch(e){
    	 	throw e
    	 }
    }
  });
  q[0].defineProperties(o[1][280].prototype, {
  	setProperty :{
  		 set : function (val){
  		 	 if(typeof val === 'object' ) this.reset = val;
  		 },
  		 get : function (){
  		 	 return this.reset
  		 }
  	}
  });

  s3.node._validateDrawProperty = o[1][280];
})();


/**
	*circle
	*line
	*rect
	*Polygon
	*chain
*/


/*
- circle shape
- 传入参数(默认canvas Element)
- 回调函数(函数名为调用功能functional)
- 功能分别为 SHAPE WAVE CIRCLE LINE ARC ...
- circle : app.circle()
*/
/*
  定义配置信息
  首次配置implement组件的属性和方法
{
  x: 坐标 x,
  y: 坐标 y,
  index: color 值,
  speed ：速度 number,
  trails ：轨迹 number,
  radius ：半径 number,
  startAngles ：起始角度 pi,
  stopAngles : 结束角度 pi,
  motion : 运动方式 String,
  bMoveMode : 运动方式 boolean
}
*/
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];

  q[1][299].prototype.constructor = o[1][299];
  o[1][299] = q[1][299];
  q[0].assign(o[1][299].prototype, {
    initialize: function() {
      return this,
      o[1][299].call(this, arguments),
      o[1][299].prototype
    },
    draw: function(options) {
      var getCollectionProperty = this.particularProperty(true);
      // 获得默认的属性和参数
      var shapeProperty = new o[1][300];
      var _createCircle = shapeProperty.calculationProperty.createCircle;
      var ctx2M = new s3.node._context(this.data[0]);
      this.iterator.dynamic = {};

      // if loop.
      if (this.o_OPEN) {
        ctx2M.hook2D('fillStyle', {
          index: "rgb(255,255,255)"
        });
        ctx2M.hook2D('fillRect', {
          x: '0',
          y: '0',
          x1: this.data[0].canvas.width,
          y1: this.data[0].canvas.height
        });
      }

      var validate = new s3.node._validateDrawProperty({x:1,y:2},{x:1,y:2});
      validate.setMatchProperty({x:3,y:4},1);

      var isExit = validate.validateProperty();


      // console.log(isExit)

      var acceptCollection, _thing;
      if (getCollectionProperty.type === 'Array') acceptCollection = getCollectionProperty.property;
      for (var j = 0; j < acceptCollection.length; j++) {
        // 获取所有传入的属性 之后check检查
        _thing = acceptCollection[j];

        var _checkedParams = null;
        if (_thing instanceof Object) {
          _checkedParams = [{
            x: _thing.x || shapeProperty.x,
            y: _thing.y || shapeProperty.y,
            index: _thing.index || shapeProperty.index,
            speed: _thing.speed || shapeProperty.speed,
            radius: _thing.radius || shapeProperty.radius,
            trails: _thing.trails || shapeProperty.trails,
            startAngles: _thing.startAngles || shapeProperty.startAngles,
            stopAngles: (_thing.stopAngles * 4) || (shapeProperty.stopAngles * 4),
            motion: _thing.motion || shapeProperty.motion,
            bMoveMode: _thing.bMoveMode || shapeProperty.bMoveMode
          }]
        }

        Object.assign(this.iterator, _checkedParams[0]);

        ctx2M.hook2D('moveTo', {
          x: this.iterator.x,
          y: this.iterator.y
        });
        ctx2M.hook2D('beginPath');
        // 如果默认停止即圆 否则 开始运动
        // 支持二种方式 {moveModel : String} {bMoveMode:0 || 1}
        if (this.iterator.motion === shapeProperty.motion && this.iterator.bMoveMode ? (this.iterator.motion === shapeProperty.motion || this.isMoveModel !== this.iterator.motion) : this.iterator.motion !== shapeProperty.motion ? false: !0) ctx2M.hook2D('arc', {
          x: this.iterator.x,
          y: this.iterator.y,
          radius: this.iterator.radius,
          startAngles: this.iterator.startAngles,
          stopAngles: this.iterator.stopAngles,
          bool: false
        });
        else this.start(_createCircle, ctx2M);
        ctx2M.hook2D('closePath');
        ctx2M.hook2D('fillStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('fill');
      }
    },
    // example color array and pos
    particularProperty: function(options) {
      if (options) return this.collection[0].characteristic;
    },
    start: function(options, ctx2M) {
      this.getDynimicData(options, this.iterator.x, this.iterator.y);
      // shape的数量取决于for循环的数目
      // 循环多 绘画多 draw multiple shapes
      for (var d = this.iterator.dynamic.group,
      k = 1,
      i = 0; i < k; i++) {
        var x = d[i][0] * this.iterator.trails + this.iterator.x,
        y = d[i][1] * this.iterator.trails + this.iterator.y;
        ctx2M.hook2D('arc', {
          x: x,
          y: y,
          radius: this.iterator.radius,
          startAngles: this.iterator.startAngles,
          stopAngles: this.iterator.stopAngles,
          bool: false
        });
      }
    },
    // 获得动态属性
    getDynimicData: function(_createCircle, _a, _b) {
      var outModelObj, getModel, circleModule, item;

      outModelObj = this.matchModel(this.iterator.motion);

      getModel = outModelObj.isBool ? outModelObj.is: !1;

      // 如果不存在类型 返回false
      try {
        if (!getModel) {
          console.log("You cannot call with the correct model type.");
          return false;
        }
      } catch(err) {
        throw err
      }

      // 根据指定圆形的动画模型获得位移数据
      circleModule = _createCircle(_a, _b, getModel);

      var item = circleModule[getModel];

      this.iterator.dynamic.group = item;
      // especially of base property
    },
    matchModel: function(options) {
      // 匹配模型的类型
      var saveMoveMedel = this.moveModel;
      var isMatch = 0;
      for (var s = 0,
      m = saveMoveMedel.length; s < m; s++) {
        if (options === saveMoveMedel[s]) isMatch++;
        if (isMatch) break;
        else continue;
      }
      return {
        is: options,
        isBool: isMatch
      }
    },
    Excute2DEngine: function() {
      // accept ctx 2d property.
      var d2 = arguments[0],
      isConfig = arguments[1],
      auto = arguments[2],
      domain = this.collection[0]['characteristic'];

      if (isConfig) {
        domain.type = isConfig['type'];

        // 获得整数的数组配置 this.collection[0]['characteristic'].property = [0:{},1:{}...]
        var originalProperty = domain.property;

        for (var j = 0,
        getParams = isConfig['property']; j < getParams.length; j++) {
          Object.assign(domain.property[j], getParams[j]);
        }
      }

      // 可执行 true 循环运动
      // start config info
      // open the ani of return true
      this.o_OPEN = auto.open;
      if (this.o_OPEN) this.s_SPEED = auto.speed;

      Object.assign(this.collection[0]['characteristic'], domain);
      this.data.push(d2);
      this.draw(this.data[0])
    }
  });
  /*
    重新写入配置信息
    通过 return set : { restore config info }
  */
  q[0].defineProperties(o[1][299].prototype, {});

  s3.tween._circleShape = o[1][299];
})();


// line shape
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];
  
  
  q[1][298].prototype.constructor = o[1][298];
  o[1][298] = q[1][298];
  q[0].assign(o[1][298].prototype, {
    initialize: function() {
      return this,
      o[1][298].call(this, arguments),
      o[1][298].prototype
    },
    draw: function(options) {
      var getCollectionProperty = this.particularProperty();

      // 获得默认的属性和参数
      var shapeProperty = new o[1][300];

      var ctx2M = new s3.node._context(this.data[0]);

      var acceptCollection, _thing;
      if (getCollectionProperty.type === 'Array') acceptCollection = getCollectionProperty.property;
      for (var j = 0; j < acceptCollection.length; j++) {
        _thing = acceptCollection[j];

        // 获取所有传入的属性 之后check检查
        _thing.x = _thing.x || shapeProperty.x;
        _thing.y = _thing.y || shapeProperty.y;
        _thing.index = _thing.index || shapeProperty.index;
        _thing.x1 = _thing.x1 || shapeProperty.x1;
        _thing.y1 = _thing.y1 || shapeProperty.y1;

        Object.assign(this.iterator, _thing);

        ctx2M.hook2D('strokeStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('beginPath');
        ctx2M.hook2D('moveTo', {
          x: this.iterator.x,
          y: this.iterator.y
        });
        ctx2M.hook2D('lineTo', {
          x: this.iterator.x1,
          y: this.iterator.y1
        });
        ctx2M.hook2D('stroke');
      }
    },
    particularProperty: function(options) {
      return this.collection[0].characteristic;
    },
    Excute2DEngine: function() {
      // accept ctx 2d property.
      var d2 = arguments[0],
      isConfig = arguments[1],
      domain = this.collection[0]['characteristic'];

      if (isConfig) {
        domain.type = isConfig['type'];

        // 获得整数的数组配置 this.collection[0]['characteristic'].property = [0:{},1:{}...]
        var originalProperty = domain.property;

        for (var j = 0,
        getParams = isConfig['property']; j < getParams.length; j++) {
          Object.assign(domain.property[j], getParams[j]);
        }
      }

      Object.assign(this.collection[0]['characteristic'], domain);
      this.data.push(d2);
      this.draw(this.data[0])
    }
  });
  q[0].defineProperties(o[1][298].prototype, {});

  s3.tween._lineShape = o[1][298];
})();


// arc shape
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];
  
  q[1][297].prototype.constructor = o[1][297];
  o[1][297] = q[1][297];
  q[0].assign(o[1][297].prototype, {
    initialize: function() {
      return this,
      o[1][293].call(this, arguments),
      o[1][293].prototype
    },
    draw: function(options) {
      var getCollectionProperty = this.particularProperty();

      // 获得默认的属性和参数
      var shapeProperty = new o[1][300];

      var ctx2M = new s3.node._context(this.data[0]);

      var acceptCollection, _thing;
      if (getCollectionProperty.type === 'Array') acceptCollection = getCollectionProperty.property;
      for (var j = 0; j < acceptCollection.length; j++) {
        _thing = acceptCollection[j];

        _thing.radius = _thing.radius || shapeProperty.radius;
        _thing.x = _thing.x || shapeProperty.x;
        _thing.y = _thing.y || shapeProperty.y;
        _thing.index = _thing.index || shapeProperty.index;
        _thing.startAngles = _thing.startAngles || shapeProperty.startAngles;
        _thing.stopAngles = _thing.stopAngles || shapeProperty.stopAngles;

        Object.assign(this.iterator, _thing);

        ctx2M.hook2D('strokeStyle', {
          index: this.iterator.borderColor
        });
        ctx2M.hook2D('beginPath');
        ctx2M.hook2D('arc', {
          x: this.iterator.x,
          y: this.iterator.y,
          radius: this.iterator.radius,
          startAngles: this.iterator.startAngles,
          stopAngles: this.iterator.stopAngles,
          bool: false
        });
        ctx2M.hook2D('stroke');
      }
    },
    particularProperty: function(options) {
      return this.collection[0].characteristic;
    },
    Excute2DEngine: function() {
      // accept ctx 2d property.
      var d2 = arguments[0],
      isConfig = arguments[1],
      domain = this.collection[0]['characteristic'];

      if (isConfig) {
        domain.type = isConfig['type'];

        // 获得整数的数组配置 this.collection[0]['characteristic'].property = [0:{},1:{}...]
        var originalProperty = domain.property;

        for (var j = 0,
        getParams = isConfig['property']; j < getParams.length; j++) {
          Object.assign(domain.property[j], getParams[j]);
        }
      }

      Object.assign(this.collection[0]['characteristic'], domain);
      this.data.push(d2);
      this.draw(this.data[0])
    }
  });
  q[0].defineProperties(o[1][297].prototype, {});

  s3.tween._arcShape = o[1][297];
})();


// rect shape
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];
  
  q[1][296].prototype.constructor = o[1][296];
  o[1][296] = q[1][296];
  q[0].assign(o[1][296].prototype, {
    initialize: function() {
      return this,
      o[1][293].call(this, arguments),
      o[1][293].prototype
    },
    draw: function(options) {
      var getCollectionProperty = this.particularProperty();

      // 获得默认的属性和参数
      var shapeProperty = new o[1][300];

      var ctx2M = new s3.node._context(this.data[0]);

      var acceptCollection, _thing;
      if (getCollectionProperty.type === 'Array') acceptCollection = getCollectionProperty.property;

      for (var j = 0; j < acceptCollection.length; j++) {
        _thing = acceptCollection[j];

        // 获取所有传入的属性 之后check检查
        _thing.x = _thing.x || shapeProperty.x;
        _thing.y = _thing.y || shapeProperty.y;
        _thing.index = _thing.index || shapeProperty.index;
        _thing.thick = _thing.thick || shapeProperty.tick;
        _thing.borderColor = _thing.borderColor || shapeProperty.borderColor;
        _thing.x1 = _thing.x1 || shapeProperty.x1;
        _thing.y1 = _thing.y1 || shapeProperty.y1;

        Object.assign(this.iterator, _thing);

        ctx2M.hook2D('strokeStyle', {
          index: this.iterator.borderColor
        });
        ctx2M.hook2D('fillStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('beginPath');
        ctx2M.hook2D('lineWidth', {
          thick: this.iterator.thick
        }); //设定图形边框的样式
        ctx2M.hook2D('fillRect', {
          x: this.iterator.x,
          y: this.iterator.y,
          x1: this.iterator.x1,
          y1: this.iterator.y1
        });
        ctx2M.hook2D('strokeRect', {
          x: this.iterator.x,
          y: this.iterator.y,
          x1: this.iterator.x1,
          y1: this.iterator.y1
        });
        ctx2M.hook2D('stroke');
      }
    },
    particularProperty: function(options) {
      return this.collection[0].characteristic;
    },
    Excute2DEngine: function() {
      // accept ctx 2d property.
      var d2 = arguments[0],
      isConfig = arguments[1],
      domain = this.collection[0]['characteristic'];

      if (isConfig) {
        domain.type = isConfig['type'];

        // 获得整数的数组配置 this.collection[0]['characteristic'].property = [0:{},1:{}...]
        var originalProperty = domain.property;

        for (var j = 0,
        getParams = isConfig['property']; j < getParams.length; j++) {
          Object.assign(domain.property[j], getParams[j]);
        }
      }

      Object.assign(this.collection[0]['characteristic'], domain);
      this.data.push(d2);
      this.draw(this.data[0])
    }
  });
  q[0].defineProperties(o[1][296].prototype, {});

  s3.tween._rectShape = o[1][296];
})();


// sectors shape
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];
  
  // wave shape
  q[1][295].prototype.constructor = o[1][295];
  o[1][295] = q[1][295];
  q[0].assign(o[1][295].prototype, {
    initialize: function() {
      return this,
      o[1][295].call(this, arguments),
      o[1][295].prototype
    },
    draw: function(options) {
      var getCollectionProperty = this.particularProperty();

      // 获得默认的属性和参数
      // Algorithm
      // SPEED_3
      var shapeProperty = new o[1][300];
      var _createWave = shapeProperty.calculationProperty.createWave;

      this.iterator.dynamic = {};

      var ctx2M = new s3.node._context(this.data[0]);

      var acceptCollection, _thing;
      // the params in the early 
      if (getCollectionProperty.type === 'Array') acceptCollection = getCollectionProperty.property;

      // if loop.
      if (this.o_OPEN) {
        shapeProperty.speed -= this.s_SPEED;
        ctx2M.hook2D('fillStyle', {
          index: "rgb(255,255,255)"
        });
        ctx2M.hook2D('fillRect', {
          x: '0',
          y: '0',
          x1: this.data[0].canvas.width,
          y1: this.data[0].canvas.height
        });
      }

      for (var j = 0; j < acceptCollection.length; j++) {

        _thing = acceptCollection[j];

        // 获取所有传入的属性 之后check检查
        _thing.x = _thing.x || shapeProperty.x;
        _thing.y = _thing.y || shapeProperty.y;
        _thing.rate = _thing.rate || shapeProperty.rate;
        _thing.index = _thing.index || shapeProperty.index;
        _thing.speed = _thing.speed - this.s_SPEED || shapeProperty.speed - this.s_SPEED;
        _thing.slope = _thing.slope || shapeProperty.slope;
        _thing.opposite = _thing.opposite || shapeProperty.opposite;
        _thing.hertz = _thing.hertz || shapeProperty.hertz;
        _thing.readyPosition = _thing.readyPosition || shapeProperty.readyPosition;
        _thing.beginPosition = _thing.beginPosition || shapeProperty.beginPosition;
        _thing.endPosition = _thing.endPosition || shapeProperty.endPosition;

        Object.assign(this.iterator, _thing);

        ctx2M.hook2D('beginPath');
        this.start(_createWave, ctx2M);
        ctx2M.hook2D('fillStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('strokeStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('stroke');
      }
    },
    // example color array and pos
    particularProperty: function(options) {
      return this.collection[0].characteristic;
    },
    // 准备x位置 readyPosition = i
    // 起始x位置 beginPosition = i
    // 结束x位置 endPosition = len
    // 水平运动长度 len = 10
    start: function(options, ctx2M) {
      var beginDistance_x = this.iterator.beginPosition.x;
      var endDistance_x = this.iterator.endPosition.x;

      // loop all坐标的连线
      // 传入参数进行计算pos 位移的动态x y位置
      this.getDynamicData(options, beginDistance_x, endDistance_x, this.iterator.x, this.iterator.y, this.iterator.hertz, this.iterator.rate, this.iterator.speed, this.iterator.opposite, this.iterator.slope);

      for (var d = this.iterator.dynamic.group,
      k = d.length,
      i = 0; i < k; i++) {
        var x = d[i][0],
        y = d[i][1];
        ctx2M.hook2D('lineTo', {
          x: x,
          y: y
        });
      }
    },
    // 获得动态属性
    getDynamicData: function(_createWave, _a, _b, _c, _d, _e, _f, _g, _l, _m) {
      var collection = {};
      var waveModule = _createWave(_a, _b, _c, _d, _e, _f, _g, _l, _m);

      // 默认获得一个向右的运动轨迹
      var item = waveModule['left'];
      // var item = waveModule['right'];
      // var item = waveModule['top'];
      // var item = waveModule['bottom'];

      this.iterator.dynamic.group = item; // especially of base property
    },
    Excute2DEngine: function() {
      // accept ctx 2d property.
      var d2 = arguments[0],
      isConfig = arguments[1],
      auto = arguments[2],
      domain = this.collection[0]['characteristic'];

      if (isConfig) {
        domain.type = isConfig['type'];

        // 获得整数的数组配置 this.collection[0]['characteristic'].property = [0:{},1:{}...]
        var originalProperty = domain.property;

        for (var j = 0,
        getParams = isConfig['property']; j < getParams.length; j++) {
          Object.assign(domain.property[j], getParams[j]);
        }
      }
      // 可执行 true 循环运动
      // start config info
      // open the ani of return true
      this.o_OPEN = auto.open;
      if (this.o_OPEN) this.s_SPEED = auto.speed;

      Object.assign(this.collection[0]['characteristic'], domain);
      this.data.push(d2);
      this.draw(this.data[0])
    }
  });
  q[0].defineProperties(o[1][295].prototype, {});

  s3.tween._waveShape = o[1][295];
})();


// sectors shape
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];
  
  q[1][294].prototype.constructor = o[1][294];
  o[1][294] = q[1][294];
  q[0].assign(o[1][294].prototype, {
    initialize: function() {
      return this,
      o[1][293].call(this, arguments),
      o[1][293].prototype
    },
    draw: function(options) {

      var getCollectionProperty = this.particularProperty();

      // 获得默认的属性和参数
      var shapeProperty = new o[1][300];

      var ctx2M = new s3.node._context(this.data[0]);

      var acceptCollection, _thing;
      if (getCollectionProperty.type === 'Array') acceptCollection = getCollectionProperty.property;

      for (var j = 0; j < acceptCollection.length; j++) {

        _thing = acceptCollection[j];

        // 获取所有传入的属性 之后check检查
        _thing.radius = _thing.radius || shapeProperty.radius;
        _thing.x = _thing.x || shapeProperty.x;
        _thing.y = _thing.y || shapeProperty.y;
        _thing.x1 = _thing.x1 || shapeProperty.x1;
        _thing.y1 = _thing.y1 || shapeProperty.y1;
        _thing.index = _thing.index || shapeProperty.index;
        _thing.startAngles = _thing.startAngles || shapeProperty.startAngles;
        _thing.stopAngles = _thing.stopAngles || shapeProperty.stopAngles;

        Object.assign(this.iterator, _thing);

        ctx2M.hook2D('beginPath');
        ctx2M.hook2D('moveTo', {
          x: this.iterator.x1,
          y: this.iterator.y1
        });
        ctx2M.hook2D('arc', {
          x: this.iterator.x,
          y: this.iterator.y,
          radius: this.iterator.radius,
          startAngles: this.iterator.startAngles,
          stopAngles: this.iterator.stopAngles,
          bool: false
        });
        ctx2M.hook2D('fillStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('strokeStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('fill');
        ctx2M.hook2D('lineTo', {
          x: this.iterator.x1,
          y: this.iterator.y1
        });
        ctx2M.hook2D('closePath');
        ctx2M.hook2D('stroke');
      }
    },
    particularProperty: function(options) {
      return this.collection[0].characteristic;
    },
    Excute2DEngine: function() {
      // accept ctx 2d property.
      var d2 = arguments[0],
      isConfig = arguments[1],
      domain = this.collection[0]['characteristic'];

      if (isConfig) {
        domain.type = isConfig['type'];

        // 获得整数的数组配置 this.collection[0]['characteristic'].property = [0:{},1:{}...]
        var originalProperty = domain.property;

        for (var j = 0,
        getParams = isConfig['property']; j < getParams.length; j++) {
          Object.assign(domain.property[j], getParams[j]);
        }
      }

      Object.assign(this.collection[0]['characteristic'], domain);
      this.data.push(d2);
      this.draw(this.data[0])
    }
  });
  q[0].defineProperties(o[1][294].prototype, {});

  s3.tween._sectorsShape = o[1][294];
})();


// hat shape
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];
  
  q[1][293].prototype.constructor = o[1][293];
  o[1][293] = q[1][293];
  q[0].assign(o[1][293].prototype, {
    initialize: function() {
      return this,
      o[1][293].call(this, arguments),
      o[1][293].prototype
    },
    draw: function(options) {

      var getCollectionProperty = this.particularProperty();

      // 获得默认的属性和参数
      var shapeProperty = new o[1][300];

      var ctx2M = new s3.node._context(this.data[0]);

      var acceptCollection, _thing;
      if (getCollectionProperty.type === 'Array') acceptCollection = getCollectionProperty.property;

      for (var j = 0; j < acceptCollection.length; j++) {

        _thing = acceptCollection[j];

        // 获取所有传入的属性 之后check检查是否存在数据
        _thing.radius = _thing.radius || shapeProperty.radius;
        _thing.x = _thing.x || shapeProperty.x;
        _thing.y = _thing.y || shapeProperty.y;
        _thing.x1 = _thing.x1 || shapeProperty.x1;
        _thing.y1 = _thing.y1 || shapeProperty.y1;
        _thing.index = _thing.index || shapeProperty.index;
        _thing.startAngles = _thing.startAngles || shapeProperty.startAngles;
        _thing.stopAngles = _thing.stopAngles || shapeProperty.stopAngles;

        Object.assign(this.iterator, _thing);

        ctx2M.hook2D('moveTo', {
          x: this.iterator.x,
          y: this.iterator.y
        });
        ctx2M.hook2D('beginPath');
        ctx2M.hook2D('arc', {
          x: this.iterator.x,
          y: this.iterator.y,
          radius: this.iterator.radius,
          startAngles: this.iterator.startAngles,
          stopAngles: this.iterator.stopAngles,
          bool: false
        });
        ctx2M.hook2D('fillStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('strokeStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('fill');
        ctx2M.hook2D('lineTo', {
          x: this.iterator.x,
          y: this.iterator.y
        });
        ctx2M.hook2D('lineTo', {
          x: this.iterator.x1,
          y: this.iterator.y1
        });
        ctx2M.hook2D('closePath');
        ctx2M.hook2D('stroke');
      }
    },
    particularProperty: function(options) {
      return this.collection[0].characteristic;
    },
    Excute2DEngine: function() {
      // accept ctx 2d property.
      var d2 = arguments[0],
      isConfig = arguments[1],
      domain = this.collection[0]['characteristic'];

      if (isConfig) {
        domain.type = isConfig['type'];

        // 获得整数的数组配置 this.collection[0]['characteristic'].property = [0:{},1:{}...]
        var originalProperty = domain.property;

        for (var j = 0,
        getParams = isConfig['property']; j < getParams.length; j++) {
          Object.assign(domain.property[j], getParams[j]);
        }
      }

      Object.assign(this.collection[0]['characteristic'], domain);
      this.data.push(d2);
      this.draw(this.data[0])
    }
  });
  q[0].defineProperties(o[1][293].prototype, {});

  s3.tween._hatShape = o[1][293];
})();


/*
- hill shape
- 方向使用指针Arrow函数获取
*/
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];
  
  q[1][292].prototype.constructor = o[1][292];
  o[1][292] = q[1][292];
  q[0].assign(o[1][292].prototype, {
    initialize: function() {
      return this,
      o[1][292].call(this, arguments),
      o[1][292].prototype
    },
    draw: function(options) {
      var getCollectionProperty = this.particularProperty(true);
      // 获得默认的属性和参数
      var shapeProperty = new o[1][300];
      var _createHill = shapeProperty.calculationProperty.createHill;

      // if loop.
      if (this.o_OPEN) {
        this.data[0].fillStyle = "rgb(255,255,255)";
        this.data[0].fillRect(0, 0, this.data[0].canvas.width, this.data[0].canvas.height);
      }

      this.iterator.static = {};

      var ctx2M = new s3.node._context(this.data[0]);

      var acceptCollection, _thing;
      if (getCollectionProperty.type === 'Array') acceptCollection = getCollectionProperty.property;
      for (var j = 0; j < acceptCollection.length; j++) {
        // 获取所有传入的属性 之后check检查
        _thing = acceptCollection[j];
        _thing.x = _thing.x || shapeProperty.x;
        _thing.y = _thing.y || shapeProperty.y;
        _thing.index = _thing.index || shapeProperty.index;
        _thing.speed = _thing.speed || shapeProperty.speed;
        _thing.trails = _thing.trails || shapeProperty.trails;
        _thing.startAngles = _thing.startAngles || shapeProperty.startAngles;
        _thing.stopAngles = _thing.stopAngles * 4 || shapeProperty.stopAngles * 4;
        _thing.direction = _thing.direction || shapeProperty.direction;
        _thing.smooth = _thing.smooth || shapeProperty.smooth;
        _thing.radius = this.radius;

        Object.assign(this.iterator, _thing);

        ctx2M.hook2D('moveTo', {
          x: this.iterator.x,
          y: this.iterator.y
        });
        ctx2M.hook2D('beginPath');
        this.silence(_createHill, ctx2M);
        ctx2M.hook2D('closePath');
        ctx2M.hook2D('fillStyle', {
          index: this.iterator.index
        });
        ctx2M.hook2D('fill');
      }
    },
    // example color array and pos
    particularProperty: function(options) {
      if (options) return this.collection[0].characteristic;
    },
    // 获得静态属性
    silence: function(options, ctx2M) {
      var radius = this.iterator.radius,
      startAngles = this.iterator.startAngles,
      stopAngles = this.iterator.stopAngles;

      this.getArrowData(options, this.iterator.x, this.iterator.y);

      for (var d = this.iterator.static.group,
      k = d.length,
      i = 0; i < k; i++) {
        var x = d[i][0] * this.iterator.trails + this.iterator.x,
        y = d[i][1] * this.iterator.trails + this.iterator.y;
        ctx2M.hook2D('arc', {
          x: x,
          y: y,
          radius: radius,
          startAngles: startAngles,
          stopAngles: stopAngles
        });
      }
    },
    // 获得static属性 即获得指针数据
    // 因静态数据是根据指针变化
    getArrowData: function(_createHill, _a, _b) {
      var outModelObj, getModel, hillModule, item;

      outModelObj = this.matchModel(this.iterator.direction);

      getModel = outModelObj.isBool ? outModelObj.is: !1;

      // 如果不存在类型 返回false
      try {
        if (!getModel) {
          console.log("You cannot call with the correct model type.");
          return false;
        }
      } catch(err) {
        throw err
      }

      // 根据指定hill山的动画模型获得位移数据
      hillModule = _createHill(_a, _b, this.iterator.smooth);

      item = hillModule[getModel];

      this.iterator.static.group = item;
      // especially of base property
    },
    matchModel: function(options) {
      // 匹配模型的类型
      var save_direction = this._direction;
      var isMatch = 0;
      for (var s = 0,
      m = save_direction.length; s < m; s++) {
        if (options === save_direction[s]) isMatch++;
        if (isMatch) break;
        else continue;
      }
      return {
        is: options,
        isBool: isMatch
      }
    },
    Excute2DEngine: function() {
      // accept ctx 2d property.
      var d2 = arguments[0],
      isConfig = arguments[1],
      auto = arguments[2],
      domain = this.collection[0]['characteristic'];

      if (isConfig) {
        domain.type = isConfig['type'];

        // 获得整数的数组配置 this.collection[0]['characteristic'].property = [0:{},1:{}...]
        var originalProperty = domain.property;

        for (var j = 0,
        getParams = isConfig['property']; j < getParams.length; j++) {
          Object.assign(domain.property[j], getParams[j]);
        }
      }

      // 可执行 true 循环运动
      // start config info
      // open the ani of return true
      if (auto.open) this.o_OPEN = auto.open;

      Object.assign(this.collection[0]['characteristic'], domain);
      this.data.push(d2);
      this.draw(this.data[0])
    }
  });
  /*
    重新写入配置信息
    通过 return set : { restore config info }
  */
  q[0].defineProperties(o[1][292].prototype, {});

  s3.tween._hillShape = o[1][292];
})();

/*
* math method
*/
(function (){
var q = s3.init;
var o = s3.category;
var _is = 0;
q[0] = o[0];

q[1][219].prototype.constructor = o[1][219];
o[1][219] = q[1][219];
q[0].assign(o[1][219].prototype, {
  initialize: function() {
    return this,
    o[1][219].call(this, arguments),
    o[1][219].prototype
  },
  /*
    used recursion and power
  */
  validateRecursionPower : function (_bottom, _power, _symmetric){
    return Math.pow(this.validatePower(_bottom,_power),_symmetric)
  },
  validatePower : function (_bottom, _power, _symmetric){
    return Math.pow(_bottom,_power)
  },
  /*
    the space number is avariable params
    from i to infinition
    hertz will appear many times
  */
  validateHalfCycle : function (_frame, _hertz){
    return Math.PI / 180
  },
  /*
    finally we can get cycle of foreach frames
  */
  validateHalfCycleEachFrames : function (_frame, _hertz){
    var spaceEverySecPathFrame = _frame || !0;
    var manyCounts = _hertz || !0;
    return Math.PI / 180 * spaceEverySecPathFrame * manyCounts
  },
  /*
    set frames rate by per sec
  */
  setFramesRate : function (_frame, _times){
    this.framesRate.push( _frame/_times )
  },
  /*
    get frames rate by per sec
  */
  getFramesRate : function (_frame, _times){
    return this.framesRate.pop()
  },
  /*
    return absolute value
  */
  setAbsoluteValue : function (m_val, n_val){
    var val = Math.abs(m_val - n_val);
    this.ABS.unshift(val)
  },
  getAbsoluteValue : function (){
    return this.ABS.pop()
  },
  /*
    main geometry position
  */
  geometryCoordinatCosRadius : function (angles){
    return Math.cos(angles)
  },
  /*
    main geometry position
  */
  geometryCoordinatSinRadius : function (angles){
    return Math.sin(angles)
  },
});

s3.node._math = o[1][219];
})();


(function (){

  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];

  var math = new s3.node._math();
  var distance = new s3.node._distance();

  q[1][300].prototype.constructor = o[1][300];
  o[1][300] = q[1][300];
  q[0].assign(o[1][300].prototype, {
    initialize: function(argument) {},
  });
  q[0].defineProperties(o[1][300].prototype, {});

  /*
    sx =  beginDistance_x
    ex = endDistance_x
    a = x
    b = y
    c = hertz
    d = rate
    e = speed
    g = opposite
    l = slope
  */
  q[1][240].prototype.constructor = o[1][240];
  o[1][240] = q[1][240];
  o[1][240].createWave = function(sx, ex, a, b, c, d, e, g, l) {
    var times = (new Date).getTime() / 60;
    var line_modelType_chain = new o[1][240]();
    // var chain_bottom = line_modelType_chain.location_dynamic_bottom(sx, ex, a, b, c, d, e, g, l, times);
    var chain_left = line_modelType_chain.location_dynamic_left(sx, ex, a, b, c, d, e, g, l, times);
    // var chain_right = line_modelType_chain.location_dynamic_right(sx, ex, a, b, c, d, e, g, l, times);
    // var chain_top = line_modelType_chain.location_dynamic_top(sx, ex, a, b, c, d, e, g, l, times);

    return {
      // 'bottom': chain_bottom.results,
      // 'right': chain_right.results,
      'left':chain_left.results,
      // 'top':chain_top.results
    }
  }
  q[0].assign(o[1][240].prototype, {
    initialize: function() {
      return this,
      o[1][240].call(this, arguments),
      o[1][240].prototype
    },
    validateQuery : function (min,max){
      var x, y, h, k, o, p, r, s, q, m, n, hx4, hy4;

      for (var i = min; i < max; i++) {
        math.setAbsoluteValue(f,a);
        math.setAbsoluteValue(f,b);

        // 1/4 of the width and height
        hx4 = math.getAbsoluteValue();
        hy4 = math.getAbsoluteValue();

        q = math.validateRecursionPower(l, hy4, hx4);

        var hfc = math.validateHalfCycle(q, c);

        r = math.geometryCoordinatCosRadius(p + e);

        var speed = distance.getSpeed(g);

        y = b + o * r * speed;
      }

    },
    location_dynamic_left: function(sx, ex, a, b, c, d, e, g, l, times) {
      var x, y, h, k, o, p, r, s, q, m, n, hx4, hy4;

      var t = [];
      // 循环每一个位移
      for (var i = sx; i < ex; i++) {
        // default position
        // default position
        f = i;

        // 1/4 of the width and height
        hx4 = Math.abs(f - a);
        hy4 = Math.abs(f - b);

        n = Math.pow(l, hy4);
        m = hx4;

        q = Math.pow(n, m);
        o = q * b / d; // the rate on the pos.y = height
        p = (Math.PI / 180) * f * c;
        s = e;

        r = Math.cos(p +s);

        y = b + o * r * g;

        // 指定x轴的坐标
        x = f;

        // 把每一个点的坐标 都保存到一个数组里
        t.push([x, y]);
      }

      return {
        results: t
      }
    },
    location_dynamic_right: function(sx, ex, a, b, c, d, e, g, l, times) {
      var x, y, h, k, o, p, r, s, q, m, n, hx4, hy4;

      var t = [];
      // 循环每一个位移
      // alert(ex)
      for (var i = 0; i < ex; i++) {
        // default position
        f = i;

        // 1/4 of the width and height
        hx4 = Math.abs(f - a);
        hy4 = Math.abs(f - b);

        n = Math.pow(l, hx4);
        m = hx4;

        q = Math.pow(n, m);
        o = q * b / d; // the rate on the pos.y = height
        p = -Math.PI / 180 * f * c;
        s = e;

        r = -Math.sin(p + s);

        y = b + o * r * g;

        // 指定x轴的坐标
        x = f;

        // 把每一个点的坐标 都保存到一个数组里
        t.push([x, y]);
      }

      return {
        results: t
      }
    },
    location_dynamic_bottom: function(sx, ex, a, b, c, d, e, g, l, times) {
      var x, y, h, k, o, p, r, s, q, m, n, hx4, hy4;

      var t = [];
      // 循环每一个位移
      for (var i = sx; i < ex; i++) {
        // default position
        f = i;

        // 1/4 of the width and height
        hx4 = Math.abs(f - a);
        hy4 = Math.abs(f - b);

        n = Math.pow(l, hy4);
        m = hx4;

        q = Math.pow(n, m);
        o = q * b / d; // the rate on the pos.y = height
        p = Math.PI / 180 * f * c;
        s = e;

        r = Math.cos(p + s);

        y = -i+b + o * r * g;

        // 指定x轴的坐标
        x = ex/2 +o * r;

        // 把每一个点的坐标 都保存到一个数组里
        t.push([x, y]);
      }

      return {
        results: t
      }
    },
    location_ynamic_top: function(sx, ex, a, b, c, d, e, g, l, times) {
      var x, y, h, k, o, p, r, s, q, m, n, hx4, hy4;

      var t = [];
      // 循环每一个位移
      for (var i = sx; i < ex; i++) {
        // default position
        f = i;

        // 1/4 of the width and height
        hx4 = Math.abs(f - a);
        hy4 = Math.abs(f - b);

        n = Math.pow(l, hy4);
        m = hx4;

        q = Math.pow(n, m);
        o = q * b / d; // the rate on the pos.y = height
        p = -Math.PI / 180 * f * c;
        s = e;

        r = Math.cos(p + s);

        y = -i+b + o * r * g;

        // 指定x轴的坐标
        x = ex/2 +o * r;

        // 把每一个点的坐标 都保存到一个数组里
        t.push([x, y]);
      }

      return {
        results: t
      }
    },
  });

  /*
  x,y,
  aa = x
  bb = y
  */
  q[1][239].prototype.constructor = o[1][239];
  o[1][239] = q[1][239];
  o[1][239].createCircle = function(aa, bb) {
    var chain_round, chain_auto, chain_top, chain_left, chain_right, chain_bottom, chain_random, times, circle_modelType_chain;

    times = (new Date).getTime() / 60;
    circle_modelType_chain = new o[1][239];

    chain_round = circle_modelType_chain._location_round(aa, bb, times);

    return {
      'round': chain_round.results,
    }
  }
  q[0].assign(o[1][239].prototype, {
    initialize: function() {
      return this,
      o[1][239].call(this, arguments),
      o[1][239].prototype
    },
    _location_round: function(aa, bb, times) {
      var a, b, c, d, e, x, y, xx, yy, r, m, n;
      var geths;

      a = times / 88;
      yy = bb;
      xx = yy * Math.sin(Math.PI / 3);

      for (d = 0; d < 1; d++) {
        r = Math.PI * 2 / 3 * d;
        m = Math.cos(r);
        n = Math.sin(r);
        for (b = 0; b < 1; b++) {
          c = 1;
          if (b % 2 == 1) c = 1 / 2;
          x = (b * m) * xx + times * 2;
          y = yy + (a + c) * n;
          geths = this._destroy(x, y, xx, yy, times);
        }
      }

      return geths
    },
    _destroy: function(x, y, xx, yy, times) {
      var a, b, c, d, e, z, f1, f2, f3, f4, x0, y0, g, g1, g2, m1, m2, rx, ry, r1, r2;
      g = g2 = [];
      g1 = [];
      f1 = [x, y];
      f2 = [x + xx / 2, y + yy / 4];
      f3 = [x, y + yy / 2];
      f4 = [x - xx / 2, y + yy / 4];
      g = [f1, f2, f3, f4];

      len = 4;
      for (a = 0; a < 4; a++) {
        c = g[a];
        d = g[(a + 1) % 4];
        for (b = 0; b < len; b++) {
          r1 = b / len;
          r2 = 1 - r1;
          x0 = c[0] * r2 + d[0] * r1;
          y0 = c[1] * r2 + d[1] * r1;
          g1.push([x0, y0]);
        }
      }

      for (g = g1, a = 0; a < g.length; a++) {
        x0 = g[a][0];
        y0 = g[a][1];
        rx = (x0 / xx / 20) * Math.PI * 2;
        ry = (y0 / yy / 20) * Math.PI * 2 + times / 24;

        m1 = Math.cos(rx);
        m2 = Math.sin(rx);

        z = Math.cos(ry) / 2 + 1;
        y = Math.sin(ry) / 2;

        x = z * m2;
        y = z * x;

        z = z * m1;
        g2.push([x, y, z]);
      }

      return {
        results: g2
      };
    }
  });

  /*
  x,y,
  aa = x
  bb = y
  - 如果是半个周期的
  - 模型是static形式的位置
  - draw调用的输出的results还是和动态的写法类似
  - 和动态的唯一不同点
  - 一静态是location_后面的参数名称不一样
  - 二动态的需要start方法调用改变的运动motion类型type
  */
  q[1][232].prototype.constructor = o[1][232];
  o[1][232] = q[1][232];
  o[1][232].createHill = function(aa, bb, _smooth) {
    var chain_auto, chain_top, chain_left, chain_right, chain_bottom, times, hill_modelType_chain;

    times = (new Date).getTime() / 60;
    hill_modelType_chain = new o[1][232]();

    chain_top = hill_modelType_chain._location_staticn_top(aa, bb, _smooth);
    chain_left = hill_modelType_chain._location_static_left(aa, bb, _smooth);
    chain_right = hill_modelType_chain._location_static_right(aa, bb, _smooth);
    chain_bottom = hill_modelType_chain._location_static_bottom(aa, bb, _smooth);

    return {
      'top': chain_top.results,
      'left': chain_left.results,
      'right': chain_right.results,
      'bottom': chain_bottom.results,
    }
  }
  q[0].assign(o[1][232].prototype, {
    initialize: function() {
      return this,
      o[1][232].call(this, arguments),
      o[1][232].prototype
    },
    /*
    取整的函数方法
    */
    takeInteger: function(min, max) {
      var pointNums, smoothness, o, m, n;
      o = 1;
      m = max;
      n = min;
      pointNums = Math.abs(m) + o;
      smoothness = Math.floor((m) + (n - o)); ((smoothness >= m) ? (pointNums = smoothness % m) ? (pointNums >= (m - min)) ? (pointNums = smoothness) : (pointNums = m) : (pointNums = smoothness) : (pointNums = smoothness));

      return pointNums
    },
    /*
    - 总共的点为pointNums 
    - 每一个点的度数为angleNums
    - 角度的90度为1 
    - 所以pointNums一半的数乘以度数要为90
    - 也就是说p/2的点乘多少度的数等于90(且排除2与4的点) 
    - 由最大的点数为180 最小的点数为6
    - 弧度边小 那么点就会多一点 意味着平滑一点
    - 弧度越大 点的数量少 越陡峭
    */
    _location_staticn_top: function(aa, bb, point) {
      // 使用平滑度计算坡平面的光滑程度(平滑度从0开始结束为180)
      // 假设平滑度等于点数的数量
      var getSmoothness, angles, points, two, midPointerHalf;

      getSmoothness = this.takeInteger(6, point);
      points = getSmoothness;
      two = 2;
      midPointerHalf = points / two; // 取中间的点
      angles = 90 / midPointerHalf; // 获得一个点的度数
      for (var radian, radianValues, x, y, a = [], i = 0; i < points; i++) {
        radian = i * angles * Math.PI / 180;

        radianValues = Math.cos(radian);

        // 根据纵坐标的位移实现几何图形 余弦
        y = Math.pow(radianValues * two, two);
        x = i;
        a.push([x, y]);
      }

      return {
        results: a
      }
    },
    _location_static_left: function(aa, bb, point) {
      var getSmoothness, angles, points, two, midPointerHalf;

      getSmoothness = this.takeInteger(6, point);
      points = getSmoothness;
      two = 2;
      midPointerHalf = points / two; // 取中间的点
      angles = 90 / midPointerHalf; // 获得一个点的度数
      for (var radian, radianValues, x, y, a = [], i = 0; i < points; i++) {
        radian = i * angles * Math.PI / 180;
        radianValues = Math.cos(radian);

        // 根据纵坐标的位移实现几何图形 余弦
        x = Math.pow(radianValues * two, two);
        y = i;
        a.push([x, y]);
      }

      return {
        results: a
      }
    },
    _location_static_right: function(aa, bb, point) {
      var getSmoothness, angles, points, two, midPointerHalf;

      getSmoothness = this.takeInteger(6, point);
      points = getSmoothness;
      two = 2;
      midPointerHalf = points / two; // 取中间的点
      angles = 90 / midPointerHalf; // 获得一个点的度数
      for (var radian, radianValues, x, y, a = [], i = 0; i < points; i++) {
        radian = i * angles * Math.PI / 180;
        radianValues = Math.sin(radian);

        // 根据纵坐标的位移实现几何图形 余弦
        x = Math.pow(radianValues * two, two);
        y = i;
        a.push([x, y]);
      }

      return {
        results: a
      }
    },
    _location_static_bottom: function(aa, bb, point) {
      var getSmoothness, angles, points, two, midPointerHalf;

      getSmoothness = this.takeInteger(6, point);
      points = getSmoothness;
      two = 2;
      midPointerHalf = points / two; // 取中间的点
      angles = 90 / midPointerHalf; // 获得一个点的度数
      for (var radian, radianValues, x, y, a = [], i = 0; i < points; i++) {
        radian = i * angles * Math.PI / 180;
        radianValues = Math.sin(radian);
        // 根据纵坐标的位移实现几何图形 余弦
        // 使用的是n的平方根
        y = Math.pow(radianValues * two, two);
        x = i;
        a.push([x, y]);
      }

      return {
        results: a
      }
    },
  });

})();

/*
- 2D prototype
- 模拟canvas 2D方法
- Drawing shape调用2D对象
*/
(function (){
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];

  q[1][250].prototype.constructor = o[1][250];
  o[1][250] = q[1][250];
  q[0].assign(o[1][250].prototype, {
    initialize: function() {
      return this,
      Ac_2d.call(this, arguments[0]),
      Ac_2d.prototype
    },
    hook2D: function(options, obj) {
      var model;
      var _this = this;
      if (typeof options === 'string') model = this[options],
      model.data = this.data[0];
      model.call(model, obj);
    },
    fillRect: function(options) {
      this.data.fillRect(options.x, options.y, options.x1, options.y1);
    },
    beginPath: function() {
      this.data.beginPath();
    },
    moveTo: function(options) {
      this.data.moveTo(options.x, options.y);
    },
    fillRect: function(options) {
      this.data.fillRect(options.x, options.y, options.x1, options.y1);
    },
    fill: function() {
      this.data.fill();
    },
    fillStyle: function(options) {
      this.data.fillStyle = options.index;
    },
    arc: function(options) {
      this.data.arc(options.x, options.y, options.radius, options.startAngles, options.stopAngles);
    },
    lineTo: function(options) {
      this.data.lineTo(options.x, options.y);
    },
    lineWidth: function(options) {
      this.data.lineWidth = options.thick;
    },
    closePath: function() {
      this.data.closePath();
    },
    strokeStyle: function(options) {
      this.data.strokeStyle = options.index;
    },
    stroke: function(options) {
      this.data.stroke();
    },
    strokeRect: function(options) {
      this.data.strokeRect(options.x, options.y, options.x1, options.y1);
    },
    lineCap: function(options) {
      this.data.lineCap = options.val;
    },
    lineDashOffset: function(options) {
      this.data.lineDashOffset = options.val;
    },
    lineJoin: function(options) {
      this.data.lineJoin = options.val;
    },
    miterLimit: function(options) {
      this.data.miterLimit = options.val;
    },
    font: function(options) {
      this.data.font = options.val;
    },
    textAlign: function(options) {
      this.data.textAlign = options.val;
    },
    textBaseline: function(options) {
      this.data.textBaseline = options.val;
    },
    quadraticCurveTo: function(options) {
      this.data.quadraticCurveTo(options.cpx, options.cpy, options.x, options.y);
    },
    bezierCurveTo: function(options) {
      this.data.bezierCurveTo(options.cp1x, options.cp1y, options.cp2x, options.cp2y, options.x, options.y);
    },
    fillText: function(options) {
      this.data.fillText(options.text, options.x, options.y);
    },
    strokeText: function(options) {
      this.data.strokeText(options.text, options.x, options.y);
    },
    setLineDash: function(options) {
      this.data.setLineDash = options.val;
    }
  });
  q[0].defineProperties(o[1][250].prototype, {
    ctx: {
      get: function() {
        return this.data
      },
      set: function(value) {
        this.val = value;
      }
    }
  });

  s3.node._context = o[1][250];
})();

/*
* Enter
* 2D工具和场景
* 加载动画场景和操作步骤
* 配置颜色和重置模块
*/
(function() {
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];

  /*
  - Rename variable,get a function mehtod give rename var,
  - this is a plugins methods,get the prototype property from the parent element.
    
    var app = simgl.tool('canvas');
    // while we can call scene methods

    app.scene
    // we are express the use of canvas 2d layers, or not svg and webgl
    // add color and speed and rotia from the canvas 2d layout
  */
  q[1][99].prototype.constructor = o[1][99];
  o[1][99] = q[1][99];
  q[0].assign(o[1][99].prototype, {
    // 此处initialize是通道
    // 插件的调用入口
    initialize: function() {
      return this,
      s3.At.call(this, arguments[0]),
      new s3.At(arguments[0])
    },
    createGradient: function(params) {
      var rgb = ['#5E8579', '#7B7687', '#77C34F', '#96CDCD', '#407D94', '#D62728', '#C1FFC1', '#2E8B57', '#87CEEB', '#9ACD32'];
      return rgb
    },
    createGradient20: function(argument) {
      var rgb = ['#5E8579', '#7B7687', '#77C34F', '#96CDCD', '#407D94', '#D62728', '#C1FFC1', '#2E8B57', '#87CEEB', '#9ACD32', '#DFB5B7', '#EACF02', '#ACB327', '#7F1784', '#E08031', '#C7CEB2', '#199475', '#0B6E48', '#044D22', '#7E8842'];
      return rgb
    },
    createGradient30: function(argument) {
      var rgb = ['#5E8579', '#7B7687', '#77C34F', '#96CDCD', '#407D94', '#D62728', '#C1FFC1', '#2E8B57', '#87CEEB', '#9ACD32', '#DFB5B7', '#EACF02', '#ACB327', '#7F1784', '#E08031', '#C7CEB2', '#199475', '#0B6E48', '#044D22', '#7E8842', '#DFB5B7', '#EACF02', '#ACB327', '#7F1784', '#E08031', '#C7CEB2', '#199475', '#0B6E48', '#044D22', '#7E8842'];
      return rgb
    },
    /*
    - 表示多个同等属性的设置
    - 属性的值不同
    - 后面方法处理color
    */
    amount: function(params) {
      var amounts = new o[1][88](params);
      var vals = amounts.value;

      return amounts.set(vals)
    },
    /*
    管理图形下面的组件 graphics
    给图像定义方法名 addComponent()
    方法内部添加的二个属性 
    第一 字符串 表示组件的名称 name
    第二 对象 表示添加的属性名称 property
    { 
      type : boolean || number || array || function || string,
      property : colorArr
    }
    demo :
    {
      'circleShape',{
        type : Array,
        property : colorOrPosition
      }
    }
    */
    Manager: function() {
      var that = this;
      var preArgs = arguments[0];
      // 接收传的参数
      this.pipe = [];
      // 缓存执行animation的数组
      this.storeBufferSlice = [];
      this.storeStartOfconfig = [];

      return {
        graphics: {
          addComponent: function() {
            var args = arguments;

            if (typeof args[0] === 'string' && typeof args[1] === 'object') {
              that.pipe.push({
                componentName: args[0],
                characteristic: args[1]
              })
            }

            var getPropBindObject;
            for (var k = 299; k > 200; k--) {
              if (k in o[1]) {
                try {
                  if (o[1][k].prototype.constructor === args[0]) {
                    getPropBindObject = k;
                    break;
                  } else continue;
                } catch(e) {
                  throw 'no defaults the method name.'
                }
              }
            }

            var utils = new o[1][getPropBindObject](that.pipe);
            /*
             utils.draw() 第一次执行的函数方法
             utils 需要重置的函数方法
             utils 属性的方法可以被调用
          */
            that.storeBufferSlice.push(utils);
            // 调用call组件的配置信息 进行一次重新配置
            return utils,
            this
          },
          config: {
            set: (function() {
              // 执行默认的参数类型
              // 只能设置到[]数组的第一层
              var atpc = new o[1][83]({
                type: 'Array',
                property: []
              });

              // 是否自动执行 设置属性
              var setAttr = new o[1][82]();
              // Object.assign(atpc,setAttr);
              that.storeStartOfconfig.push(setAttr);

              // 重新set设置参数的类型和属性
              return atpc
            })(),
            startconfig: that.storeStartOfconfig
          },
          start: function(options) {
            var _this = this,
            getArrAttr = _this.config.startconfig[0],
            defaults_NUM = 0.66666,
            strSpeed = 'speed';

            if (typeof options === 'object') {
              if (strSpeed in options) {
                var getCustomSpeedAttr = options[strSpeed]; (typeof getCustomSpeedAttr === 'string' ? null: true);
                if (typeof getCustomSpeedAttr === 'number') defaults_NUM = 1 - getCustomSpeedAttr;
              }
            }

            var getConfigSpeed = getArrAttr[strSpeed];
            getConfigSpeed -= defaults_NUM;
            getArrAttr[strSpeed] = getConfigSpeed;
            getArrAttr.open = !0;
            delete getArrAttr;
            return ! 0
          }
        },
        // 获得深度执行components组件的函数方法 that.storeBufferSlice 
        depthCall: this.storeBufferSlice
      }
    },
    animation: function(options, t) {
      var node = this.root.addChild;
      if (t >> 0 || typeof(t) === 'number') t = 1;
      if (t == null && t == undefined) t = counts;

      function render() {
        t = requestAnimation(render, 30);
        node(options);
      }

      render();
      return t
    }
  });
  q[0].defineProperties(o[1][99].prototype, {
    /*
    將属性添加进 scene.root.addChild方法里面
    此时 scene 场景即可调用克隆的2D属性
    通过clone克隆scene属性赋值给2D进行render渲染
    渲染size根据屏幕适配调整size
    */
    scene: {
      get: function() {
        var that = this,
        o = {},
        canName = that.newEmpty,
        canNameProperties = that.defaults,
        originalProperty = that.data[0];
        return originalProperty
      },
      set: function(value) {
        var originalProperty;
        originalProperty = value ? value: this.data[0];

        for (var k in originalProperty) {
          this.newEmpty.push[k];
        }
        return this.newEmpty
      }
    },
    /*
    把这个场景的属性和调用属性传给一个新函数
    此函数或方法主要manager管理一个物理实例事物
    通过调用相应的物理对象 即可使用相应的属性和参数 并且赋值
    var cir = new app.Manager('circle'); // or cylinder rect
    此管理事件为新开的对象
    */
    root: {
      get: function(x) {
        var that = this;
        return {
          /*
          get configuration of info on the Manager methods.
          options property will be resetting.
        */
          addChild: function(options) {
            var getBufferMethod = options;
            var getConfig = getBufferMethod.graphics.config;
            var defineStartConfigInfo = getConfig.startconfig[0];
            // 重新定义属性 from graphics object to config.
            var defineConfigurationInfo = getConfig.set;
            var defineConfigurationInfoPropertiesType;
            if (defineConfigurationInfo.type === 'Array' || !defineConfigurationInfo.type) {
              defineConfigurationInfoPropertiesType = 'Array';
            } else if (defineConfigurationInfo.type !== 'Array') {
              defineConfigurationInfoPropertiesType = defineConfigurationInfo.type;
            }
            // 重新定义type 
            var acceptCustomizeConfig = Object.assign(defineConfigurationInfo, {
              type: defineConfigurationInfoPropertiesType
            });

            // 执行数组方法
            var getDepthCall = getBufferMethod.depthCall;
            // start ani config information
            getDepthCall.forEach(function(opt) {
              // 存入一个2d的rending渲染
              // 如果第二个参数为false 执行默认的数组
              // 第三个参数限制作用 false 禁止自动 true 自动执行
              opt.Excute2DEngine(that.data[0], acceptCustomizeConfig, {
                speed: defineStartConfigInfo.speed,
                open: defineStartConfigInfo.open
              })
            });
            return this
          },
        }
      },
      set: function(value) {
        this.val = value;
        return value
      }
    },
  });

  // name = 'amount()'
  q[1][88].prototype.constructor = o[1][88];
  o[1][88] = q[1][88];
  q[0].assign(o[1][88].prototype, {
    handleModule: function(options) {
      // color and pos is a mothods.
      // options => function (){ return ['#222','#333']};
      // this.getValue => number;
      var acceptData, size, arrEmpty;
      if (typeof options === 'function') acceptData = options.call(this);
      else acceptData = options;
      size = this.getValue;
      arrEmpty = [];
      for (var j = 0; j < size; j++) {
        arrEmpty.push(acceptData[j])
      }
      return arrEmpty
    },
    set: function(param) {
      this.getValue = param;
      return this
    }
  });
  q[0].defineProperties(o[1][88].prototype, {
    value: {
      get: function() {
        return typeof this.nums === 'number' ? this.nums: Number(this.nums)
      },
      set: function(val) {
        var output = val;
        console.log(output);
        // 如果传入的值不是10
        if (output !== 10) {
          this.nums = val
        }
      }
    }
  });

  // pointerconfig = '()'
  q[1][83].prototype.constructor = o[1][83];
  o[1][83] = q[1][83];
  q[0].assign(o[1][83].prototype, {
    initialize: function() {
      return this.val
    }
  });
  q[0].defineProperties(o[1][83].prototype, {
    'type': {
      get: function() {
        return this.TYPE
      },
      set: function(val) {
        this.TYPE = val;
      }
    },
    'property': {
      get: function() {
        return this.PROPERTY
      },
      set: function(val) {
        this.PROPERTY = val;
      }
    }
  });
  // startconfig = '()'
  q[1][82].prototype.constructor = o[1][82];
  o[1][82] = q[1][82];
  q[0].assign(o[1][82].prototype, {
    initialize: function() {
      return this.val
    }
  });
  q[0].defineProperties(o[1][82].prototype, {
    'speed': {
      get: function() {
        return this.SPEED
      },
      set: function(val) {
        this.SPEED = val;
      }
    },
    'open': {
      get: function() {
        return this.OPEN
      },
      set: function(val) {
        this.OPEN = val;
      }
    }
  });

  s3.space._tool = o[1][99];
})();


// _set
(function() {
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];

  q[1][499].prototype.constructor = o[1][499];
  o[1][499] = q[1][499];
  q[0].assign(o[1][499].prototype, {
    initialize: function() {
      return this,
      s3.Aset.call(this, arguments),
      new s3.Aset(arguments[0])
    },
    attr: function(attr) {
      // 查看是否具有属性
      // 如果存在就会保存且重置值
      // this.data[0][attr]
      // 否则不存在就会保存 手动设置
      // console.log(attr in this.data[0])
      try {
        if (attr in this.data[0]) return this.data.unshift(attr),
        this;
        else return void this
      } catch(e) {
        throw e
      }
    },
    val: function(value) {
      // 从第一个取出数据 并删除
      var data = this.data;
      var getShift = data.shift();

      // 重写属性值
      if (typeof value === 'string') data[0][getShift] = value;
      else return data[0][getShift];

      return this
    }
  });

  s3.space._set = o[1][499];
})();

// _freezeProperty
(function() {
  var q = s3.init;
  var o = s3.category;
  q[0] = o[0];

  q[1][999].prototype.constructor = o[1][999];
  o[1][999] = q[1][999];
  q[0].assign(o[1][999].prototype, {
    initialize: function() {
      return this,
      Af.call(this, arguments[0]),
      Af.prototype
    }
  });
  q[0].defineProperties(o[1][999].prototype, {
    get: function() {
      return this.isFreezeProperties
    },
    set: function(value) {
      if (value) this.isFreezeProperties = value;

      return this.isFreezeProperties
    }
  });

  s3.space._freezeProperty = o[1][999];
})();

/*
* create a class.
* call subclasses and prototype attributes to parent element.
* implemention invoking anonymous function of properties.
* there are invoking extends subclasses.
* fn(first params ,second params )
* params first = this.prototype.first
* params second = second.prototype
*/
Shape.plugin.create('tool', s3.space._tool);
Shape.plugin.create('set', s3.space._set);
Shape.plugin.create('freezeProperty', s3.space._freezeProperty);
Shape.plugin.create('circleShape', s3.tween._circleShape);
Shape.plugin.create('lineShape', s3.tween._lineShape);
Shape.plugin.create('arcShape', s3.tween._arcShape);
Shape.plugin.create('rectShape', s3.tween._rectShape);
Shape.plugin.create('waveShape', s3.tween._waveShape);
Shape.plugin.create('sectorsShape', s3.tween._sectorsShape);
Shape.plugin.create('hatShape', s3.tween._hatShape);
Shape.plugin.create('hillShape', s3.tween._hillShape);

var _build = new s3();

/*simply api*/
_s3.version = _build.version;
_s3.dom = _build.dom;
_s3.append = _build.append;
_s3.text = _build.text;
_s3.blank = _build.blank;
_s3.isStr = _build.isStr;
_s3.isObj = _build.isObj;
_s3.isFun = _build.isFun;
_s3.isNum = _build.isNum;
_s3.isArr = _build.isArr;
_s3.trim = _build.trim;
_s3.extend = _build.extend;
_s3.toString =_build.toString;
_s3.parse =_build.parse;
_s3.indexof = _build.indexof;
_s3.debug = _build.debug;
/*multi*/
_s3.Shape = _build.Shape;

});
})(typeof window !== 'undefined' ? this: global);