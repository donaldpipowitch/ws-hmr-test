# `ws-hmr-test`

Assumption: `webpack-serve` was allready `$ npm link`'ed before.

Run the example like this:

```bash
$ mkdir some-test
$ cd some-test
$ git clone git@github.com:donaldpipowitch/ws-hmr-test.git
$ git clone git@github.com:Mercateo/ws.git
$ cd ws
$ git checkout experimental-webpack-serve-test
$ npm install
$ npm link webpack-serve
$ npm run build
$ npm link
$ cd ../ws-hmr-test
$ npm install
$ npm link @mercateo/ws
$ npm run ws -- watch --hot
```
