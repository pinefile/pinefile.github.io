# Series

Run tasks that will be executed one after another, in sequential order.

## Combined tasks into one

You can combine tasks into one, e.g have a default task for building everything.

```js
import { series } from "@pinefile/pine";

export default {
  example: series("line", "build"),
  lint: () => {},
  build: () => {},
};
```

## Run multiple functions in series

Support both `callback`-format and asynchronous functions.

```js
import { log, series } from "@pinefile/pine";

export default {
  example: async () => {
    const tasks = [
      (done) => {
        log.push("callback");
        done();
      },
      async () => {
        return new Promise((resolve) => {
          log.info("async");
          resolve();
        });
      },
    ];

    await series(tasks);
  },
};
```
