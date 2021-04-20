# Run

Run shell commands and log instead of returning output as [shell](./shell.md) function does.

## Usage

```js
const { run } = require("@pinefile/pine");

module.exports = {
  example: async () => {
    await run("tsc");
  },
};
```

## Options

```js
{
  /**
   * Current working directory of the child process.
   *
   * @default process.cwd()
   */
  cwd?: string;

  /**
   * Environment key-value pairs.
   *
   * @default process.stderr
   */
  env?: NodeJS.ProcessEnv;

  /**
   * stdout write stream
   *
   * @default process.stdout
   */
  stdout?: NodeJS.WriteStream;

  /**
   * stderr write stream
   *
   * @default process.stderr
   */
  stderr?: NodeJS.WriteStream;
};
```
