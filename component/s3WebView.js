// Add a val in the methods.
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
    S3.order = order;
})();