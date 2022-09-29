# Parallel

Run tasks that will be executed simultaneously.

## Combined tasks into one

You can combine tasks into one, e.g have a default task for building everything.

```js
import { parallel } from "@pinefile/pine";

export default {
  example: parallel("line", "build"),
  lint: () => {},
  build: () => {},
};
```

## Run multiple functions in parallel

Support both `callback`-format and asynchronous functions.

```js
import { log, parallel } from "@pinefile/pine";

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

    await parallel(tasks);
  },
};
```
