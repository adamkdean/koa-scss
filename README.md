# koa-scss

Koa middleware for SCSS.

## Installation

```js
$ npm install koa-scss
```

## Options

See [the node-sass-middleware document](https://github.com/sass/node-sass-middleware).

## Example

```js
var scss = require('koa-scss'),
    serve = require('koa-static'),
    koa = require('koa'),
    app = koa();

app.use(scss({
    src: __dirname + '/public/scss/',
    dest: __dirname + '/public/css/'
}));

app.use(serve('./public'));

app.listen(8000);
```

## License

MIT
