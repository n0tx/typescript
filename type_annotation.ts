// type annotation: mendefinisikan tipe data - tipe data
// pada setiap variabelnya

let nama: string = "Riki";
// nama = 25; // Type 'number' is not assignable to type 'string'.
nama = "Riki Candra"; // ok
let usia: number = 17;
let isComplete: boolean = true;
let image: null = null;
let kosong: undefined;

console.log(nama);
console.log(usia);
console.log(isComplete);
console.log(image);
console.log(kosong);

// Auto tipe deklarasi / definisi oleh kompiler
// berdasarkan nilai dari sebuah variabel

let panggilan = "Budi";
let age = 20;
let isCompleted = true;
let picture = null;
let empty;

console.log(panggilan);
console.log(age);
console.log(isCompleted);
console.log(picture);
console.log(empty);
