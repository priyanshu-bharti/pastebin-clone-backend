import { connectToDB } from "./Services/ConnectDatabase.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import indexRouter from "./Router/index.js";
import { pasteDeleteCron } from "./Cron/pasteDeleteCron.js";

// Read Variables from .env
dotenv.config();

// Create new App
const app = express();

// Use middlewares
app.use(express.json()); // Body Parser
app.use(cors()); // Allow CORS

app.get("/", (req, res) => {
    res.send("Server is working");
});

// Use Router
app.use("/v1", indexRouter);

// Define Port to listen on
const PORT = process.env.PORT_NUMBER || 5002;

// Connect to database and then start the server.
connectToDB()
    .then((res) => {
        // If connection is successful
        console.log("🦄 Debug: Server Connected to Database!");
        // Start the server
        app.listen(PORT, () => {
            console.log("🦄 Debug: Server is Listening for requests...");
            console.log(`🦄 Debug: Base URL: http://localhost:${PORT}`);
            pasteDeleteCron();
        });
    })
    .catch((err) => {
        // If any error pops up
        console.log("🦄 Debug: An error occurred:");
        console.log(err);
    });
