# Configure

Pine can be configured via the `configure` function, which accepts:

## With object

The object will be merged into the existing configuration.

```js
const { configure } = require("@pinefile/pine");

configure({
  // see options
});

module.exports = {
  // tasks
};
```

## With function

The function will be given the existing configuration and the task name as a optional argument. The function should return a plain JavaScript object which will be merged into the existing configuration.

```js
import { configure } from '@pinefile/pine';

configure((config) => ({
  // see options
}));

export default {
  // tasks
};
```

## Options

You can see all current options for `configure` [here](https://github.com/pinefile/pine/blob/master/packages/pine/src/config.ts#L9)

## Get config

You can always get the current configuration with `getConfig` function:

```js
import { getConfig } from '@pinefile/pine';

export default {
  config: () => {
    const config = getConfig();
    console.log(config);
  },
};
```
