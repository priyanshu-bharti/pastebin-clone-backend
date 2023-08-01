import express, { NextFunction } from "express";
import {
    getAllPastes,
    getPasteById,
    createPaste,
    deletePaste,
    updatePaste,
    getPasteByPasteId,
    getAllUserPastes,
} from "../Controllers/PasteController.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

import {
    validatePasteModel,
    validatePasteFromParamId,
} from "../Middlewares/PasteMiddleware.js";
import { validateUserFromUserId } from "../Middlewares/UserMiddleware.js";

const router = express.Router();

router.get("/user/:userId", ClerkExpressRequireAuth({}), getAllUserPastes);
router.post("/:userId", ClerkExpressRequireAuth({}), createPaste);
router.get("/public/:id", getPasteByPasteId);

router.get(
    "/:id",
    ClerkExpressRequireAuth({}),
    validateUserFromUserId,
    getPasteById
);

router.get("/", ClerkExpressRequireAuth({}), getAllPastes);

router.delete(
    "/:id",
    ClerkExpressRequireAuth({}),
    validatePasteFromParamId,
    deletePaste
);

router.put("/", ClerkExpressRequireAuth({}), validatePasteModel, updatePaste);

export default router;
