# rust for x ffi

# Rust library

## prerequisites

- Rust v1.64.0
- MS Visual Studio 2017 Build Tools

## Build Rust library

- If you want to add more target, update build.target value in rust/.cargo/config.toml

```
cd rust_lib
cargo build --release
```

# Node ffi-napi

- inspired by https://gist.github.com/Astro36/f17d7cee46768a486184d1ccc89e06a5
- This example uses [node-ffi-napi](https://www.npmjs.com/package/ffi-napi) instead of [node-ffi](https://www.npmjs.com/package/ffi).

## prerequisites

- node v14 (64bit): tested
- rust v1.63: tested
- python v2.x via conda

## Run 64bit node app

```
cd node_ffi_napi
conda activate
nvm use 14.18.3 64
npm config set msvs_version 2017
npm install -g node-gyp
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

# Qt v6

## Prerequisites

- Qt v6

## Run 64bit Qt app

- Open qt_cli_app.pro on Qt Creator
- Build and run

# References

- Python FFI: https://docs.python.org/3/library/ctypes.html
