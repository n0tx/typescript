"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function discountPrice(price, discount) {
    return price - (discount || 0);
}
// tanpa discount
console.log(discountPrice(1000)); // 1000
// pakai discount
console.log(discountPrice(10000, 1000)); // 9000
