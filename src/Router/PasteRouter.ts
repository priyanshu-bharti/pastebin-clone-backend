import express from "express";

import {
    getAllPastes,
    getPasteById,
    postPaste,
    deletePaste,
    updatePaste,
} from "../Controllers/PasteController.js";

import {
    validatePasteModel,
    validatePasteParamId,
} from "../Middlewares/PasteMiddleware.js";

const router = express.Router();

router.post("/", validatePasteModel, postPaste);
router.get("/:id", validatePasteParamId, getPasteById);
router.get("/", getAllPastes);
router.delete("/:id", validatePasteParamId, deletePaste);
router.put("/:id", validatePasteParamId, validatePasteModel, updatePaste);

export default router;
