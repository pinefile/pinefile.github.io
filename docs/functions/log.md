# Log

Pine has a built-in logger which support different log levels. You can [configure](config.md) this or set `process.env.LOG_LEVEL`

## Info

```js
const { log } = require("@pinefile/pine");

module.exports = {
  example: () => {
    log.info("Foo");
  },
};
```

## Warning

```js
const { log } = require("@pinefile/pine");

module.exports = {
  example: () => {
    log.warn("Foo");
  },
};
```

## Error

```js
const { log } = require("@pinefile/pine");

module.exports = {
  example: () => {
    log.error("Foo");
  },
};
```

## Create logger

With `createLogger` you can create your own logger with custom prefix

```js
const { createLogger } = require('@pinefile/pine');

const log = createLogger({
  prefix: '[pine]'
});

module.exports = {
  example: () => {
    log.info('Foo');
  },
};
```

## Configure custom logger

> Since 1.1.0

With `configure` you can set your custom logger so the core of Pine uses the same one, instead of the built in. To do this you need to follow the simple log api that Pine uses:

```js
const customLogger = {
  info: (...msg) => console.log(...msg)
  warn: (...msg) => console.warn(...msg),
  error: (...msg) => console.error(...msg),
};
```

With TypeScript you can import and extend the `Logger` class:

```js
import { Logger } from '@pinefile/pine';

class CustomLogger extends Logger {
  ...
}
```

And then use it:

```js
configure({
  logger: customLogger,
});
```
