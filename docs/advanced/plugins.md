# Plugins

There is different ways to create a plugin:

- Pure functions, e.g [shell](../functions/shell.md) and [run](../functions/run.md)
- Runner functions that takes three or four arguments and returns a function.

## Pure functions

Most of the functions that Pine exports is standalone functions, e.g [shell](../functions/shell.md) and [run](../functions/run.md), so writing your own functions is easy. You can use build-it functions like the [getConfig](../functions/config.md) to receive the configuration object.

```js
const echo = console.log;

module.exports = {
  example: () => {
    echo('Foo');
  },
};
```

## Runner function

You can read more about runner functions [here](./runners.md)
