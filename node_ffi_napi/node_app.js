var ffi = require("ffi-napi");

const use32bit = true;

var dllPath;
if (use32bit) {
  dllPath = "..\\rust_lib\\target\\i686-pc-windows-msvc";
} else {
  dllPath = "..\\rust_lib\\target\\x86_64-pc-windows-msvc";
}

var librust = ffi.Library(`${dllPath}\\release\\rust_lib.dll`, {
  add: ["int", ["int", "int"]],
});

console.log(librust.add(1, 2));
