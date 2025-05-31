export {};
enum Status {
    Success = 200,
    NotFound = 400,
    Error = 500
}

let responseStatus: Status = Status.Success;

console.log(responseStatus);
console.log({ responseStatus });
