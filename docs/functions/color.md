# Color

Pine use [chalk](https://www.npmjs.com/package/chalk) under the hood and exports it as `color`. So everything you can do with `chalk` you can do with the `color` export.

```js
import { log, color } from '@pinefile/pine';

export default {
  example: () => {
    log.info(color.cyan("Foo"));
  },
};
```
