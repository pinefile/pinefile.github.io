# Global command

> Since 1.6.0

Run tasks in global pinefile.

```
pine global <task> <options>
```

The global command will look for pinefiles in:

- Your home folder, e.g `~/pinefile.js`
- The `~/.pine/` directory, eg `~/.pine/pinefile.js`
- Or anywhere with `--file` flag (works only without `global` command).

## Example

`pine global` will run `~/pinefile.js` or `~/.pine/pinefile.js` default task

`pine --file=$HOME/.pine/config.js` will run a single task file that just exports a default function.
