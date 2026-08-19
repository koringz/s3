(function (factory) {
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
            return new s3.order(element,options)
        }
        ;// Add a val in the methods.
        (function () {
            var order = function (element, options) {};
            order.prototype = {
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
                    return Array.isArray(options)
                },
                isNan: function (options) {
                    return isNaN(options)
                },
                isNull: function  (options) {
                    return options === null
                },
                trim: function (options) {
                    return options.replace(/(\s+)/g, '');
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
                body: function (options) {
                    return new body(options)
                },
                algo: function () {
                    return new s3._algo();
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
                        this.hasMoving = false;
                        this.hasStatic = false;
                        this.o_OPEN = 0;
                        this.iterator = {};
                        this.callState = {};
                        this.setState = function (val, option) {
                            that.callState.setState = val
                        }
                        this.method = function () {}
                        this.curve = 1;
                        this.moveModel = ['move'];
                        this.bMoveMode = !1;
                        this.currentTimes = (new Date).getTime();
                        this.collection = arguments[0];

                        this._stopFp = new Map();
                        this._moveFp = new Map();
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
            var requestAnimation = (win.requestAnimationFrame || win.webkitRequestAnimationFrame
                || win.mozRequestAnimationFrame || win.msRequestAnimationFrame
                || function (callback) { setTimeout(callback, 1000 / 60); }).bind(win);

            s3.category = category;
            s3.requestAnimation = requestAnimation;
        })();
        // this is a s3js bracket
        function body(options) {
            this.dist = [options];
            const getShapeInstance = new Shape();

            this.tool = getShapeInstance?.tool(options);
            this.mount = getShapeInstance;
            
            return true
        }
        body.prototype.component = function (str, options) {
            var tool = this.tool;
            // 判断是否已有其他组件，若有则强制背景透明
            if (tool.life.length > 0) {
                options.bg = 'transparent';
            } else {
                options.bg = options.bg || '#eef';
            }

            // 场景 = 默认定义一个图层 data[0], 后期自定义节点图层 
            var scene = tool.scene;

            // 
            var callManager = new tool.manager(scene);
            var addComponent = callManager.graphics.addComponent(str, options);
            addComponent.start({
                speed: 0.9,
                open: true
            });
            
            tool.root.addChild(callManager);
            return this
        }

        body.prototype.render = function (options) {
            this.tool.render(!this.bool);
        }
        body.prototype.set = function (options) {
            var params = [options];
            var results = this.mount.set(this.dist[0]);
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
            return this;
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
            s3.category[1][TOOL_s].prototype._constructor = TOOL_s;
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
                    this.pipe = [];
                    this.storeBufferSlice = [];
                    this.storeStartConfig = [];
                    return {
                        // 制作图形
                        graphics: {
                            config: {

                                // 配置开始参数
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
                            // 用户调用组件画图
                            // 新增组件 - 图形
                            addComponent: function () {
                                var args = arguments;
                                const SHAPE_RANGE_Name = args[0];
                                const getCharacteristic = args[1]
                                if (_s3.isStr(SHAPE_RANGE_Name) && _s3.isObj(getCharacteristic)) {
                                    that.pipe.push({
                                        componentName: SHAPE_RANGE_Name,
                                        characteristic: getCharacteristic
                                    });
                                }
                                var getPropBindObject;
                                try {
                                    if (s3.category[1][SHAPE_RANGE_Name]?.prototype?._constructor === SHAPE_RANGE_Name) {
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
                render: function (bool) {
                    this.life.forEach(function(item) {
                        var stream = item.stream;
                        if (!(stream instanceof Function) || !bool) return;
                        var ms = null;
                        var going = 0;
                        var results = null;
                        (function startLoop() {
                            try {
                                if (going) {
                                    results.reloadAnimation();
                                } else {
                                    results = stream(bool);
                                }
                                if (results && results.changedState) {
                                    s3.requestAnimation(startLoop);
                                    if (ms) clearTimeout(ms);
                                    else ms = setTimeout(startLoop, 17);
                                    going = 1;
                                }
                            } catch (err) {
                                console.error(err);
                            }
                        })();
                    });
                }
            });
            Object.defineProperties(s3.category[1][TOOL_s].prototype, {
                scene: {
                    get: function () {
                        var originalProperty = this.data[0];
                        return originalProperty
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
                            // 新增子组件 - 粒子轮询流
                            addChild: function (options) {
                                var _arr = []
                                  , depthCall = options.depthCall;
                                depthCall.forEach(function (opt) {
                                    _arr.push(that.data[0], options.graphics.config.set, {
                                        speed: options.startSetting[0].speed,
                                        open: options.startSetting[0].open
                                    }, opt)
                                });
                                var maybeLoop = _arr.pop().execute2DEngine(_arr);
                                var stream = function (option) {
                                    if (options)
                                        return maybeLoop.streaming()
                                }
                                return that.life.push({
                                    stream
                                })
                            },
                        }
                    },
                }
            });
            // name = 'amount()'
            s3.category[1][AMOUNT_s].prototype._constructor = AMOUNT_s;
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

            s3.category[1][POINTER_CONFIG_s].prototype._constructor = POINTER_CONFIG_s;
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
            s3.category[1][START_CONFIG_s].prototype._constructor = START_CONFIG_s;
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

            s3.category[1][STATE_s].prototype._constructor = STATE_s;
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
            s3.category[1][CONTEXT_s].prototype._constructor = CONTEXT_s;
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
                    this.data.setLineDash(options.val);
                },
                drawImage: function (options) {
                    if (options.dw != null) {
                        this.data.drawImage(options.image, options.x, options.y, options.dw, options.dh);
                    } else {
                        this.data.drawImage(options.image, options.x, options.y);
                    }
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
            s3.category[1][SET_s].prototype._constructor = SET_s;
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
            s3.category[1][CIRCLE_s].prototype._constructor = CIRCLE_s;
            Object.assign(s3.category[1][CIRCLE_s].prototype, {
                initialize: function () {
                    return this,
                    s3.category[1][CIRCLE_s].call(this, arguments),
                    s3.category[1][CIRCLE_s].prototype
                },
                execute2DEngine: function () {
                    this.can_node = arguments[0][0]
                    // accept ctx 2d property.
                    // get an Array of integer
                    // var recieve_data = this.collection[0]['characteristic']
                    
                    // for (var j = 0, getParams = params.config['property']; j < getParams.length; j++) {
                    //     Object.assign(recieve_data.property[j], getParams[j]);
                    // }

                    var moving_controll = arguments[0][2];
                    this.o_OPEN = moving_controll.open;
                    
                    if (this.o_OPEN)
                        this.s_SPEED = moving_controll.speed;

                    // Object.assign(this.collection[0]['characteristic'], recieve_data);

                    // get the default properties and parameters
                    var ctx = s3.node._context;
                    var shapeProperty = s3.space._shape;
                    var that = this
                    return {
                        streaming: function () {
                            return that.draw(ctx, shapeProperty)
                        }
                    }
                },
                draw: function (ctx, getShapeProperty) {
                    var cw = this.can_node.canvas.offsetWidth;
                    var ch = this.can_node.canvas.offsetHeight;

                    // 获得2d 原型方法
                    this.ctx2d = new ctx(this.can_node);

                    // 默认图形属性参数
                    var shapeProperty = new getShapeProperty();

                    // 通道粒子数据
                    var props = this.collection[0].characteristic;

                    // 调用状态
                    // loop 循环方法 内部循环方法 changedJsData
                    this.callState = new s3.node._state();

                    Object.assign(shapeProperty, {
                        x1: cw,
                        y1: ch
                    })

                    this._readyRender(props, shapeProperty);

                    this._initStopsAndMoves(props.property, shapeProperty);

                    this._renderStop(props.property, shapeProperty, cw, ch)
                    this._renderMove(props.property, shapeProperty)

                    
                    // this.removeCommon(props.property, this.noMotionArrCount)

                    var that = this;
                    return {
                        // ** 动态绘制 **
                        // 控制动画执行状态
                        changedState: !!this.hasMoving,
                        reloadAnimation: function () {
                            that._readyRender(props, shapeProperty);
                            that._renderStop(props.property, shapeProperty, cw, ch)
                            that._renderMove(props.property, shapeProperty)
                        }
                    }
                },
                // ===== 每帧入口 =====
                _readyRender: function (props, shapeProperty) {
                    this.ctx2d.hook2D('fillStyle', {
                        color: props.bg || shapeProperty.bg
                    });
                    this.ctx2d.hook2D('fillRect', {
                        x: '0',
                        y: '0',
                        x1: shapeProperty.x1,
                        y1: shapeProperty.y1
                    });
                    // if (this.noMotionArrObj.length > 0) {
                    //     this.collection[0].characteristic.property = props.property.concat(this.noMotionArrObj)
                    //     this.noMotionArrObj.length = 0
                    // }
                },
                // ===== 指纹粒度 =====
                _initStopsAndMoves: function (particle, shapeProperty) {
                    for (var j = 0, len = particle.length; j < len; j++) {
                        particle[j].key = j || particle[j]?.key;
                        this.mergeIterator(particle[j], shapeProperty);

                        const _fp = this._fingerprint(this.iterator);
                        if (!this.iterator.motion || this.iterator.motion === 'stop') {
                            this._stopFp.set(particle[j]?.key, _fp);
                        } else if (this.iterator.motion === 'move') {
                            this._moveFp.set(particle[j]?.key, _fp);
                        }
                    }
                },
            
                // ===== 启动渲染 =====
                _renderStop: function (particle, shapeProperty, cw, ch) {
                    // 1) 静态层：指纹检测变化 → 变化才重建 → 每帧 drawImage
                    this._syncStaticLayer(particle, shapeProperty, cw, ch);
                    if (this.staticLayer) {
                        this.ctx2d.hook2D('drawImage', {
                            image: this.staticLayer,
                            x: 0,
                            y: 0
                        });
                    }
                },
                // ===== 静态层：指纹检测变化 + 重建 + 缓存 =====
                _syncStaticLayer: function (particle, shapeProperty, cw, ch) {
                    var dirty = false;

                    const staticIndex = particle.filter(item => !item?.motion || item?.motion === 'stop');
                    
                    // 尺寸变化 → 重建
                    if (!this.staticLayer
                        || this.staticLayer.width !== cw
                        || this.staticLayer.height !== ch) {
                        dirty = true;
                    }
                    // 粒子数量变化 → 重建
                    else if (staticIndex.length !== this._stopFp.size) {
                        dirty = true;
                    }
                    // 逐个粒子指纹比对 → 任何变化都重建
                    else {
                        for (var i = 0; i < particle.length; i++) {
                            if (!particle[i]?.motion || particle[i]?.motion === 'stop') {
                                var _KEYS = i || particle[i]?.key;
                                this.mergeIterator(particle[i], shapeProperty);
                                var fp = this._fingerprint(this.iterator);
                                if (this._stopFp.get(_KEYS) !== fp) {
                                    dirty = true;
                                    break;
                                }
                            }
                        }
                    }

                    if (!dirty) return;   // 干净且尺寸没变，复用缓存

                    // ---- 重建静态层 ----
                    if (!this.staticLayer) {
                        this.staticLayer = document.createElement('canvas');
                    }
                    this.staticLayer.width  = cw;
                    this.staticLayer.height = ch;
                    var sctx = this.staticLayer.getContext('2d');
                    sctx.clearRect(0, 0, cw, ch);

                    var groups = {};
                    this._stopFp.clear();
                    for (var i = 0; i < particle.length; i++) {
                        var _KEYS = i || particle[i]?.key;
                        if (!particle[i]?.motion || particle[i]?.motion === 'stop') {
                            this.mergeIterator(particle[i], shapeProperty);
                            this._pushPath(groups, shapeProperty);
                            this._stopFp.set(_KEYS, this._fingerprint(this.iterator));
                        }
                    }
                    for (var c in groups) {
                        sctx.fillStyle = c;
                        sctx.fill(groups[c]);
                    }
                },
                // ===== 指纹：关键渲染字段拼字符串（浮点值不变则字符串相同）=====
                _fingerprint: function (it) {
                    return it.x + '|' + it.y + '|' + it.color + '|' + it.radius
                        + '|' + it.startAngles + '|' + it.stopAngles 
                        + '|' + it.speed + '|' + it.trails + '|' + it.motion + '|' + it.bMoveMode + '|' + it.x1+ '|' + it.y1;
                },
            
                _renderMove: function (particle, shapeProperty) {
                    var dynamicGroups = {};
                    
                    for (var j = 0, len = particle.length; j < len; j++) {
                        particle[j].key = j || particle[j]?.key;
                        this.mergeIterator(particle[j], shapeProperty);

                        if (this.iterator.motion === 'move') {
                            if(this._moveFp.get(particle[j].key) !== JSON.stringify(this.iterator)){
                                this._moveFp.set(particle[j].key, JSON.stringify(this.iterator));
                            }

                            // console.log(this.iterator.motion)
                            // 动态 _renderDynamics
                            // motion = move, 需要运动
                            // 每一帧调用loop方法, 更新粒子的位置
                            this.loop(j, dynamicGroups);
                        }
                    }

                    this._fillGroups(dynamicGroups);
                },
                _pushPath: function (groups, shapeProperty) {
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
                },
                _fillGroups: function (groups) {
                    for (var color in groups) {
                        this.ctx2d.hook2D('fillStyle', { color: color });
                        this.ctx2d.hook2D('fill', groups[color]);
                    }
                },
                loop: function (j, groups) {
                    try {
                        // mehtod 方法用户获取粒子的位置
                        // 每一个返回值必须是数组，包含 x 和 y 坐标
                        var results = this.invokeExternalMethodWithDataSource();
                        // 返回值不是数组 hasMoving = false 抛出错误 防止重绘
                        if (!(results instanceof Array)) {
                            this.hasMoving = false
                            throw "The return value of the 'method' bound within the component is not an array"
                        }
                    } catch (err) {
                        console.log(err)
                    }
                    this.buildPath2D(results, groups);
                    this.changedJsData(j)
            
                    // ** 动态动画 ** 运动状态-重要
                    // changedState 为 true 时，会触发 reloadAnimation 重画
                    // 后续 reloadAnimation 会根据 hasMoving 判断是否需要重画
                    this.hasMoving = true;
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
                mergeIterator: function (particle, shapeProperties) {
                    var combineParams = new Array;
                    var startAngles = particle.startAngles * shapeProperties.pi;
                    var stopAngles = particle.stopAngles * shapeProperties.pi;
                    if (particle instanceof Object) {
                        combineParams.push({
                            key: particle.key || shapeProperties.key,
                            x: particle.x || shapeProperties.x,
                            y: particle.y || shapeProperties.y,
                            color: particle.color || shapeProperties.color,
                            speed: particle.speed || shapeProperties.speed,
                            radius: particle.radius || shapeProperties.radius,
                            trails: particle.trails || shapeProperties.trails,
                            startAngles: startAngles || shapeProperties.startAngles,
                            stopAngles: stopAngles || shapeProperties.stopAngles,
                            motion: particle.motion || shapeProperties.motion,
                            bMoveMode: particle.bMoveMode || shapeProperties.bMoveMode,
                            method: particle.method || shapeProperties.method,
                            x1: particle.x1 || shapeProperties.x1,
                            y1: particle.y1 || shapeProperties.y1,
                            custom: particle.custom || shapeProperties.custom
                        })
                    }
                    
                    Object.assign(this.iterator, combineParams[0]);
                },
                // removeCommon: function (acceptCollection, noMotionArrCount) {
                //     var nl = noMotionArrCount.length;
                //     while (nl--) {
                //         this.noMotionArrObj.push(acceptCollection[noMotionArrCount[nl]])
                //         acceptCollection[noMotionArrCount[nl]] = false
                //     }
                //     var na = new Array();
                //     for (var i = 0; i < acceptCollection.length; i++) {
                //         if (acceptCollection[i] instanceof Object)
                //             na.push(acceptCollection[i])
                //         else
                //             continue;
                //     }
                //     this.collection[0].characteristic.property = na
                // },
                invokeExternalMethodWithDataSource: function () {
                    var exposeDataSource = {
                        properties: this.collection[0].characteristic.property,
                        current: this.iterator,
                        setState: this.setState
                    };
                    return this.iterator.method.call(this, exposeDataSource);
                },
            
                changedJsData: function (j) {
                    Object.assign(this.collection[0].characteristic.property[j], this.callState.state);
                },
            });
            // Object.defineProperties(s3.category[1][CIRCLE_s].prototype, {});
            s3.tween.circle = s3.category[1][CIRCLE_s];
        })();
        /*
        *@rect methods
        *@implemention draw 2d rect.
        */
        (function () {
            s3.category[1][RECT_s].prototype._constructor = RECT_s;
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
                mergeIterator: function (shapeProperties, thing) {
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
                        this.mergeIterator(shapeProperty, particle[j]);
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
                    ctx2M.hook2D('closePath');
                    ctx2M.hook2D('restore')
                },
                execute2DEngine: function () {
                    var that = this
                    var args = arguments[0]
                    var domain = this.collection[0]['characteristic']
                    var params = {
                        can: args[0],
                        config: args[1],
                        controll: args[2]
                    }
                    for (var j = 0, getParams = params.config['property']; j < getParams.length; j++) {
                        Object.assign(domain.property[j], getParams[j]);
                    }
                    this.o_OPEN = params.controll.open;
                    this.data.push(params.can);
                    if (this.o_OPEN)
                        this.s_SPEED = params.controll.speed;
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
            // Object.defineProperties(s3.category[1][RECT_s].prototype, {});
            s3.tween.rect = s3.category[1][RECT_s];
        })();
        (function () {
            s3.category[1][CIRCLE_SHAPE_s].prototype._constructor = CIRCLE_SHAPE_s;
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
            s3.category[1][SHAPE_s].prototype._constructor = SHAPE_s;
            Object.assign(s3.category[1][SHAPE_s].prototype, {
                initialize: function (argument) {},
            });
            // Object.defineProperties(s3.category[1][SHAPE_s].prototype, {});
            s3.space._shape = s3.category[1][SHAPE_s];
        })();
        (function () {
            // algo 模块的原型方法定义
            var algoPrototype = {
                // 初始化实例，返回 this 以支持链式调用
                initialize: function () {
                    return this;
                },
        
                // 设置计算精度（保留小数位数）
                precision: function (num) {
                    this.precision = num;
                    return this;
                },
        
                // 初始化柱状图生成配置，指定柱子数量
                bars: function (count) {
                    this._barCount = count;                 // 柱子数量
                    this._barHeights = null;                // 重置自定义高度
                    this._barWidth = 50;                    // 默认柱子宽度
                    this._barGap = 10;                      // 默认柱子之间的间隙
                    this._barColors = null;                 // 默认无颜色数组，使用单一颜色
                    this._barHeightRange = [30, 300];       // 默认高度范围（随机生成）
                    this._barBaseY = 0;                     // 默认基线 Y 坐标（需外部设置）
                    return this;
                },
        
                // 获取最后一次计算的结果（由 _record 存储）
                value: function () {
                    return this.result;
                },

                heights: function (arr) {
                    this._barHeights = arr;
                    this._barCount = arr.length;   // 自动同步柱子数量
                    return this;
                },
        
                // 设置柱子宽度
                width: function (w) {
                    this._barWidth = w;
                    return this;
                },
        
                // 设置柱子之间的间隙
                gap: function (g) {
                    this._barGap = g;
                    return this;
                },
        
                // 设置柱子的颜色数组（会循环使用）
                colors: function (c) {
                    this._barColors = c;
                    return this;
                },
        
                // 设置柱子的高度范围 [最小值, 最大值]
                heightRange: function (min, max) {
                    this._barHeightRange = [min, max];
                    return this;
                },
        
                // 设置柱状图的基线 Y 坐标（柱子的底部）
                baseY: function (y) {
                    this._barBaseY = y;
                    return this;
                },
        
                // 生成最终的 bars 数据数组，供绘图组件使用
                generateBars: function () {
                    var count = this._barCount || 0;        // 柱子数量
                    var bw = this._barWidth;                // 柱宽
                    var heights = this._barHeights;         // 自定义高度数组
                    var gap = this._barGap;                 // 柱间隙
                    var colors = this._barColors;           // 颜色数组
                    var hRange = this._barHeightRange;      // 高度范围
                    var baseY = this._barBaseY;             // 基线 Y
                
                    var bars = [];
                    for (var i = 0; i < count; i++) {
                        // 在高度范围内随机生成柱高（可替换为算法驱动的 lerp、正弦等）
                        var h = heights ? heights[i] : (Math.random() * (hRange[1] - hRange[0]) + hRange[0]);
                        bars.push({
                            // x 坐标自动累积：第一根从 bw 开始，后续在前一根基础上增加 bw
                            x: (i === 0 ? bw : bars[i - 1].x + bw),
                            // y 坐标 = 基线 - 高度，使柱子向上生长
                            y: baseY - h,
                            // 实际绘制宽度 = 柱宽 - 间隙，确保柱子之间有间距
                            width: bw - gap,
                            height: h,
                            // 循环使用颜色数组
                            color: colors ? colors[i % colors.length] : '#3498db'
                        });
                    }
                    return bars;
                },
        
                // 内部记录方法：存储最近一次操作的方法名、参数、结果和时间戳
                _record: function (method, args, result) {
                    this.result = result;                   // 保存结果，供 value() 获取
                    this.history.push({                    // 将本次操作记录推入历史栈
                        method: method,
                        args: args,
                        result: result,
                        time: Date.now()
                    });
                }
            };
        
            // 将原型方法注入到 category 中注册的 algo 构造函数上
            Object.assign(s3.category[1][ALGO_s].prototype, algoPrototype);
        
            // 在 s3 命名空间上暴露 algo 构造函数，供外部 new s3._algo() 使用
            s3._algo = s3.category[1][ALGO_s];
        })();

        Object.keys(s3.category[1]).forEach(function(name) {
            if (typeof s3.category[1][name] === 'function') {
                s3.category[1][name].prototype._constructor = name;
            }
        });

        Shape.plugin.create('set', s3.space._set);
        Shape.plugin.create('tool', s3.space._tool);
        Shape.plugin.create('algo', s3._algo);

        var _build = new s3();
        _s3.version = s3.messages.version;
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
        _s3.body = _build.body;
        _s3.algo = _build.algo;
    });
})(typeof (window) !== 'undefined' ? this : global);