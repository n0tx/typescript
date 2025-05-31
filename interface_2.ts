export {};

type Gender = "Male" | "Female";

interface Bio {
    id: number;
    name: string;
}
interface FullBio extends Bio {
    age: number;
    gender: Gender;
    address: string;
}

const riki: FullBio = {
    id: 1,
    name: "Riki Candra",
    age: 17,
    gender: "Male",
    address: "DKI Jakarta"
};

const budi: FullBio = {
    id: 2,
    name: "Budi",
    age: 25,
    gender: "Male",
    address: "Depok"
};

let users: FullBio[] = [riki, budi];

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
console.log({ users });
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