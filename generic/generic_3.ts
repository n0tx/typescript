export {};

type Person = { id: number; name: string; isComplete?: boolean };

const riki: Person = {
    id: 1,
    name: "Riki Candra",
    isComplete: true
};

const budi: Person = {
    id: 2,
    name: "Budi"
};

// fungsi generic ini artinya

// <> simbol diamond: tipe generik yang
// merupakan melakukan extends dari tipe yang mempunyai length dengan return tipe number (string, array, tuple, array of object)

// parameter, (value: T): tipe apa saja yang valuenya
// mempunyai length (string, array, tuple, array of object)

// return dengan tipe number: panjang length dari parameter

function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

const persons: Person[] = [riki, budi];

// string
console.log(getLength("Riki Candra")); // 11

// tuple (array tetap)
console.log(getLength(["Riki", 28])); // 2

// array
console.log(getLength([1, 2, 3])); // 3

// array of object
console.log(getLength(persons)); // 2

// secara eksplisit menentukan tipe data generic targetnya

// string
console.log(getLength<string>("Budi Sanjaya")); // 12

// tuple (array tetap)
console.log(getLength<[string, number]>(["Budi", 28])); // 2

// array
console.log(getLength<number[]>([1, 2, 3])); // 3

// array of object
console.log(getLength<Person[]>(persons)); // 2
