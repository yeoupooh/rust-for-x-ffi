# rust for x ffi

# Rust library

## Build 64bit Rust library
```
cd rust_lib
cargo build --target=x86_64-pc-windows-msvc --release
```

## Build 32bit Rust library
```
cd rust_lib
cargo build --target=i686-pc-windows-msvc --release
```

# Node ffi-napi
- inspired by https://gist.github.com/Astro36/f17d7cee46768a486184d1ccc89e06a5
- This example uses [node-ffi-napi](https://www.npmjs.com/package/ffi-napi) instead of [node-ffi](https://www.npmjs.com/package/ffi).

## prerequisites
- node v14 (64bit): tested
- rust v1.63: tested

## Run 64bit node app
```
cd node_ffi_napi
nvm use 14.18.3 64
yarn install --force
node node_app.js
```

## Run 32bit node app
- NOTE make sure node runtime should be a 32bit executuble.
```
cd node_ffi_napi
nvm use 14.18.3 32
yarn install --force
node index.js
```

# PHP FFI
- Inspired by [Basic FFI Usage](https://www.php.net/manual/en/ffi.examples-basic.php)

## Run 32bit php app
- NOTE make sure php runtime should be a 32bit executuble.
```
cd php_ffi
php php_app.php
```
