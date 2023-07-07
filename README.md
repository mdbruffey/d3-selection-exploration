# d3-selection-exploration
This repo contains the results messing around with d3 a bit. It uses npm to manage dependencies, Rollout to bundle javascript, and the rollup-startup-app to allow live refresh of the bundle.js as code is modified.

## Getting started
For enabling live generation of bundle.js.

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).
