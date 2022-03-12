# Global

> Since 1.6.0

Run tasks in global pinefile.

```
pine global <task> <options>
```

The global command will look for pinefiles in:

1. Your home folder, e.g `~/pinefile.js`
2. The `~/.pine/` folder, eg `~/.pine/pinefile.js`

Or you can load files anywhere with the `--file` flag. This flag dosen't work with the `global` command.

## Example

`pine global` will run `~/pinefile.js` or `~/.pine/pinefile.js` default task

`pine --file=$HOME/.pine/config.js` will run a single task file that just exports a default function.
