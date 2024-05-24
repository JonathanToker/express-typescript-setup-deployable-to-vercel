import express, { Express, Request, Response } from "express";
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV === "development") {
  const dotenv = require("dotenv");
  dotenv.config();
}
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express!!!!!!!!");
});
app.get("/hi", (req: Request, res: Response) => {
  res.send("Hiii!!!");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
