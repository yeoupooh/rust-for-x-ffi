# node ffi-napi example
- inspired by https://gist.github.com/Astro36/f17d7cee46768a486184d1ccc89e06a5
- This example uses [node-ffi-napi](https://www.npmjs.com/package/ffi-napi) instead of [node-ffi](https://www.npmjs.com/package/ffi).

# prerequisites
- node v14 (64bit): tested
- rust v1.63: tested

# build rust lib
```
cd rust
cargo build --release

```
# run node app

```
cd node
yarn
node index.js

```
