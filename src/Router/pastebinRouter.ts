import express from "express";
import { getAllPasteBin,getPastebinById,postPastebin,deletePastebin,updatePastebin } from "../Controllers/pastebinController.js";
import {validatePasteBinModel,validatePasteBinParamId} from "../Middlewares/pastebinMiddleware.js";
const router = express.Router();

router.post('/',validatePasteBinModel,postPastebin);

router.get('/:id',validatePasteBinParamId,getPastebinById);

router.get('/',getAllPasteBin);

router.delete('/:id',validatePasteBinParamId,deletePastebin);

router.put('/:id',validatePasteBinParamId,validatePasteBinModel,updatePastebin);

export default router;