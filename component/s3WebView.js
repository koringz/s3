// Add a val in the methods.
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
            return options.constructor.name === 'Object'
        },
        isFun: function (options) {
            return typeof (options) === 'function'
        },
        isNum: function (options) {
            return typeof (options) === 'number'
        },
        isBool: function (argument) {
            return typeof (options) === 'boolean'
        },
        isUndefined: function (options) {
            return typeof options === 'undefined'
        },
        isArr: function (options) {
            return Array.isArray(options) || options.constructor.name == 'Array'
        },
        isNan: function (options) {
            return isNaN(options)
        },
        isNull: function  (options) {
            return options == null
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
        }
    };
    S3.order = order;
})();