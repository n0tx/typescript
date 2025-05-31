export {};
function discountPrice(price: number, discount?: number): number {
    return price - (discount || 0);
}

// tanpa discount
console.log(discountPrice(1000)); // 1000
// pakai discount
console.log(discountPrice(10000, 1000)); // 9000
