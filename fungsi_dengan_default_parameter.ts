export {};
function hello(name: string = "Guest"): string {
    return `Hello ${name}!`;
}

console.log(hello("Riki")); // Hello Riki!
console.log(hello()); // Hello Guest!
