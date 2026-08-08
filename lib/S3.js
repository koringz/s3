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
        var CIRCLE_s = 'circle', 
        SHAPE_s = 'shape', 
        LINE_s = 'line', 
        ARC_s = 'arc', 
        RECT_s = 'rect', 
        WAVE_s = 'wave', 
        SECTORS_s = 'sectors', 
        HAT_s = 'hat',
        HILL_s = 'hill',
        ELLIPSE_s = 'ellipse';  // 图形类型编号

        var GRADIENT_s = 'createGradient',
        GRADIENT20_s = 'createGradient20',
        GRADIENT30_s = 'createGradient30',
        POINTER_CONFIG_s = 'pointerConfig',

        START_CONFIG_s = 'startConfig',
        STATE_s = 'state',
        POSITION_s = 'position',
        DISTANCE_s = 'distance',
        SET_s = 'set',
        FREEZE_PROPERTY_s = 'freezeProperty',
        PLUGIN_s = 'plugin',
        COVER_2D_PROPERTY_s = 'cover2DProperty',
        CACHE_s = 'cache',
        RENDER_s = 'render';
        
        var TOOL_s = 'tool',
        POSITION_CONTROL_s = 'pos',
        ANIMATION_s = 'animation',
        DRAW_s = 'draw',
        TRANSFER_s = 'transfer',
        RENDER_ENGINE_s = 'render',
        SCENE_s = 'scene',
        AMOUNT_s = 'amount',
        CONTEXT_s = 'context',
        MATH_s = 'math';        
        
        var WAVE_SHAPE_s = 'waveShape',
        CIRCLE_SHAPE_s = 'circleShape',
        HILL_SHAPE_s = 'hillShape',
        VALIDATE_DRAW_PROPERTY_s = 'validateDrawProperty',
        COMPARE_PROPERTY_s = 'compareProperty';

        var ALGO_s = 'algo';
        
        // var SHAPE_RANGE_START = 299,
        // SHAPE_RANGE_END = 200;

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
                isFun: function (options) {
                    return typeof (options) === 'function'
                },
                isNum: function (options) {
                    return typeof (options) === 'number'
                },
                isBool: function (options) {
                    return typeof (options) === 'boolean'
                },
                isUndefined: function (options) {
                    return typeof options === 'undefined'
                },
                isObj: function (options) {
                    return Object.prototype.toString.call(options) === '[object Object]'
                },
                isArr: function (options) {
                    return Array.isArray(options) || options.constructor.name == 'Array'
                },
                isNan: function (options) {
                    return isNaN(options)
                },
                isNull: function  (options) {
                    return options === null
                },
                trim: function (options) {
                    return options.replace(/(\s*)/g, '');
                },
                stringify: function (options) {
                    return JSON.stringify(options);
                },
                parse: function (options) {
                    return JSON.parse(options);
                },
                extend: function (prop, options) {
                    for (var pop in options) {
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
                },
                algo: function () {
                    // // 或直接用 new s3.category[1]['algo']()
                    return new s3.space._algo();
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
            var category = [
                {},
                {
                    tool: function () {
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
                    amount: function (num) {
                        this.name = 'amount';
                        this.nums = num;
                    },
                    createGradient: function () {
                        this.name = 'createGradient';
                    },
                    createGradient20: function () {
                        this.name = 'createGradient20';
                    },
                    createGradient30: function () {
                        this.name = 'createGradient30';
                    },
                    pointerConfig: function () {
                        this.name = 'pointerConfig';
                        this.TYPE = arguments[0].type;
                        this.PROPERTY = arguments[0].property;
                    },
                    startConfig: function () {
                        this.name = 'startConfig';
                        this.SPEED = 0.999999999;
                        this.OPEN = 0;
                    },
                    state: function () {
                        this.name = 'state';
                        this.state = null;
                    },
                    shape: function () {
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
                            createCircle: category[1][CIRCLE_SHAPE_s].createCircle,
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
                        this.custom = {};
                    },
                    circle: function () {
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
                    line: function () {
                        this.name = 'line';
                        this.data = [];
                        this.iterator = {};
                        this.collection = arguments[0];
                    },
                    arc: function () {
                        this.name = 'arc';
                        this.data = [];
                        this.iterator = {};
                        this.collection = arguments[0];
                    },
                    rect: function () {
                        this.name = 'rect';
                        this.data = [];
                        this.iterator = {};
                        this.collection = arguments[0];
                    },
                    wave: function () {
                        this.name = 'wave';
                        this.stop = !0;
                        this.s_SPEED = 0;
                        this.o_OPEN = 0;
                        this.data = [];
                        this.iterator = {};
                        this.collection = arguments[0];
                    },
                    sectors: function () {
                        this.name = 'sectors';
                        this.data = [];
                        this.iterator = {};
                        this.collection = arguments[0];
                    },
                    hat: function () {
                        this.name = 'hat';
                        this.data = [];
                        this.iterator = {};
                        this.collection = arguments[0];
                    },
                    hill: function () {
                        this.name = 'hill';
                        this._direction = ['top', 'left', 'right', 'bottom'];
                        this.data = [];
                        this.iterator = {};
                        this.radius = 0.0001;
                        this.collection = arguments[0];
                    },
                    ellipse: function () {
                        this.name = 'ellipse';
                        this._direction = ['top', 'left', 'right', 'bottom'];
                        this.data = [];
                        this.iterator = {};
                        this.radius = 0.0001;
                        this.collection = arguments[0];
                    },
                    validateDrawProperty: function () {
                        this.name = 'validateDrawProperty';
                        // this.absolute_position;
                        // this.setMatchData;
                        // this.cross;
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
                    compareProperty: function () {
                        this.name = 'compareProperty';
                        this.iterator = {};
                        this.data = [];
                    },
                    position: function (options) {
                        this.name = 'position';
                        this.data = [options];
                    },
                    distance: function (options) {
                        this.name = 'distance';
                        this.data = [options];
                        this.f_speed;
                    },
                    context: function (options) {
                        this.name = 'context';
                        this.data = [options];
                    },
                    waveShape: function () {
                        this.name = 'waveShape';
                        this.data = [];
                    },
                    circleShape: function () {
                        this.name = 'circleShape';
                        this.data = [];
                    },
                    hillShape: function () {
                        this.name = 'hillShape';
                        this.data = [];
                    },
                    math: function () {
                        this.name = 'math';
                        this.data = [];
                        this.ABS = [];
                        this.framesRate = [];
                    },
                    set: function () {
                        this.name = 'set';
                        this.data = [];
                        if (typeof arguments === 'object')
                            this.data.push(arguments[0]);
                    },
                    freezeProperty: function () {
                        this.name = 'freezeProperty';
                        this.isFreezeProperties = arguments[0];
                        Object.freeze(this.isFreezeProperties)
                    },
                    plugin: function () {
                        this.name = 'plugin';
                        shape.plugin(arguments);
                    },
                    cache: function () {
                        this.name = 'cache';
                    },
                    cover2DProperty: function () {
                        this.name = 'cover2DProperty';
                    },
                    render: function () {
                        this.name = 'render';
                    },
                    // 添加 algo 构造函数
                    algo: function () {
                        this.name = 'algo';
                        this.data = [];
                        this.result = null;
                        this.history = [];          // 可记录计算历史
                        this.precision = 6;        // 小数精度
                    }
                }, 
                {
                    get: function () {
                        this.name = 'get';
                        // used gesture pointer.
                    },
                    set: function () {
                        this.name = 'set';
                    },
                    add: function () {
                        this.name = 'add';
                    },
                    on: function () {
                        this.name = 'on';
                    }
                }, 
                {
                    gesture: function () {
                        this.name = 'gesture';
                        // used gesture pointer.
                        return {
                            linear: function (argument) {},
                            easein: function (argument) {},
                            easeout: function (argument) {}
                        }
                    }
                }
            ];
            var requestAnimation = win.requestAnimationFrame || win.webkitRequestAnimationFrame
                || win.mozRequestAnimationFrame || win.msRequestAnimationFrame
                || function (callback) { setTimeout(callback, 1000 / 60); };

            s3.category = category;
            s3.requestAnimation = requestAnimation;
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
            // 自动适配高清屏
            var el = typeof this.dist[0] === 'string' ? doc.querySelector(this.dist[0]) : this.dist[0];
            if (el && el.getContext) {
                var dpr = win.devicePixelRatio || 1;
                if (dpr > 1) {
                    el.width = (options.width || el.width) * dpr;
                    el.height = (options.height || el.height) * dpr;
                    el.style.width = (options.width || el.width) + 'px';
                    el.style.height = (options.height || el.height) + 'px';
                    el.getContext('2d').scale(dpr, dpr);
                }
            }
        }
        function Shape(str, options, previous) {
            // inject parameters;
            // Extend previous method of preotype chain properties.
            return new s3.category[1][TOOL_s],
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
            s3.category[1][TOOL_s].prototype.constructor = TOOL_s;
            Object.assign(s3.category[1][TOOL_s].prototype, {
                initialize: function () {
                    return this,
                    new s3.category[1][TOOL_s](arguments[0].getContext('2d'))
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
                    var amounts = new s3.category[1][AMOUNT_s](params);
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
                                const SHAPE_RANGE_Name = args[0];
                                if (_s3.isStr(SHAPE_RANGE_Name) && _s3.isObj(args[1])) {
                                    that.pipe.push({
                                        componentName: SHAPE_RANGE_Name,
                                        characteristic: args[1]
                                    });
                                }
                                var getPropBindObject;
                                try {
                                    if (s3.category[1][SHAPE_RANGE_Name]?.prototype?.constructor === SHAPE_RANGE_Name) {
                                        getPropBindObject = SHAPE_RANGE_Name;
                                    }
                                } catch (e) {
                                    throw 'no defaults the method name.'
                                }
                                var utils = new s3.category[1][getPropBindObject](that.pipe);
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
            Object.defineProperties(s3.category[1][TOOL_s].prototype, {
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
            s3.category[1][AMOUNT_s].prototype.constructor = AMOUNT_s;
            Object.assign(s3.category[1][AMOUNT_s].prototype, {
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
            Object.defineProperties(s3.category[1][AMOUNT_s].prototype, {
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

            s3.category[1][POINTER_CONFIG_s].prototype.constructor = POINTER_CONFIG_s;
            Object.assign(s3.category[1][POINTER_CONFIG_s].prototype, {
                initialize: function () {
                    return this.val
                }
            });
            Object.defineProperties(s3.category[1][POINTER_CONFIG_s].prototype, {
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
            s3.category[1][START_CONFIG_s].prototype.constructor = START_CONFIG_s;
            Object.assign(s3.category[1][START_CONFIG_s].prototype, {
                initialize: function () {
                    return this.val
                }
            });
            Object.defineProperties(s3.category[1][START_CONFIG_s].prototype, {
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

            s3.category[1][STATE_s].prototype.constructor = STATE_s;
            Object.assign(s3.category[1][STATE_s].prototype, {
                initialize: function () {
                    return this.val
                }
            });
            Object.defineProperties(s3.category[1][STATE_s].prototype, {
                'setState': {
                    set: function (val) {
                        this.state = val
                    }
                }
            });
            s3.space._tool = s3.category[1][TOOL_s];
            s3.node._pointerconfig = s3.category[1][POINTER_CONFIG_s];
            s3.node._startConfig = s3.category[1][START_CONFIG_s];
            s3.node._state = s3.category[1][STATE_s];
        })();
        /*
        *2D prototype
        *Simulation canvas 2D methods
        *Drawing shape call 2D object
        */
        (function () {
            s3.category[1][CONTEXT_s].prototype.constructor = CONTEXT_s;
            Object.assign(s3.category[1][CONTEXT_s].prototype, {
                initialize: function () {
                    return this,
                    _context2d.call(this, arguments[0]),
                    _context2d.prototype
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
                fill: function (path) {
                     if (path) this.data.fill(path); else this.data.fill();
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
            Object.defineProperties(s3.category[1][CONTEXT_s].prototype, {
                ctx: {
                    get: function () {
                        return this.data
                    },
                    set: function (value) {
                        this.val = value;
                    }
                }
            });
            s3.node._context = s3.category[1][CONTEXT_s];
        })();
        // _set
        (function () {
            s3.category[1][SET_s].prototype.constructor = SET_s;
            Object.assign(s3.category[1][SET_s].prototype, {
                initialize: function () {
                    return this,
                    s3.category[1][SET_s].call(this, arguments),
                    new s3.category[1][SET_s](arguments[0])
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
            s3.space._set = s3.category[1][SET_s];
        })();
        /*
        *@circle methods.
        *@implemention draw 2d.
        */
        (function () {
            s3.category[1][CIRCLE_s].prototype.constructor = CIRCLE_s;
            Object.assign(s3.category[1][CIRCLE_s].prototype, {
                initialize: function () {
                    return this,
                    s3.category[1][CIRCLE_s].call(this, arguments),
                    s3.category[1][CIRCLE_s].prototype
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
                            y1: thing.y1 || shapeProperties.y1,
                            custom: thing.custom || shapeProperties.custom
                        })
                    }
                    Object.assign(this.iterator, combineParams[0]);
                },
                excuteReRender: function (particle, ctx2M, shapeProperty, that) {
                    var groups = {};
                    for (var j = 0, len = particle.length; j < len; j++) {
                        this.mergeProperties(shapeProperty, particle[j]);
                        if (this.iterator.motion == shapeProperty.motion) {
                            var color = this.iterator.color || shapeProperty.color;
                            if (!groups[color]) groups[color] = new Path2D();
                            var cx = this.iterator.x, cy = this.iterator.y;
                            var r = this.iterator.radius || 5;
                            groups[color].moveTo(cx, cy);
                            groups[color].lineTo(cx + r * Math.cos(this.iterator.startAngles),
                                cy + r * Math.sin(this.iterator.startAngles));
                            groups[color].arc(cx, cy, r,
                                this.iterator.startAngles,
                                this.iterator.stopAngles);
                            groups[color].closePath();
                            this.notNeed = false;
                            this.noMotionArrCount.push(j)
                        }
                        else if (_s3.indexof(this.moveModel, this.iterator.motion) > 0) {
                            this.loop(ctx2M, shapeProperty, j, that, groups),
                            this.need = true;
                        }
                        else return null;
                    }
                    for (var color in groups) {
                        ctx2M.hook2D("fillStyle", { color: color });
                        ctx2M.hook2D("fill", groups[color]);
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
                loop: function (ctx2M, getShapeProperty, j, that, groups) {
                    if (typeof this.iterator.method !== "function") {
                        var color = this.iterator.color;
                        if (!groups[color]) groups[color] = new Path2D();
                        var cx = this.iterator.x, cy = this.iterator.y;
                        var r = this.iterator.radius || 5;
                        groups[color].moveTo(cx, cy);
                        groups[color].lineTo(cx + r * Math.cos(this.iterator.startAngles),
                            cy + r * Math.sin(this.iterator.startAngles));
                        groups[color].arc(cx, cy, r,
                            this.iterator.startAngles,
                            this.iterator.stopAngles);
                        groups[color].closePath();
                        return;
                    }
                    try {
                        var results = this.exposeJsDataInterface();
                        if (!(results instanceof Array)) {
                            that.need = false
                            throw "in the component you bind your 'method' is not corrent."
                        }
                    } catch (err) {
                        console.log(err)
                    }
                    this.buildPath2D(results, groups);
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
                buildPath2D: function (options, groups) {
                    var color = this.iterator.color;
                    if (!groups[color]) groups[color] = new Path2D();
                    var r = this.iterator.radius || 5;
                    var curve = this.curve;
                    while (curve--) {
                        var cx = options[curve][0];
                        var cy = options[curve][1];
                        var sx = cx + r * Math.cos(this.iterator.startAngles);
                        var sy = cy + r * Math.sin(this.iterator.startAngles);
                        groups[color].moveTo(cx, cy);
                        groups[color].lineTo(sx, sy);
                        groups[color].arc(cx, cy, r,
                            this.iterator.startAngles,
                            this.iterator.stopAngles);
                        groups[color].closePath();
                    }
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
            Object.defineProperties(s3.category[1][CIRCLE_s].prototype, {});
            s3.tween._circle = s3.category[1][CIRCLE_s];
        })();
        /*
        *@rect methods
        *@implemention draw 2d rect.
        */
        (function () {
            s3.category[1][RECT_s].prototype.constructor = RECT_s;
            Object.assign(s3.category[1][RECT_s].prototype, {
                initialize: function () {
                    return this,
                    s3.category[1][RECT_s].call(this, arguments),
                    s3.category[1][RECT_s].prototype
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
                    return {
                        changedState: 1,
                        reloadAnimation: function () {
                            that.reRender(that.collection[0].characteristic.property, {
                                bg: propertybgcolor
                            }, ctx2M, shapeProperty, that)
                        }
                    }
                },
                mergeProperties: function (shapeProperties, thing) {
                    var combineParams = [];
                    if (thing instanceof Object) {
                        combineParams.push({
                            x: thing.x || shapeProperties.x,
                            y: thing.y || shapeProperties.y,
                            width: thing.width || shapeProperties.width,
                            height: thing.height || shapeProperties.height,
                            color: thing.color || shapeProperties.color
                        })
                    }
                    Object.assign(this.iterator, combineParams[0]);
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
                    this.excuteReRender.call(that, particle, ctx2M, shapeProperty, that)
                },
                excuteReRender: function (particle, ctx2M, shapeProperty, that) {
                    for (var j = 0, len = particle.length; j < len; j++) {
                        this.mergeProperties(shapeProperty, particle[j]);
                        ctx2M.hook2D('fillStyle', {
                            color: this.iterator.color
                        });
                        ctx2M.hook2D('fillRect', {
                            x: this.iterator.x,
                            y: this.iterator.y,
                            x1: this.iterator.width || 20,
                            y1: this.iterator.height || 20
                        });
                    }
                },
                Excute2DEngine: function () {
                    var that = this
                    var args = arguments[0]
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
                    var ctx = s3.node._context;
                    var shapeProperty = s3.space._shape;
                    return {
                        streaming: function () {
                            return that.draw.call(that, ctx, shapeProperty)
                        }
                    }
                },
            });
            Object.defineProperties(s3.category[1][RECT_s].prototype, {});
            s3.tween._rect = s3.category[1][RECT_s];
        })();
        (function () {
            s3.category[1][CIRCLE_SHAPE_s].prototype.constructor = CIRCLE_SHAPE_s;
            s3.category[1][CIRCLE_SHAPE_s].createCircle = function (options, cTimes) {
                return new s3.node._createCircle;
            }
            Object.assign(s3.category[1][CIRCLE_SHAPE_s].prototype, {
                initialize: function () {
                    return this,
                    s3.category[1][CIRCLE_SHAPE_s].call(this, arguments),
                    s3.category[1][CIRCLE_SHAPE_s].prototype
                },
            });
            s3.node._createCircle = s3.category[1][CIRCLE_SHAPE_s];
        })();
        (function () {
            s3.category[1][SHAPE_s].prototype.constructor = SHAPE_s;
            Object.assign(s3.category[1][SHAPE_s].prototype, {
                initialize: function (argument) {},
            });
            Object.defineProperties(s3.category[1][SHAPE_s].prototype, {});
            s3.space._shape = s3.category[1][SHAPE_s];
        })();
        (function () {
            var algoPrototype = {
                initialize: function () {
                    return this;
                },

                // 设置计算精度
                precision: function (num) {
                    this.precision = num;
                    return this;
                },

                // 线性插值
                lerp: function (a, b, t) {
                    var result = a + (b - a) * t;
                    this._record('lerp', [a, b, t], result);
                    return Number(result.toFixed(this.precision));
                },

                // 贝塞尔路径计算
                bezier: function (points, t) {
                    // ... 实现贝塞尔计算
                    this._record('bezier', [points, t], result);
                    return result;
                },

                // 缓存链式调用的结果
                value: function () {
                    return this.result;
                },

                // 内部记录方法
                _record: function (method, args, result) {
                    this.result = result;
                    this.history.push({
                        method: method,
                        args: args,
                        result: result,
                        time: Date.now()
                    });
                }
            };
            Object.assign(s3.category[1][ALGO_s].prototype, algoPrototype);
            // 如果需要直接挂在 s3.space 上供插件注册
            s3.space._algo = s3.category[1][ALGO_s];
        })();

        Shape.plugin.create('set', s3.space._set);
        Shape.plugin.create('tool', s3.space._tool);
        Shape.plugin.create('circle', s3.tween._circle);
        Shape.plugin.create('rect', s3.tween._rect);
        Shape.plugin.create('algo', s3.space._algo);

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
        _s3.isNan = _build.isNan;
        _s3.isNull = _build.isNull;
        _s3.isUndefined = _build.isUndefined;
        _s3.stringify = _build.stringify;
        _s3.parse = _build.parse;
        _s3.extend = _build.extend;
        _s3.indexof = _build.indexof;
        _s3.debug = _build.debug;
        _s3.shape = _build.Shape;
        _s3.body = _build.body;
        _s3.algo = _build.algo;
    });
})(typeof (window) !== 'undefined' ? this : global);