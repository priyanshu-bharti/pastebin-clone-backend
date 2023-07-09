import express from "express";
import { getAllPasteBin,getPastebinById,postPastebin,deletePastebin,updatePastebin } from "../Controllers/pastebinController.js";
import pasteBinMiddleware from "../Middlewares/pastebinMiddleware.js";
const router = express.Router();

router.post('/',pasteBinMiddleware,postPastebin);

router.get('/:id',getPastebinById);

router.get('/',getAllPasteBin);

router.delete('/:id',deletePastebin);

router.put('/:id',updatePastebin);


export default router;