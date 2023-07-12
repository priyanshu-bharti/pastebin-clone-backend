import express from "express";
import pasteRouter from "./PasteRouter.ts";
import userRouter from "./UserRouter.ts";

const router = express.Router();
router.use("/api/paste", pasteRouter);
router.use("/api/users", userRouter);

export default router;
