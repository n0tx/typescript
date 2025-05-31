export {};
interface User {
    id: number;
    name: string;
    age: number;
}

const riki: User = {
    id: 1,
    name: "Riki",
    age: 20
};

const budi: User = {
    id: 2,
    name: "Budi",
    age: 25
};

let users: User[] = [riki, budi];

console.log(users); 
// [ { id: 1, name: 'Riki', age: 20 }, { id: 2, name: 'Budi', age: 25 } ]

console.log({ users }); 
/*
{
  users: [
    { id: 1, name: 'Riki', age: 20 },
    { id: 2, name: 'Budi', age: 25 }
  ]
}
*/
