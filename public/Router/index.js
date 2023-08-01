import express from "express";
import pasteRouter from "./PasteRouter.js";
import userRouter from "./UserRouter.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
const router = express.Router();
router.use("/api/paste", pasteRouter);
router.use("/api/users", ClerkExpressRequireAuth({}), userRouter);
export default router;
//# sourceMappingURL=index.js.map