var s3 = typeof s3 !== "undefined" ? s3 : {};
// Default global properties.
var doc = s3.document || document;
var win = window;
function S3(element, options) {
    return new S3.order(element,options) || {}
}
/*
* @set S3.js libriry version
* @create a model name
* @create date
* @other configuration info
*/
(function (messages) {
    if (!messages) messages = {};
    messages.version = '0.1';
    messages.privateModule = 'S3';
    messages.date = '20170912';
    messages.nowDate = new Date;
    messages.config = {};
    S3.messages = messages;
})();
(function () {
    var Am, At, Atp, Ata, Atd, Att, Atr, Ats, Ata, Atc, Atc20, Atpc, Atc30, Atsc, At_s, Ac, Acd, Acp, Acw, Ashape, Acls, Acas, Acrs, Acws, Acss, Achs, AchIs, Aces, Acvdp, Ac_2d, Accp, Ac_, Acm, Ach, Aw, Al, Aset, Af, Bc, Bp, Br, // functional property
    speed, times, logger, processing, requestAnimation, // be used to configure the declared properties.
    put = {}, counts = 0, category = null, init = void {};
    init = new (function (_={a:[], puts:put}) {
        return function (mySelf={}) {
            mySelf.self = _.a;
            mySelf.puts = _.puts;
            mySelf.self.push(mySelf);
            var childs, closureCollection;
            closureCollection = _.a;
            for (var i = 0, iterator = mySelf.self[0], len = iterator.length; i < len; i++) {
                closureCollection[i] = [];
                var child = iterator[i];
                for (var j in child) {
                    childs = child[j];
                    try {
                        if ("function" !== typeof childs) {
                            throw "你没有选择函数！"
                            //You are not define function mehtods.
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
                    } catch (e) {
                        throw e
                    }
                    ;
                }
                ;
            }
            return closureCollection[0][2](),
            closureCollection[0][3](),
            closureCollection[0][1].call(this, closureCollection),
            closureCollection
        }([{
            1: function (closure) {
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
                Atsc = closure[1][82];
                At_s = closure[1][81];
                Ashape = closure[1][300];
                Ac = closure[1][299];
                Acls = closure[1][298];
                Acas = closure[1][297];
                Acrs = closure[1][296];
                Acws = closure[1][295];
                Acss = closure[1][294];
                Achs = closure[1][293];
                AchIs = closure[1][292];
                Aces = closure[1][291];
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
            2: function () {
                // used in the function properties.
                speed = 0.1;
                // speed lv
                times = 0;
                // time out
                logger = false;
                // record
                processing = 1;
                requestAnimation = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || (function (callback) {
                    window.setTimeout(callback, 20)
                }
                );
            },
            3: function () {
                // bind function mehtod in the rename variable.
                // eleven with data and el document.
                // first : properties; second : closure; third : prototype chain; fourth : __proto__ ; fifth : this gesture[6]
                category = [Object, // default properties
                // the application is replacement the tools
                {
                    99: 'tool',
                    98: 'pos',
                    97: 'animation',
                    96: 'draw',
                    95: 'transfer',
                    94: 'render',
                    89: 'scene',
                    88: 'amount',
                    86: 'createGradient',
                    85: 'createGradient20',
                    84: 'createGradient30',
                    83: 'pointerConfig',
                    82: 'startConfig',
                    81: 'state',
                    300: 'shape',
                    299: 'circle',
                    298: 'line',
                    297: 'arc',
                    296: 'rect',
                    295: 'wave',
                    294: 'sectors',
                    293: 'hat',
                    292: 'hill',
                    291: 'ellipse',
                    280: 'validateDrawProperty',
                    266: 'position',
                    279: 'compareProperty',
                    260: 'distance',
                    250: 'context',
                    240: 'waveShape',
                    239: 'circleShape',
                    232: 'hillShape',
                    231: 'ellipseShape',
                    219: 'math',
                    499: 'set',
                    999: 'freezeProperty',
                    1000: 'plugin',
                    1099: 'cover2DProperty',
                    1111: 'cache',
                    1299: 'render',
                }, // closure
                {
                    1: 'get',
                    2: 'set',
                    3: 'add',
                    66: 'on'
                }, // prototype chain
                {
                    1: 'click',
                    3: 'mouseover',
                    6: 'gesture',
                    11: 'atach'
                }// gesture events
                ]
            }
        }, {
            99: function () {
                this.name = 'tool';
                this.newEmpty = [];
                this.pipe = [];
                this.life = [];
                this.defaults = {};
                this.data = arguments;
                var data = this.data[0];
                var messages = S3.messages;
                for (var i in messages) {
                    this[i] = messages[i];
                }
                for (var k in data) {
                    if (k === 'webkitImageSmoothingEnabled' || k === 'mozImageSmoothingEnabled' || k === 'msImageSmoothingEnabled')
                        k = 'imageSmoothingEnabled';
                    var _thing = data[k];
                    var m = 0;
                    var n = 0;
                    if (s3.isStr(_thing) || s3.isNum(_thing) || s3.isBool(_thing)) {
                        this.newEmpty.push(k);
                        this.defaults[k] = {
                            name: 'withoutMethod',
                            type: typeof (data[k])
                        };
                        this.config['withoutMethod'] = n++;
                    } else if (s3.isFun(_thing)) {
                        this.newEmpty.push(k);
                        this.defaults[k] = {
                            name: 'withMethod',
                            type: typeof (data[k]),
                            length: data[k].length
                        };
                        this.config['withMethod'] = m++;
                    }
                }
            },
            88: function (num) {
                this.name = 'amount';
                this.nums = num;
            },
            86: function () {
                this.name = 'createGradient';
            },
            85: function () {
                this.name = 'createGradient20';
            },
            84: function () {
                this.name = 'createGradient30';
            },
            83: function () {
                this.name = 'pointerConfig';
                this.TYPE = arguments[0].type;
                this.PROPERTY = arguments[0].property;
            },
            82: function () {
                this.name = 'startConfig';
                this.SPEED = 0.999999999;
                this.OPEN = 0;
            },
            81: function () {
                this.name = 'state';
                this.state = null;
            },
            300: function () {
                this.name = 'shape';
                this.bg = "rgb(255,255,255)"
                this.borderColor = '#333';
                this.lineWidth = 3;
                this.radius = 36;
                this.thick = 5;
                this.motion = 'stop';
                this.trails = 1;
                this.hertz = 10;
                this.rate = 5;
                // start set
                this.SPEED_3 = null;
                this.speed = this.SPEED_3 || 0.2;
                this.bMoveMode = !1;
                this.opposite = 1;
                this.direction = 'top';
                this.slope = 0.99996;
                this.smooth = 1;
                this.currentTimes = (new Date).getTime();
                this.buffer = new ArrayBuffer(16);
                this.fdata = new Float32Array(this.buffer,0,3);
                this.color = this.fdata;
                this._device = win.devicePixelRatio;
                // start position x
                this.x = Math.round(Math.random() * 36 + 36);
                // start position y
                this.y = Math.round(Math.random() * 36 + 36);
                // end position x1
                this.x1 = Math.round(Math.random() * 36 + 36) * 2;
                // end position y1
                this.y1 = Math.round(Math.random() * 36 + 36) * 2;
                this.calculationProperty = {
                    createCircle: init[1][239].createCircle,
                };
                this.readyPosition = 50;
                this.beginPosition = {
                    x: 50,
                    y: null
                };
                this.endPosition = {
                    x: 500,
                    y: null
                };
                this.pi = Math.PI / 180;
                this.startAngles = 0;
                this.stopAngles = Math.PI * 2;
            },
            299: function () {
                var that = this
                this.name = 'circle';
                this.data = [];
                this.noMotionArrCount = [];
                this.noMotionArrObj = [];
                this.need = false;
                this.notNeed = false;
                this.o_OPEN = 0;
                this.iterator = {};
                this.callState = {};
                this.setState = function (val, option) {
                    that.callState.setState = val
                }
                this.method = function () {}
                ;
                this.curve = 1;
                this.moveModel = ['move', 'stop'];
                this.bMoveMode = !1;
                this.currentTimes = (new Date).getTime();
                this.collection = arguments[0];
            },
            298: function () {
                this.name = 'line';
                this.data = [];
                this.iterator = {};
                this.collection = arguments[0];
            },
            297: function () {
                this.name = 'arc';
                this.data = [];
                this.iterator = {};
                this.collection = arguments[0];
            },
            296: function () {
                this.name = 'rect';
                this.data = [];
                this.iterator = {};
                this.collection = arguments[0];
            },
            295: function () {
                this.name = 'wave';
                this.stop = !0;
                this.s_SPEED = 0;
                this.o_OPEN = 0;
                this.data = [];
                this.iterator = {};
                this.collection = arguments[0];
            },
            294: function () {
                this.name = 'sectors';
                this.data = [];
                this.iterator = {};
                this.collection = arguments[0];
            },
            293: function () {
                this.name = 'hat';
                this.data = [];
                this.iterator = {};
                this.collection = arguments[0];
            },
            292: function () {
                this.name = 'hill';
                this._direction = ['top', 'left', 'right', 'bottom'];
                this.data = [];
                this.iterator = {};
                this.radius = 0.0001;
                this.collection = arguments[0];
            },
            291: function () {
                this.name = 'ellipse';
                this._direction = ['top', 'left', 'right', 'bottom'];
                this.data = [];
                this.iterator = {};
                this.radius = 0.0001;
                this.collection = arguments[0];
            },
            280: function () {
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
                this.save = [arguments[0], arguments[1]];
                // reset property
                this.reset[0] = 0;
                this.reset[1] = 0;
            },
            279: function () {
                this.name = 'compareProperty';
                this.iterator = {};
                this.data = [];
            },
            266: function (options) {
                this.name = 'position';
                this.data = [options];
            },
            260: function (options) {
                this.name = 'distance';
                this.data = [options];
                this.f_speed;
            },
            250: function (options) {
                this.name = 'context';
                this.data = [options];
            },
            240: function () {
                this.name = 'waveShape';
                this.data = [];
            },
            239: function () {
                this.name = 'circleShape';
                this.data = [];
            },
            232: function () {
                this.name = 'hillShape';
                this.data = [];
            },
            219: function () {
                this.name = 'math';
                this.data = [];
                this.ABS = [];
                this.framesRate = [];
            },
            499: function () {
                this.name = 'set';
                this.data = [];
                if (typeof arguments === 'object')
                    this.data.push(arguments[0]);
            },
            999: function () {
                this.name = 'freezeProperty';
                this.isFreezeProperties = arguments[0];
                Object.freeze(this.isFreezeProperties)
            },
            1000: function () {
                this.name = 'plugin';
                shape.plugin(arguments);
            },
            1111: function () {
                this.name = 'cache';
            },
            1099: function () {
                this.name = 'cover2DProperty';
            },
            1299: function () {
                this.name = 'render';
            },
        }, {
            1: function () {
                this.name = 'get';
                // used gesture pointer.
            },
            2: function () {
                this.name = 'set';
            },
            3: function () {
                this.name = 'add';
            },
            4: function () {
                this.name = 'on';
            }
        }, {
            6: function () {
                this.name = 'gesture';
                // used gesture pointer.
                return {
                    linear: function (argument) {},
                    easein: function (argument) {},
                    easeout: function (argument) {}
                }
            }
        }])
    }
    );
    S3.init = init;
    S3.category = category;
    S3.Aset = Aset;
    S3.At = At;
    S3.Af = Af;
    S3.requestAnimation = requestAnimation
})();
S3.space = {};
S3.tween = {};
S3.node = {};