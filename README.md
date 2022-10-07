# node ffi-napi example
- inspired by https://gist.github.com/Astro36/f17d7cee46768a486184d1ccc89e06a5
- This example uses [node-ffi-napi](https://www.npmjs.com/package/ffi-napi) instead of [node-ffi](https://www.npmjs.com/package/ffi).

# prerequisites
- node v14 (64bit): tested
- rust v1.63: tested

# 64bit
## build rust lib
```
cd rust_lib
cargo build --target=x86_64-pc-windows-msvc --release
```
## run node app

```
cd node_ffi_napi
nvm use 14.18.3 64
yarn install --force
node node_app.js
```

# 32bit
## build rust lib
```
cd rust_lib
cargo build --target=i686-pc-windows-msvc --release
```

## run node app
- NOTE make sure node runtime should be a 32bit executuble.
```
cd node_ffi_napi
nvm use 14.18.3 32
yarn install --force
node index.js
```

## run php app
- NOTE make sure php runtime should be a 32bit executuble.
```
cd php_ffi
php php_app.php
```
