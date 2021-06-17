# Split up tasks

You can split up tasks in more than one file, e.g having all build tasks in one file:

```js
// tasks/build.js
module.exports = {
  css: () => console.log("build:css"),
  default: () => console.log("build"),
};

// pinefile.js
module.exports = {
  build: require("./tasks/build.js"),
};
```

Then you can run `npx pine build:css`

To load and export all tasks automatic you can do it with `fs.readFileSync` or some glob package.

```js
const fs = require('fs');

const tasks = fs.readdirSync('./tasks').reduce(
  (prev, cur) => ({
    ...prev,
    [cur.split('.').shift()]: require(`./tasks/${cur}`),
  }),
  {}
);

module.exports = tasks;
```
