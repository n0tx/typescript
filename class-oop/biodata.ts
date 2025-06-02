export {};
class Biodata {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // bentuk fungsi pada class
    perkenalan(): string {
        return `Halo nama saya: ${this.name} dan umur saya ${this.age} tahun.`;
    }
}

// instansiasi object riki
// pembuatan object baru dengan nama riki
const riki = new Biodata("Riki Candra", 17);
console.log(riki.name); // Riki Candra
console.log(riki.age); // 17
console.log(riki.perkenalan()); 
// Halo nama saya: Riki Candra dan umur saya 17 tahun.