# Package Template

Sample template to publish in public NPM.

## Setting

Setting applied in this template

### Tsconfig.json

- rootDir: Root directory of source files
- outDir: Output directory of output files
- declaration: Generate type information file for the function

### Package.json

- main: Entry file of the project
- types: Declaration entry file of the project
- files: Files to include when installed as dependency

## Testing

- To run testing in local, install it by running `npm i 'path\to\your\package\directory'`

## Publish

- To publish in public for the first time, run: `npm publish --access=public`
- Subsequent publish need to update the package version first and follow by `npm publish`

## Note

- `tsc --build --clean` will not remove renamed or deleted file in output directory
