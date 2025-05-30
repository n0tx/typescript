export {};
let book: { readonly id: number; item: string; price: number; stock: number } =
    {
        id: 1,
        item: "Book",
        price: 10000,
        stock: 10
    };
let pen: { id: number; item: string; price: number; stock: number } = {
    id: 2,
    item: "Pen",
    price: 3000,
    stock: 20
};
let pencil: { id: number; item: string; price: number } = {
    id: 3,
    item: "Pencil",
    price: 1000
};

// error, Cannot assign to 'id' because it is a read-only property.
// book.id = 100;

let items: {
    readonly id: number;
    item: string;
    price: number;
    stock?: number;
}[] = [book, pen, pencil];

// error, Cannot assign to 'id' because it is a read-only property.
// items[1].id = 200;

items[1].item = "Pen Color";
console.log(items);
console.log({ items });
