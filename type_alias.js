"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var budi = {
    id: 1,
    name: "Budi",
    isActive: true
};
var andi = {
    id: 2,
    name: "Andi",
    isActive: true
};
var users = [budi, andi];
console.log(users);
/*
[
  { id: 1, name: 'Budi', isActive: true },
  { id: 2, name: 'Andi', isActive: true }
]
*/
console.log({ users: users });
/*
{
  users: [
    { id: 1, name: 'Budi', isActive: true },
    { id: 2, name: 'Andi', isActive: true }
  ]
}
*/ 
