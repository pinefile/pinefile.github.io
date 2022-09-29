# Run

Run shell commands and log instead of returning output as [shell](./shell.md) function does.

## Usage

```js
import { run } from "@pinefile/pine";

export default {
  example: async () => {
    await run("tsc");
  },
};
```

## Options

All Execa [options](https://github.com/sindresorhus/execa#options) can be used except `stdin`, `stdout` and `stderr` that's are defaulting to `inherit`.

To change them you should use [shell](./shell.md) function instead and read about the default options for `shell` function.
