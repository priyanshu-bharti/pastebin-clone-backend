import express from "express";
import pasteRouter from "./PasteRouter.ts";

const router = express.Router();
router.use("/api", pasteRouter);

export default router;
