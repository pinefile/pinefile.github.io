# Plugins

There is to kind of plugins in Pine:

- Standalone functions, e.g [shell](../functions/shell.md) and [run](../functions/run.md)
- Task function that takes three arguments and return a promise.

## Standalone functions

Most of the functions that Pine exports is standalone functions, e.g [shell](../functions/shell.md) and [run](../functions/run.md), so writing your own functions is easy. You can use build-it functions like the [getConfig](../functions/config.md) to receive the configuration object.

```js
const echo = console.log;

module.exports = {
  example: () => {
    echo("Foo");
  },
};
```

## Runner function

This one is a bit more complex since the function you assign to the task takes three arguments which are the exported object from the Pinefile, the name of the task and a array of arguments.

The returning function can take a `done` callback argument where you can send in errors. You can also return a promise reject.

```js
module.exports = {
  example: (pinefile, name, argv) => {
    return () => {
      console.log(name);
    };
  },
};
```

To resolve a task function in the `pinefile` object you need to use `api.resolveTask` function. This is because the object isn't the same as in your pinefile.

Example of how you can create your own runner and run a task in the same function.

```js
const { api, log } = require("@pinefile/pine");

module.exports = {
  hello: (pinefile, name, args) => {
    if (args) {
      return async () => {
        const task = api.resolveTask(name, pinefile);
        await task(args);
      };
    }

    // pinefile arg is args at this point.
    log.info(`Hello ${pinefile.name}`);
  },
};
```

Then you can run `npx pine hello --name Foo` and it will run a custom runner and then execute the task function.

You can see different example of runner functions [here](https://github.com/pinefile/pine/blob/master/packages/pine/test/fixtures/pinefile.runner.js)

To change the global runner for all task functions you need to configure it:

```js
const { api, configure, log } = require("@pinefile/pine")

configure({
  runner: (pinefile, name, args) => {
    return async () => {
      const task = api.resolveTask(name, pinefile);
      await task(args);
    };
  }
})

module.exports = {
  hello: (args) =>  {
    log.info(`Hello ${args.name}`);
  }
}
```

