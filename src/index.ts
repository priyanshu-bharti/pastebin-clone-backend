import express from "express";
import dotenv from "dotenv";
import indexRouter from "./Router/index.js";

dotenv.config();

const app = express();

app.use("/v1",indexRouter)

const PORT = process.env.PORT_NUMBER || 5002;
app.listen(PORT, () => {
    console.log("server has started on port");
    console.log("http://localhost:" + PORT);
});
