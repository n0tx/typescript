// union satu variabel dapat mempunyai
// 2 tipe data
let image: string | null = "image.png";
// null itu bertipe data any (belum mempunyai tipe data)
// dan bisa di masukan nilai dengan tipe data apa saja
console.log(image);
image = null;
console.log(image);
