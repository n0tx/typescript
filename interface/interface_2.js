"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var riki = {
    id: 1,
    name: "Riki Candra",
    age: 17,
    gender: "Male",
    address: "DKI Jakarta"
};
var budi = {
    id: 2,
    name: "Budi",
    age: 25,
    gender: "Male",
    address: "Depok"
};
var users = [riki, budi];
console.log(users);
/*
[
  {
    id: 1,
    name: 'Riki Candra',
    age: 17,
    gender: 'Male',
    address: 'DKI Jakarta'
  },
  { id: 2, name: 'Budi', age: 25, gender: 'Male', address: 'Depok' }
]
*/
console.log({ users: users });
/*
{
  users: [
    {
      id: 1,
      name: 'Riki Candra',
      age: 17,
      gender: 'Male',
      address: 'DKI Jakarta'
    },
    { id: 2, name: 'Budi', age: 25, gender: 'Male', address: 'Depok' }
  ]
}
*/ 
