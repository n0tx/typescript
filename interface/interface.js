"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var riki = {
    id: 1,
    name: "Riki",
    age: 20
};
var budi = {
    id: 2,
    name: "Budi",
    age: 25
};
var users = [riki, budi];
console.log(users);
// [ { id: 1, name: 'Riki', age: 20 }, { id: 2, name: 'Budi', age: 25 } ]
console.log({ users: users });
/*
{
  users: [
    { id: 1, name: 'Riki', age: 20 },
    { id: 2, name: 'Budi', age: 25 }
  ]
}
*/
