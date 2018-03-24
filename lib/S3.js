(function (foctory) {
    !function (factory) {
        if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
            var target = module['exports'] || exports;
            factory(target);
        } else if (typeof define === 'function' && define['amd']) {
            define(['exports'], factory);
        } else {
            factory(window['s3'] = {});
        }
    }(function (exports) {
        'use strict'
        var _s3 = typeof exports !== "undefined" ? exports : {};
        // Default global properties.
        var doc = exports.document || document;
        var win = window;
        function s3(element, options) {
            return new s3.order(element,options) || {}
        }
        ;// Add a val in the methods.
        (function () {
            var order = function (element, options) {};
            order.prototype = {
                version: "0.0.4",
                dom: function (options) {
                    return doc.querySelector(options)
                },
                append: function (element, options) {
                    return element.appendChild(options);
                },
                text: function (element, options) {
                    return element.innerHTML = options;
                },
                blank: function () {},
                isStr: function (options) {
                    return typeof (options) === 'string'
                },
                isObj: function (options) {
                    return typeof (options) === 'object'
                },
                isFun: function (options) {
                    return typeof (options) === 'function'
                },
                isNum: function (options) {
                    return typeof (options) === 'number'
                },
                isArr: function (options) {
                    return typeof (options) === 'array'
                },
                isBool: function (argument) {
                    return typeof (options) === 'boolean'
                },
                trim: function (options) {
                    return options.replace(/(\s*)/g, '');
                },
                toString: function (options) {
                    return JSON.toString(options);
                },
                isUndefined: function (options) {
                    return typeof options == 'undefined'
                },
                parse: function (options) {
                    return JSON.parse(options);
                },
                extend: function (prop, options) {
                    for (var pop in options) {
                        if (pop in prop) {
                            prop[pop] = options[pop]
                        }
                        prop[pop] = options[pop]
                    }
                    return prop
                },
                indexof: function (prop, options) {
                    for (var i = 0; i < prop.length; i++) {
                        if (prop[i] === options) {
                            return 1;
                        }
                    }
                    return -1;
                },
                debug: function (options) {
                    function warn(options, log) {
                        options.call(this, log.options);
                    }
                    return warn(function (options) {
                        win.console.warn(options);
                    }, {
                        options: options ? options : 'disable write. call function error'
                    })
                },
                Shape: function (str, options) {
                    return new Shape(str,options,this)
                },
                body: function (options) {
                    return new body(options)
                }
            };
            s3.order = order;
        })();
        /*
        * @set s3.js libriry version
        * @create a model name
        * @create date
        * @other configuration info
        */
        (function (messages) {
            if (!messages)
                messages = {};
            messages.version = '0.1';
            messages.privateModule = 's3';
            messages.date = '20170912';
            messages.nowDate = new Date;
            messages.config = {};
            s3.messages = messages;
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
                        var messages = s3.messages;
                        for (var i in messages) {
                            this[i] = messages[i];
                        }
                        for (var k in data) {
                            if (k === 'webkitImageSmoothingEnabled' || k === 'mozImageSmoothingEnabled' || k === 'msImageSmoothingEnabled')
                                k = 'imageSmoothingEnabled';
                            var _thing = data[k];
                            var m = 0;
                            var n = 0;
                            if (_s3.isStr(_thing) || _s3.isNum(_thing) || _s3.isBool(_thing)) {
                                this.newEmpty.push(k);
                                this.defaults[k] = {
                                    name: 'withoutMethod',
                                    type: typeof (data[k])
                                };
                                this.config['withoutMethod'] = n++;
                            } else if (_s3.isFun(_thing)) {
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
            s3.init = init;
            s3.category = category;
            s3.Aset = Aset;
            s3.At = At;
            s3.Af = Af;
            s3.requestAnimation = requestAnimation
        })();
        // this is a s3js bracket
        function body(options) {
            this.cache = new Array();
            this.dist = new Array();
            this.bool = false
            return this.dist.push(options) && this.cache.push(_s3.shape) && !this.bool
        }
        body.prototype.component = function (str, options) {
            var cache = this.cache[0]
            var dist = this.dist[0]
            var tool = cache.call(null).tool(dist)
            var scene = tool.scene
            var manager = tool.manager
            var callManager = new manager(scene)
            var addComponent = callManager.graphics.addComponent(str, options)
            addComponent.start({
                speed: 0.9,
                open: true
            })
            tool.root.addChild(callManager)
            tool.render(!this.bool)
            return this
        }
        body.prototype.set = function (options) {
            var params = [options]
            var shape = this.cache[0]()
            var results = shape.set(this.dist[0])
            params.reduce(function (b, p) {
                for (var i in p)
                    results.attr(i).val(p[i])
            }, [])
        }
        function Shape(str, options, previous) {
            // inject parameters;
            // Extend previous method of preotype chain properties.
            return new s3.category[1][99],
            this;
        }
        Shape.plugin = function () {
            return Shape.plugin.create(arguments)
        }
        Shape.plugin.create = function (subclasses, definition) {
            Shape.prototype[subclasses] = definition.prototype.initialize;
        }
        s3.space = {};
        s3.tween = {};
        s3.node = {};
        /*
        * Enter
        * 2Dtool and scene
        * loading animation scene and operation steps
        * configuration color and reset modules
        */
        (function () {
            var q = s3.init;
            var o = s3.category;
            q[0] = o[0];
            q[1][99].prototype.constructor = o[1][99];
            o[1][99] = q[1][99];
            q[0].assign(o[1][99].prototype, {
                initialize: function () {
                    return this,
                    new s3.At(arguments[0].getContext('2d'))
                },
                createGradient: function () {
                    var rgb = ['#5E8579', '#7B7687', '#77C34F', '#96CDCD', '#407D94', '#D62728', '#C1FFC1', '#2E8B57', '#87CEEB', '#9ACD32'];
                    return rgb
                },
                createGradient20: function () {
                    var rgb = ['#5E8579', '#7B7687', '#77C34F', '#96CDCD', '#407D94', '#D62728', '#C1FFC1', '#2E8B57', '#87CEEB', '#9ACD32', '#DFB5B7', '#EACF02', '#ACB327', '#7F1784', '#E08031', '#C7CEB2', '#199475', '#0B6E48', '#044D22', '#7E8842'];
                    return rgb
                },
                createGradient30: function () {
                    var rgb = ['#5E8579', '#7B7687', '#77C34F', '#96CDCD', '#407D94', '#D62728', '#C1FFC1', '#2E8B57', '#87CEEB', '#9ACD32', '#DFB5B7', '#EACF02', '#ACB327', '#7F1784', '#E08031', '#C7CEB2', '#199475', '#0B6E48', '#044D22', '#7E8842', '#98DCFF', '#FFBBFF', '#BAECA1', '#FF5500', '#A8E788', '#FF894D', '#FF945E', '#A9E78A', '#FF02FF', '#D9F2FF'];
                    return rgb
                },
                amount: function (params) {
                    var amounts = new o[1][88](params);
                    var vals = amounts.value;
                    return amounts.set(vals)
                },
                manager: function () {
                    var that = this;
                    var preArgs = arguments[0];
                    this.pipe = [];
                    this.storeBufferSlice = [];
                    this.storeStartConfig = [];
                    return {
                        graphics: {
                            config: {
                                set: (function () {
                                    var properties = {
                                        type: 'Array',
                                        property: []
                                    }
                                    var _startConfig = new s3.node._startConfig()
                                    var _pointerconfig = new s3.node._pointerconfig(properties)
                                    return that.storeStartConfig.push(_startConfig) && _pointerconfig
                                })()
                            },
                            addComponent: function () {
                                var args = arguments;
                                if (_s3.isStr(args[0]) && _s3.isObj(args[1])) {
                                    that.pipe.push({
                                        componentName: args[0],
                                        characteristic: args[1]
                                    })
                                }
                                var getPropBindObject;
                                for (var k = 299; k > 200; k--)
                                    if (k in o[1])
                                        try {
                                            if (o[1][k].prototype.constructor === args[0]) {
                                                getPropBindObject = k;
                                                break;
                                            } else
                                                continue;
                                        } catch (e) {
                                            throw 'no defaults the method name.'
                                        }
                                var utils = new o[1][getPropBindObject](that.pipe);
                                that.storeBufferSlice.push(utils);
                                return this
                            },
                            start: function (options) {
                                Object.assign(that.storeStartConfig[0], options);
                                return !0
                            }
                        },
                        // get a deepth implemention of the commponent the function methods.
                        depthCall: this.storeBufferSlice,
                        startSetting: this.storeStartConfig
                    }
                },
                animation: function (options, t) {
                    if (t >> 0 || _s3.isNum(t))
                        t = 1;
                    if (t == null && t == undefined)
                        t = 0;
                    function _render() {
                        t = setTimeout(_render, 30);
                        options.loop();
                    }
                    _render();
                    return t
                },
                render: function (bool) {
                    var ms = null
                    var that = this
                    var getStream = that.life[0].stream
                    try {
                        if (getStream instanceof Function && bool) {
                            var going = 0
                            var results = null
                            return function self() {
                                try {
                                    if (going) results.reloadAnimation()
                                    else results = getStream(bool)
                                    if (results.changedState) {
                                        if (win.requestAnimationFrame) requestAnimationFrame(self);
                                        if (ms) clearTimeout(ms);
                                        else ms = setTimeout(self, 17);
                                        going = 1
                                    }
                                } catch (err) {
                                    throw err
                                }
                            }()
                        } else {
                            throw 'no found function method and bool ns a boolean value.'
                        }
                    } catch (err) {
                        console.log(err)
                    }
                }
            });
            q[0].defineProperties(o[1][99].prototype, {
                scene: {
                    get: function () {
                        var that = this;
                        var canNameProperties = that.defaults;
                        var originalProperty = that.data[0];
                        return canNameProperties && originalProperty
                    },
                    set: function (value) {
                        var originalProperty = value ? value : this.data[0];
                        for (var k in originalProperty)
                            this.newEmpty.push(k);
                        return this.newEmpty
                    }
                },
                root: {
                    get: function (x) {
                        var that = this;
                        return {
                            addChild: function (options) {
                                var _arr = []
                                  , depthCall = options.depthCall;
                                depthCall.forEach(function (opt) {
                                    _arr.push(that.data[0], options.graphics.config.set, {
                                        speed: options.startSetting[0].speed,
                                        open: options.startSetting[0].open
                                    }, opt)
                                });
                                var maybeLoop = _arr.pop().Excute2DEngine(_arr);
                                var stream = function (option) {
                                    if (options)
                                        return maybeLoop.streaming()
                                }
                                return this,
                                that.life.push({
                                    stream
                                })
                            },
                        }
                    },
                    set: function (value) {
                        this.val = value;
                        return value
                    }
                }
            });
            // name = 'amount()'
            q[1][88].prototype.constructor = o[1][88];
            o[1][88] = q[1][88];
            q[0].assign(o[1][88].prototype, {
                handleModule: function (options) {
                    // color and pos is a mothods.
                    // options => function () { return ['#222','#333']};
                    // this.getValue => number;
                    var acceptData;
                    if (_s3.isFun(options))
                        acceptData = options.call(this);
                    else
                        acceptData = options;
                    var size = this.getValue;
                    var arrEmpty = [];
                    for (var j = 0; j < size; j++)
                        arrEmpty.push(acceptData[j])
                    return arrEmpty
                },
                set: function (param) {
                    this.getValue = param;
                    return this
                }
            });
            q[0].defineProperties(o[1][88].prototype, {
                value: {
                    get: function () {
                        return _s3.isNum(this.nums) ? this.nums : Number(this.nums)
                    },
                    set: function (val) {
                        var output = val;
                        if (output !== 10)
                            this.nums = val
                    }
                }
            });
            // pointerconfig = '()'
            q[1][83].prototype.constructor = o[1][83];
            o[1][83] = q[1][83];
            q[0].assign(o[1][83].prototype, {
                initialize: function () {
                    return this.val
                }
            });
            q[0].defineProperties(o[1][83].prototype, {
                'type': {
                    get: function () {
                        return this.TYPE
                    },
                    set: function (val) {
                        this.TYPE = val;
                    }
                },
                'property': {
                    get: function () {
                        return this.PROPERTY
                    },
                    set: function (val) {
                        this.PROPERTY = val;
                    }
                }
            });
            // startconfig = '()'
            q[1][82].prototype.constructor = o[1][82];
            o[1][82] = q[1][82];
            q[0].assign(o[1][82].prototype, {
                initialize: function () {
                    return this.val
                }
            });
            q[0].defineProperties(o[1][82].prototype, {
                'speed': {
                    get: function () {
                        return this.SPEED
                    },
                    set: function (val) {
                        this.SPEED = val;
                    }
                },
                'open': {
                    get: function () {
                        return this.OPEN
                    },
                    set: function (val) {
                        this.OPEN = val;
                    }
                }
            });
            // setState = '()'
            q[1][81].prototype.constructor = o[1][81];
            o[1][81] = q[1][81];
            q[0].assign(o[1][81].prototype, {
                initialize: function () {
                    return this.val
                }
            });
            q[0].defineProperties(o[1][81].prototype, {
                'setState': {
                    set: function (val) {
                        this.state = val
                    }
                }
            });
            s3.space._tool = o[1][99];
            s3.node._pointerconfig = o[1][83];
            s3.node._startConfig = o[1][82];
            s3.node._state = o[1][81];
        })();
        /*
        *2D prototype
        *Simulation canvas 2D methods
        *Drawing shape call 2D object
        */
        (function () {
            var q = s3.init;
            var o = s3.category;
            q[0] = o[0];
            q[1][250].prototype.constructor = o[1][250];
            o[1][250] = q[1][250];
            q[0].assign(o[1][250].prototype, {
                initialize: function () {
                    return this,
                    Ac_2d.call(this, arguments[0]),
                    Ac_2d.prototype
                },
                hook2D: function (options, obj) {
                    var model;
                    var _this = this;
                    if (_s3.isStr(options))
                        model = this[options],
                        model.data = this.data[0];
                    model.call(model, obj);
                },
                fillRect: function (options) {
                    this.data.fillRect(options.x, options.y, options.x1, options.y1);
                },
                beginPath: function () {
                    this.data.beginPath();
                },
                moveTo: function (options) {
                    this.data.moveTo(options.x, options.y);
                },
                fillRect: function (options) {
                    this.data.fillRect(options.x, options.y, options.x1, options.y1);
                },
                fill: function () {
                    this.data.fill();
                },
                fillStyle: function (options) {
                    this.data.fillStyle = options.color;
                },
                arc: function (options) {
                    this.data.arc(options.x, options.y, options.radius, options.startAngles, options.stopAngles);
                },
                lineTo: function (options) {
                    this.data.lineTo(options.x, options.y);
                },
                lineWidth: function (options) {
                    this.data.lineWidth = options.thick;
                },
                closePath: function () {
                    this.data.closePath();
                },
                strokeStyle: function (options) {
                    this.data.strokeStyle = options.borderColor;
                },
                stroke: function (options) {
                    this.data.stroke();
                },
                strokeRect: function (options) {
                    this.data.strokeRect(options.x, options.y, options.x1, options.y1);
                },
                lineCap: function (options) {
                    this.data.lineCap = options.val;
                },
                lineDashOffset: function (options) {
                    this.data.lineDashOffset = options.val;
                },
                lineJoin: function (options) {
                    this.data.lineJoin = options.val;
                },
                clearRect: function (options) {
                    this.data.clearRect(options.x, options.y, options.x1, options.y1)
                },
                miterLimit: function (options) {
                    this.data.miterLimit = options.val;
                },
                save: function () {
                    this.data.save()
                },
                font: function (options) {
                    this.data.font = options.val;
                },
                textAlign: function (options) {
                    this.data.textAlign = options.val;
                },
                textBaseline: function (options) {
                    this.data.textBaseline = options.val;
                },
                restore: function () {
                    this.data.restore()
                },
                globalCompositeOperation: function (options) {
                    this.data.globalCompositeOperation = options.val || 'destination-out';
                },
                quadraticCurveTo: function (options) {
                    this.data.quadraticCurveTo(options.cpx, options.cpy, options.x, options.y);
                },
                bezierCurveTo: function (options) {
                    this.data.bezierCurveTo(options.cp1x, options.cp1y, options.cp2x, options.cp2y, options.x, options.y);
                },
                fillText: function (options) {
                    this.data.fillText(options.text, options.x, options.y);
                },
                strokeText: function (options) {
                    this.data.strokeText(options.text, options.x, options.y);
                },
                setLineDash: function (options) {
                    this.data.setLineDash = options.val;
                }
            });
            q[0].defineProperties(o[1][250].prototype, {
                ctx: {
                    get: function () {
                        return this.data
                    },
                    set: function (value) {
                        this.val = value;
                    }
                }
            });
            s3.node._context = o[1][250];
        })();
        // _set
        (function () {
            var q = s3.init;
            var o = s3.category;
            q[0] = o[0];
            q[1][499].prototype.constructor = o[1][499];
            o[1][499] = q[1][499];
            q[0].assign(o[1][499].prototype, {
                initialize: function () {
                    return this,
                    s3.Aset.call(this, arguments),
                    new s3.Aset(arguments[0])
                },
                attr: function (attr) {
                    // see it with an attribute
                    // if exit this.data[0][attr]
                    try {
                        if (attr in this.data[0])
                            return this.data.unshift(attr),
                            this;
                        else return void this
                    } catch (e) {
                        throw e
                    }
                },
                val: function (value) {
                    var data = this.data;
                    var getShift = data.shift();
                    if (_s3.isStr(value) || _s3.isNum(value))
                        data[0][getShift] = Number(value);
                    else
                        return data[0][getShift];
                    return this
                }
            });
            s3.space._set = o[1][499];
        })();
        /*
        *@circle methods.
        *@implemention draw 2d.
        */
        (function () {
            var q = s3.init;
            var o = s3.category;
            q[0] = o[0];
            q[1][299].prototype.constructor = o[1][299];
            o[1][299] = q[1][299];
            q[0].assign(o[1][299].prototype, {
                initialize: function () {
                    return this,
                    o[1][299].call(this, arguments),
                    o[1][299].prototype
                },
                draw: function (ctx, getShapeProperty) {
                    var that = this;
                    var can = this.data[0];
                    var cw = can.canvas.offsetWidth;
                    var ch = can.canvas.offsetHeight;
                    var ctx2M = new ctx(can);
                    var shapeProperty = new getShapeProperty();
                    var collectionProperty = this.collection[0].characteristic;
                    var propertybgcolor = collectionProperty.bg;
                    this.callState = new s3.node._state();
                    this.reRender(collectionProperty.property, {
                        bg: propertybgcolor
                    }, ctx2M, Object.assign(shapeProperty, {
                        x1: cw,
                        y1: ch
                    }), that)
                    this.removeCommon(collectionProperty.property, this.noMotionArrCount)
                    return {
                        changedState: that.need == that.notNeed ? 0 : 1,
                        reloadAnimation: function () {
                            that.reRender(that.collection[0].characteristic.property, {
                                bg: propertybgcolor
                            }, ctx2M, shapeProperty, that)
                        }
                    }
                },
                mergeProperties: function (shapeProperties, thing) {
                    var combineParams = new Array;
                    var startAngles = thing.startAngles * shapeProperties.pi;
                    var stopAngles = thing.stopAngles * shapeProperties.pi;
                    if (thing instanceof Object) {
                        combineParams.push({
                            x: thing.x || shapeProperties.x,
                            y: thing.y || shapeProperties.y,
                            color: thing.color || shapeProperties.color,
                            speed: thing.speed || shapeProperties.speed,
                            radius: thing.radius || shapeProperties.radius,
                            trails: thing.trails || shapeProperties.trails,
                            startAngles: startAngles || shapeProperties.startAngles,
                            stopAngles: stopAngles || shapeProperties.stopAngles,
                            motion: thing.motion || shapeProperties.motion,
                            bMoveMode: thing.bMoveMode || shapeProperties.bMoveMode,
                            method: thing.method || shapeProperties.method,
                            x1: thing.x1 || shapeProperties.x1,
                            y1: thing.y1 || shapeProperties.y1
                        })
                    }
                    Object.assign(this.iterator, combineParams[0]);
                },
                excuteReRender: function (particle, ctx2M, shapeProperty, that) {
                    for (var j = 0, len = particle.length; j < len; j++) {
                        this.mergeProperties(shapeProperty, particle[j]);
                        ctx2M.hook2D('beginPath');
                        ctx2M.hook2D('moveTo', {
                            x: this.iterator.x,
                            y: this.iterator.y
                        });
                        if (this.iterator.motion == shapeProperty.motion) {
                            this._arc(ctx2M, null);
                            this.notNeed = false;
                            this.noMotionArrCount.push(j)
                        }
                        else if (!this.moveModel.indexOf(this.iterator.motion)) {
                            this.loop(ctx2M, shapeProperty, j, that),
                            this.need = true;
                        }
                        else return null;
                        ctx2M.hook2D('fillStyle', {
                            color: this.iterator.color
                        });
                        ctx2M.hook2D('fill');
                        ctx2M.hook2D('closePath');
                        ctx2M.hook2D('restore')
                    }
                },
                reRender: function (particle, getCollectionProperty, ctx2M, shapeProperty, that) {
                    ctx2M.hook2D('fillStyle', {
                        color: getCollectionProperty.bg || shapeProperty.bg
                    });
                    ctx2M.hook2D('fillRect', {
                        x: '0',
                        y: '0',
                        x1: shapeProperty.x1,
                        y1: shapeProperty.y1
                    });
                    if (this.noMotionArrObj.length > 0) {
                        this.collection[0].characteristic.property = particle.concat(this.noMotionArrObj)
                        this.noMotionArrObj.length = 0
                    }
                    this.excuteReRender.call(that, particle, ctx2M, shapeProperty, that)
                },
                _arc: function (ctx2M, options) {
                    ctx2M.hook2D('arc', Object.assign({
                        x: this.iterator.x,
                        y: this.iterator.y,
                        radius: this.iterator.radius,
                        startAngles: this.iterator.startAngles,
                        stopAngles: this.iterator.stopAngles,
                        bool: false
                    }, options));
                },
                removeCommon: function (acceptCollection, noMotionArrCount) {
                    var nl = noMotionArrCount.length;
                    while (nl--) {
                        this.noMotionArrObj.push(acceptCollection[noMotionArrCount[nl]])
                        acceptCollection[noMotionArrCount[nl]] = false
                    }
                    var na = new Array();
                    for (var i = 0; i < acceptCollection.length; i++) {
                        if (acceptCollection[i] instanceof Object)
                            na.push(acceptCollection[i])
                        else
                            continue;
                    }
                    this.collection[0].characteristic.property = na
                },
                loop: function (ctx2M, getShapeProperty, j, that) {
                    // the number of shape depends on 'for' loops
                    try {
                        var results = this.exposeJsDataInterface();
                        if (!(results instanceof Array)) {
                            that.need = false
                            throw "in the component you bind your 'method' is not corrent."
                        }
                    } catch (err) {
                        console.log(err)
                    }
                    this.webView(results, ctx2M);
                    this.changedJsData(j)
                },
                exposeJsDataInterface: function () {
                    var exposeDataSource = {
                        properties: this.collection[0].characteristic.property,
                        current: this.iterator,
                        setState: this.setState
                    };
                    return this.iterator.method.call(this, exposeDataSource);
                },
                webView: function (options, ctx2M) {
                    var curve = this.curve;
                    while (curve--) {
                        var x = options[curve][0];
                        var y = options[curve][1];
                        this._arc(ctx2M, {
                            x: x,
                            y: y
                        })
                    }
                },
                changedJsData: function (j) {
                    Object.assign(this.collection[0].characteristic.property[j], this.callState.state);
                },
                Excute2DEngine: function () {
                    var that = this
                    var args = arguments[0]
                    // accept ctx 2d property.
                    // get an Array of integer
                    var domain = this.collection[0]['characteristic']
                    var params = {
                        can: args[0],
                        config: args[1],
                        constroll: args[2]
                    }
                    for (var j = 0, getParams = params.config['property']; j < getParams.length; j++) {
                        Object.assign(domain.property[j], getParams[j]);
                    }
                    this.o_OPEN = params.constroll.open;
                    this.data.push(params.can);
                    if (this.o_OPEN)
                        this.s_SPEED = params.constroll.speed;
                    Object.assign(this.collection[0]['characteristic'], domain);
                    // get the default properties and parameters
                    var ctx = s3.node._context;
                    var shapeProperty = s3.space._shape;
                    return {
                        streaming: function () {
                            return that.draw.call(that, ctx, shapeProperty)
                        }
                    }
                }
            });
            q[0].defineProperties(o[1][299].prototype, {});
            s3.tween._circle = o[1][299];
        })();
        (function () {
            var q = s3.init;
            var o = s3.category;
            q[0] = o[0];
            q[1][239].prototype.constructor = o[1][239];
            o[1][239] = q[1][239];
            o[1][239].createCircle = function (options, cTimes) {
                return new s3.node._createCircle;
            }
            q[0].assign(o[1][239].prototype, {
                initialize: function () {
                    return this,
                    o[1][239].call(this, arguments),
                    o[1][239].prototype
                },
            });
            s3.node._createCircle = o[1][239];
        })();
        (function () {
            var q = s3.init;
            var o = s3.category;
            q[0] = o[0];
            q[1][300].prototype.constructor = o[1][300];
            o[1][300] = q[1][300];
            q[0].assign(o[1][300].prototype, {
                initialize: function (argument) {},
            });
            q[0].defineProperties(o[1][300].prototype, {});
            s3.space._shape = o[1][300];
        })();
        Shape.plugin.create('set', s3.space._set);
        Shape.plugin.create('tool', s3.space._tool);
        Shape.plugin.create('circle', s3.tween._circle);
        var _build = new s3();
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
        _s3.isBool = _build.isBool;
        _s3.extend = _build.extend;
        _s3.toString = _build.toString;
        _s3.parse = _build.parse;
        _s3.indexof = _build.indexof;
        _s3.debug = _build.debug;
        _s3.shape = _build.Shape;
        _s3.body = _build.body;
    });
})(typeof (window) !== 'undefined' ? this : global);