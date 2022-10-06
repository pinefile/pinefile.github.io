# Utils

Various built in utils functions in Pine

## Filter args

> Since 1.1.0

With `filterArgs` function you can filter out the built in arguments so you only have to deal with your own arguments inside a task function.

```js
import { log, filterArgs } from '@pinefile/pine';

export default {
  example: (args) => {
    const { name } = filterArgs(args);
    log.info(name);
  },
};
```
