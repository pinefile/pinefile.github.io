# Split up tasks

You can split up tasks in more than one file, e.g having all build tasks in one file:

```js
// tasks/build.js
export default {
  css: () => console.log("build:css"),
  default: () => console.log("build"),
};

// pinefile.js
export default {
  build: require("./tasks/build.js"),
};
```

Then you can run `npx pine build:css`

To load and export all tasks automatic you can use the `tasks` function that exists since version 2.

```js
import { tasks } from '@pinefile/pine';

export default tasks(`./tasks`)
```
