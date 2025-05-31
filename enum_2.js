"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 400] = "NotFound";
    Status[Status["Error"] = 500] = "Error";
})(Status || (Status = {}));
var responseStatus = Status.Success;
console.log(responseStatus);
console.log({ responseStatus: responseStatus });
