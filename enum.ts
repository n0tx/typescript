export {};
enum Role {
    "Admin",
    "User",
    "Guest"
}
let userRole: Role = Role.Admin;
console.log(userRole); // 0

console.log({ userRole }); // { userRole: 0 }
