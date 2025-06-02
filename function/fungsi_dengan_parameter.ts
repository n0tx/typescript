export {};
function hello(name: string): string {
    return `Hello ${name}!`;
}

// console.log({ hello("Riki") }); // fungsi tidak bisa di print sebagai objek
console.log(hello("Riki"));
