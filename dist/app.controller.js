"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
(0, dotenv_1.config)({ path: node_path_1.default.resolve("./config/.env.dev") });
const limitter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    message: {
        status: 429,
        message: "Too many requests from this IP, please try again later.",
    },
});
const bootstrap = () => {
    const app = (0, express_1.default)();
    const port = Number(process.env.PORT) || 5000;
    app.use((0, cors_1.default)(), express_1.default.json(), (0, helmet_1.default)());
    app.use(limitter);
    app.get("/users", (req, res) => {
        return res.status(200).json({ message: "Hello from express using TS" });
    });
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
};
exports.bootstrap = bootstrap;
