---
sidebar_position: 1
---

# Getting started

Create `Pinefile` or `pinefile.js`

```js
const { run } = require("@pinefile/pine");

exports.build = () => {
  console.log("Building...");
};

exports.test = async () => {
  await run("jest");
};
```

or by using `module.exports`

```js
const { run } = require("@pinefile/pine");

module.exports = {
  build: () => {
    console.log("Building...");
  },
  test: async () => {
    await run("jest");
  },
};
```

Then run it! It is best to either place `pine` inside a npm run script or run it with `npx`:

```
npx pine build
```
