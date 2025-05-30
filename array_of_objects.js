"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book = {
    id: 1,
    item: "Book",
    price: 10000,
    stock: 10
};
var pen = {
    id: 2,
    item: "Pen",
    price: 3000,
    stock: 20
};
var pencil = {
    id: 3,
    item: "Pencil",
    price: 1000
};
var items = [
    book,
    pen,
    pencil
];
console.log(items);
console.log({ items: items });
