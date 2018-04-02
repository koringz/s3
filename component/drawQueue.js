/*
*@circle methods.
*@implemention draw 2d.
*/
(function () {
    var q = S3.init;
    var o = S3.category;
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
            this.callState = new S3.node._state();
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
                else if (s3.indexof(this.moveModel,this.iterator.motion) > 0) {
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
            var ctx = S3.node._context;
            var shapeProperty = S3.space._shape;
            return {
                streaming: function () {
                    return that.draw.call(that, ctx, shapeProperty)
                }
            }
        }
    });
    q[0].defineProperties(o[1][299].prototype, {});
    S3.tween._circle = o[1][299];
})();

(function () {
    var q = S3.init;
    var o = S3.category;
    q[0] = o[0];
    q[1][300].prototype.constructor = o[1][300];
    o[1][300] = q[1][300];
    q[0].assign(o[1][300].prototype, {
        initialize: function (argument) {},
    });
    q[0].defineProperties(o[1][300].prototype, {});
    S3.space._shape = o[1][300];
})();