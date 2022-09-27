# Package Template

Sample template to publish in public NPM. Package can be found in the link below.
[`https://www.npmjs.com/package/@chern_1997/package-template`](https://www.npmjs.com/package/@chern_1997/package-template)

## Setting

Setting applied in this template

### Tsconfig.json

- rootDir: Root directory of source files
- outDir: Output directory of output files
- declaration: Generate type information file for the function
- baseUrl: Root directory
- paths: Alias path to import files

### Package.json

- main: Entry file of the project
- types: Declaration entry file of the project
- files: Files to include when installed as dependency
- _moduleAliases: Register alias path in build files

## Testing

- To run testing in local, install it by running `npm i 'path\to\your\package\directory'`

## Publish

- To publish in public for the first time, run: `npm publish --access=public`
- Subsequent publish need to update the package version first and follow by `npm publish`

## Note

- `tsc --build --clean` will not remove renamed or deleted file in output directory
