"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const process_1 = __importDefault(require("process"));
const path_1 = __importDefault(require("path"));
const root_1 = require("./routes/root");
const app = (0, express_1.default)();
const PORT = process_1.default.env.PORT || 8000;
app.use("/", express_1.default.static(path_1.default.join(__dirname, "../", "public")));
app.use("/", root_1.router);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map