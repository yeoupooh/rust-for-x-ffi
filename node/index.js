var ffi = require("ffi-napi");

var librust = ffi.Library("..\\rust\\target\\release\\rust.dll", {
  add: ["int", ["int", "int"]],
});

console.log(librust.add(1, 2));
