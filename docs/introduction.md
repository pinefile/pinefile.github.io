---
sidebar_position: 1
slug: '/'
---

# Getting started

Install with `npm`

```
npm install --save @pinefile/pine
```

Then create `pinefile.js` or `pinefile.ts`

```js
import { run } from '@pinefile/pine';

export const build = () => {
  console.log("Building...");
};

export const test = async () => {
  await run("jest");
};
```

or by using default export

```js
import { run } from '@pinefile/pine';

export default {
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
