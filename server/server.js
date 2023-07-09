import express from "express";
import cors from "cors";
import shoppingRouter from "./routes/shopping.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.json());

app.use("/api/shopping", shoppingRouter);

app.listen(8800, () => {
  console.log("Server is running!");
});
