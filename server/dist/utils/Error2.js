"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Error2 {
    constructor({ message, path, status = 500, value }) {
        this.message = message;
        this.path = path;
        this.status = status;
        this.value = value;
    }
}
exports.default = Error2;
//# sourceMappingURL=Error2.js.map