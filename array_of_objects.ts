export {};
let book: { id: number; item: string; price: number; stock: number } = {
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
let items: { id: number; item: string; price: number; stock?: number }[] = [
    book,
    pen,
    pencil
];
console.log(items);
console.log({ items });
