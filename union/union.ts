// union satu variabel dapat mempunyai
// 2 tipe data
let gambar: string | null = "gambar.png";
// null itu bertipe data any (belum mempunyai tipe data)
// dan bisa di masukan nilai dengan tipe data apa saja
console.log(gambar);
gambar = null;
console.log(gambar);