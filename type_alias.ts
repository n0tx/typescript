export {};
type User = { id: number; name: string; isActive: boolean };
const budi: User = {
    id: 1,
    name: "Budi",
    isActive: true
};

const andi: User = {
    id: 2,
    name: "Andi",
    isActive: true
};

let users: User[] = [budi, andi];

console.log(users);
/*
[
  { id: 1, name: 'Budi', isActive: true },
  { id: 2, name: 'Andi', isActive: true }
]
*/
console.log({ users });
/*
{
  users: [
    { id: 1, name: 'Budi', isActive: true },
    { id: 2, name: 'Andi', isActive: true }
  ]
}
*/