"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV === "development") {
    const dotenv = require("dotenv");
    dotenv.config();
}
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello from Express!!!!!!!!");
});
app.get("/hi", (req, res) => {
    res.send("Hiii!!!");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
