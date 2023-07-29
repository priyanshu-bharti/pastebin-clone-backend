import express, { NextFunction } from "express";
import {
    getAllPastes,
    getPasteById,
    createPaste,
    deletePaste,
    updatePaste,
    getPasteByPasteId,
    getAllUserPastes,
} from "../Controllers/PasteController.ts";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

import {
    validatePasteModel,
    validatePasteFromParamId,
} from "../Middlewares/PasteMiddleware.ts";
import { validateUserFromUserId } from "../Middlewares/UserMiddleware.ts";

const router = express.Router();


router.get("/user",getAllUserPastes);   
router.post("/:userId", ClerkExpressRequireAuth({}), createPaste);

router.get(
    "/:id",
    ClerkExpressRequireAuth({}),
    validateUserFromUserId,
    getPasteById
);

router.get("/public/:id", getPasteByPasteId);

router.get("/", ClerkExpressRequireAuth({}), getAllPastes);


router.delete(
    "/:id",
    ClerkExpressRequireAuth({}),
    validatePasteFromParamId,
    deletePaste
);

router.put("/", ClerkExpressRequireAuth({}), validatePasteModel, updatePaste);

export default router;
