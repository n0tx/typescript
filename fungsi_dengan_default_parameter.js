"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello ".concat(name, "!");
}
console.log(hello("Riki")); // Hello Riki!
console.log(hello()); // 
