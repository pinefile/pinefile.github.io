---
sidebar_position: 1
slug: '/'
---

# Getting started

Install with `npm`

```
npm install --save @pinefile/pine
```

Then create `Pinefile` or `pinefile.js`

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

From version 1.6.0 you can create [global](./commands/global.md) pinefiles.
