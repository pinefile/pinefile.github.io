# Transpilers

Since version 2 you don't need to register a custom transpiler since we load `esbuild-register` by default. But if you want to load your own you can still do it by disabling `esbuild-register` as described below.

## Custom transpilers

Example of how to use [Babel](https://babeljs.io/) transpiler for your `pinefile.js`

```json
{
  "pine": {
    "esbuild": false,
    "require": ["@babel/register"]
  },
  "babel": {
    "presets": ["env"]
  },
  "devDependencies": {
    "@babel/core": "^7.12.3",
    "@babel/preset-env": "^7.12.1",
    "@babel/register": "^7.12.1"
  }
}
```

Example of how to use [TypeScript](https://www.typescriptlang.org/) transpiler for your `pinefile.ts`

```json
{
  "pine": {
    "esbuild": false,
    "require": ["ts-node/register"]
  },
  "devDependencies": {
    "ts-node": "^9.0.0",
    "typescript": "^4.0.5"
  }
}
```

Example of how to use [esbuild](https://esbuild.github.io/) transpiler for your `pinefile.[j|t]s`

```json
{
  "pine": {
    "esbuild": false,
    "require": ["esbuild-register"]
  },
  "devDependencies": {
    "esbuild-register": "^2.3.0"
  }
}
```


Example of how to use [swc](https://swc.rs/) transpiler for your `pinefile.[j|t]s`

```json
{
  "pine": {
    "esbuild": false,
    "require": ["@swc-node/register"]
  },
  "devDependencies": {
    "@swc-node/register": "^1.3.6"
  }
}
```
