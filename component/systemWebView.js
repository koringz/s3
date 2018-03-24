/*
*2D prototype
*Simulation canvas 2D methods
*Drawing shape call 2D object
*/
(function () {
    var q = S3.init;
    var o = S3.category;
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
            if (s3.isStr(options))
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
    S3.node._context = o[1][250];
})();