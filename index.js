"use strict";

var sassMiddleware = require('node-sass-middleware');

module.exports = exports = function (options) {
    var mw = sassMiddleware(options);
    return function *(next) {
        yield mw.bind(mw, this.req, this.res);
        yield next;
    };
};
