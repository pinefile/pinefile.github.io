# Runners

Runners functions are a way to run a task in another way than the standard way, e.g [parallel](../functions/parallel.md) and [series](../functions/series.md) function does this, they use [bach](https://www.npmjs.com/package/bach) under the hood to run tasks in parallel or series.

## Create runner function

The api to create a runner function is quite small and you can use them for both tasks and as a global runner, the big different between them is that you do it in another way. Pine provide a function to wrap the runner with a function that returns a `async` function. This return is important for all runners and you can do it by yourself and not use the `api.createRunner` function.

The returning function can take a `done` callback argument where you can send in errors. You can also return a promise reject. To resolve a task function in the `pinefile` object you need to use `api.resolveTask` function. This is because the object isn't the same as in your Pinefile.

You can always use the `configure` function to set and `getConfig` function to get the values.

```js
const { api } = require('@pinefile/pine');

// with create runner function
const runner = api.createRunner(async (pinefile, name, argv) => {
  const task = api.resolveTask(pinefile, name);
  await task(argv);
});

// without create runner function
const runner = async (pinefile, name, argv) => {
  return async () => {
    const task = api.resolveTask(pinefile, name);
    await task(argv);
  }
});
```

## Task based runner functions

Every task in pine can be a runner function that does something completely different than the default behaviour. You can combine a task based runner function with the actual task, here is an example:

```js
const { api, log } = require('@pinefile/pine');

module.exports = {
  hello: async (pinefile, name, argv) => {
    if (argv) {
      return async () => {
        const task = api.resolveTask(pinefile, name);
        await task(argv);
      };
    }

    // pinefile arg is argv at this point.
    log.info(`Hello ${pinefile.name}`);
  },
};
```

Then you can run `npx pine hello --name Foo` and it will run a custom runner and then execute the task function.

You can see different example of runner functions [here](https://github.com/pinefile/pine/blob/master/packages/pine/test/fixtures/pinefile.runner.js)

## Global runner function for all tasks

Global runner functions are used for all tasks and it changes the way a task is executed. To configure the global runner you use the `configure` function and send in a runner function to the config object.

Runner functions do support options and that can be handy if you want to configure your runner. The options object will be sent in as a fourth argument to the runner function, here is a example:

```js
const { api, configure, log } = require('@pinefile/pine');

// with create runner function
const runner = api.createRunner(async (pinefile, name, argv, options = {}) => {
  const task = api.resolveTask(pinefile, name);
  await task(argv);
});

configure({
  runner,
});

module.exports = {
  hello: () => {
    log.info(`Hello ${pinefile.name}`);
  },
};
```

Global runner functions can take a optional options object so you can configure your runner function from the Pinefile.

```js
const { api, configure, log } = require('@pinefile/pine');

// with create runner function
const runner = api.createRunner(
  async (pinefile, name, argv, options = { foo: 'standard' }) => {
    const task = api.resolveTask(pinefile, name);
    log.info(`Using: ${options.foo}`);
    await task(argv);
  }
);

configure({
  runner: [
    runner,
    {
      foo: 'bar',
    },
  ],
});

module.exports = {
  hello: () => {
    log.info(`Hello ${pinefile.name}`);
  },
};
```
