<?php

$use_32bit = true;

if ($use_32bit === true) {
    $dll_base = '../rust_lib/target/i686-pc-windows-msvc';
}
else
{ 
    $dll_base = '../rust_lib/target/x86_64-pc-windows-msvc';
}

// create FFI object, loading libc and exporting function printf()
$ffi = FFI::cdef(
    "int add(int a, int b);", // this is a regular C declaration
    $dll_base . "/release/rust_lib.dll");

// call c function
echo $ffi->add(1,2) . PHP_EOL;
?>
