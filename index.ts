let nama_user: string = "Riki Candra";
console.log(nama_user); // Riki Candra
console.log({ nama_user }); // { nama_user: 'Riki Candra' }

/*
ini kenapa ya padahal ini di file yang berbeda,
Cannot redeclare block-scoped variable 'nama'.ts(2451)
index.ts(1, 5): 'nama' was also declared here

https://chatgpt.com/c/6839ac09-9684-8013-8d04-2b84f87b37ff

muncul karena secara default TypeScript memperlakukan semua file .ts yang 
tidak “dibungkus” sebagai script tunggal dalam satu global scope. 
*/