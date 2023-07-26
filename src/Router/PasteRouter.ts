import express from "express";

import {
    getAllPastes,
    getPasteById,
    createPaste,
    deletePaste,
    updatePaste,
} from "../Controllers/PasteController.ts";

import {
    validatePasteModel,
    validatePasteFromParamId,
} from "../Middlewares/PasteMiddleware.ts";
import { validateUserFromUserId } from "../Middlewares/UserMiddleware.ts";

const router = express.Router();

router.post("/:userId", createPaste);
router.get("/:id",validateUserFromUserId, getPasteById);
router.get("/", getAllPastes);
router.delete("/:id", validatePasteFromParamId, deletePaste);
router.put("/:id", validatePasteFromParamId, validatePasteModel, updatePaste);

export default router;
