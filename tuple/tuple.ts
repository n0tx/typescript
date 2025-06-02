export {};

// tuple
let x: [string, number];
x = ["Riki Candra", 25];
console.log(x); // [ 'Riki Candra', 25 ]
console.log({ x }); // { x: [ 'Riki Candra', 25 ] }

// tuple dengan optional
let person: [string, number, boolean?];
person = ["Budi", 28, true];
console.log(person);
console.log({ person });

// tuple dengan spread operator
let user: [string, number, ...string[]];
user = ["Andi", 25, "Jalan Melati", "Serang"];
console.log(user); // [ 'Andi', 25, 'Jalan Melati', 'Serang' ]
console.log({ user }); // { user: [ 'Andi', 25, 'Jalan Melati', 'Serang' ] }
