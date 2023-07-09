import express from "express";
import pastebinRouter from "./pastebinRouter.js";

const router = express.Router();

router.use('/api',pastebinRouter);

export default router;
