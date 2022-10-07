var ffi = require("ffi-napi");
var process = require('node:process');

const use32bit = true;

var dllPath;
if (process.platform === 'darwin') {
  dllPath = '../rust_lib/target/release/librust_lib.dylib'
} else if (process.platform === 'win32') {
  if (use32bit) {
    dllPath = "..\\rust_lib\\target\\i686-pc-windows-msvc\\release\\rust_lib.dll";
  } else {
    dllPath = "..\\rust_lib\\target\\x86_64-pc-windows-msvc\\release\\rust_lib.dll";
  }
}

if (dllPath) {
  var librust = ffi.Library(dllPath, {
    add: ["int", ["int", "int"]],
  });

  console.log(librust.add(1, 2));
} else {
  console.error('failed to get dll path.');
}