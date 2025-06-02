"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tuple
var x;
x = ["Riki Candra", 25];
console.log(x); // [ 'Riki Candra', 25 ]
console.log({ x: x }); // { x: [ 'Riki Candra', 25 ] }
// tuple dengan optional
var person;
person = ["Budi", 28, true];
console.log(person);
console.log({ person: person });
// tuple dengan spread operator
var user;
user = ["Andi", 25, "Jalan Melati", "Serang"];
console.log(user); // [ 'Andi', 25, 'Jalan Melati', 'Serang' ]
console.log({ user: user }); // { user: [ 'Andi', 25, 'Jalan Melati', 'Serang' ] }
