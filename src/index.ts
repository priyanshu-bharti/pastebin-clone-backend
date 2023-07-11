import express from "express";
import dotenv from "dotenv";
import indexRouter from "./Router/index.js";
import { connectToDB } from "./Services/DatabaseService.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/v1", indexRouter);

const PORT = process.env.PORT_NUMBER || 5002;
connectToDB().then(res=>{
    console.log("server connected");
    app.listen(PORT, () => {
        console.log("server has successfully started");
        console.log("http://localhost:" + PORT);
    });
})

