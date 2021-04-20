# Shell

Run shell commands and returning output instead of log as [run](./run.md) function does.

## Usage

```js
const { shell } = require("@pinefile/pine");

module.exports = {
  example: async () => {
    const gitLatestCommitID = await shell("git rev-parse HEAD");
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
