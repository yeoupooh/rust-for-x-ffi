var ffi = require("ffi-napi");

const use32bit = true;

var dllPath;
if (use32bit) {
  dllPath = "..\\rust\\target\\i686-pc-windows-msvc";
} else {
  dllPath = "..\\rust\\target\\x86_64-pc-windows-msvc";
}

var librust = ffi.Library(`${dllPath}\\release\\rust.dll`, {
  add: ["int", ["int", "int"]],
});

console.log(librust.add(1, 2));
