"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.static(__dirname + "/build"));
app.use(compression_1.default());
app.use((req, res, next) => {
    return res.sendFile(__dirname + "/build/index.html");
});
app.use((err, req, res, next) => {
    console.log(err);
    // we must add null as the default value, otherwise the property will be
    // removed when used in res.json
    const { status, path, message, value = null } = err;
    if (status && message) {
        return res.status(status).json({ errors: [{ path, value, message }] });
    }
    if (status) {
        return res.sendStatus(status);
    }
    return next();
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
//# sourceMappingURL=index.js.map