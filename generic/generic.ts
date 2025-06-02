export {};
// belum menggunakan generic
// fungsi 1 dan 2 mempunyai pola yang sama
// hanya tipe datanya yang berbeda
// oleh karena itu dapat dibuatkan
// menjadi generik 1 fungsi saja
// yang bisa digunakan kembali pada berbagai tipe data
// sehingga menjadi fleksibel
// tanpa kehilangan keamanan tipe datanya
function getDataString(value: string): string {
    return value;
}

function getDataNumber(value: number): number {
    return value;
}
console.log(getDataString("Riki")); // Riki
console.log(getDataNumber(27)); // 27

// menggunakan generic
function getData<T>(value: T): T {
    return value;
}

console.log(getData<string>("Budi")); // Budi
console.log(getData<number>(28)); // 28
