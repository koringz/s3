// _set
(function () {
    var q = S3.init;
    var o = S3.category;
    q[0] = o[0];
    q[1][499].prototype.constructor = o[1][499];
    o[1][499] = q[1][499];
    q[0].assign(o[1][499].prototype, {
        initialize: function () {
            return this,
            S3.Aset.call(this, arguments),
            new S3.Aset(arguments[0])
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
            if (s3.isStr(value) || s3.isNum(value))
                data[0][getShift] = Number(value);
            else
                return data[0][getShift];
            return this
        }
    });
    S3.space._set = o[1][499];
})();