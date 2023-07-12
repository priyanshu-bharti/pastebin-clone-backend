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

const router = express.Router();

router.post("/", validatePasteModel, createPaste);
router.get("/:id", validatePasteFromParamId, getPasteById);
router.get("/", getAllPastes);
router.delete("/:id", validatePasteFromParamId, deletePaste);
router.put("/:id", validatePasteFromParamId, validatePasteModel, updatePaste);

export default router;
