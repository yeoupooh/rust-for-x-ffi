from ctypes import *

rust_lib = cdll.LoadLibrary(
    "../rust_lib/target/x86_64-pc-windows-msvc/release/rust_lib.dll")
print(rust_lib.add(1, 2))
