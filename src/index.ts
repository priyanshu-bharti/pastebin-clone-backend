import express, { Request, Response } from "express";
import dotenv from "dotenv";
import indexRouter from "./Router/index.ts";
import { connectToDB } from "./Services/ConnectDatabase.ts";
import cors from 'cors';
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/v1", indexRouter);
app.get('/',(req:Request,res:Response)=>{
   console.log(req.headers.authorization);
   
    res.send('test route!!')
})
const PORT = process.env.PORT_NUMBER || 5002;
connectToDB()
    .then((res) => {
        console.log("🦄 Debug: Server Connected to Database!");
        app.listen(PORT, () => {
            console.log("🦄 Debug: Server is Listening for requests...");
            console.log(`🦄 Debug: Base URL: http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.log("🦄 Debug: An error occurred:");
        console.log(err);
    });
