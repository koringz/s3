/*
* Enter
* 2Dtool and scene
* loading animation scene and operation steps
* configuration color and reset modules
*/
(function () {
    var q = S3.init;
    var o = S3.category;
    q[0] = o[0];
    q[1][99].prototype.constructor = o[1][99];
    o[1][99] = q[1][99];
    q[0].assign(o[1][99].prototype, {
        initialize: function () {
            return this,
            new S3.At(arguments[0].getContext('2d'))
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
                            var _startConfig = new S3.node._startConfig()
                            var _pointerconfig = new S3.node._pointerconfig(properties)
                            return that.storeStartConfig.push(_startConfig) && _pointerconfig
                        })()
                    },
                    addComponent: function () {
                        var args = arguments;
                        if (s3.isStr(args[0]) && s3.isObj(args[1])) {
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
            if (s3.isFun(options))
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
                return s3.isNum(this.nums) ? this.nums : Number(this.nums)
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
    S3.space._tool = o[1][99];
    S3.node._pointerconfig = o[1][83];
    S3.node._startConfig = o[1][82];
    S3.node._state = o[1][81];
})();