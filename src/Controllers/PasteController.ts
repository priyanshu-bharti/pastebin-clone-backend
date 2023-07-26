import { Response, Request } from "express";
import PasteModel from "../Model/types/PasteModel.ts";
import {
    createPasteToDb,
    getAllPasteFromDb,
    getPasteByIdFromDb,
    deletePasteByIdFromDb,
    updatePasteToDb,
} from "../Services/PasteService.ts";

const getAllPastes = async (req: Request, res: Response) => {
    const allPastes = await getAllPasteFromDb(req.body.userId);
    res.status(200).json({ success: allPastes });
};

const getPasteById = async (req: Request, res: Response) => {
    try {
        const filteredPaste = await getAllPasteFromDb(req.body.userId)
        if (filteredPaste) {
            res.status(200).json({ success: filteredPaste });
        } else {
            res.status(400).json({ error: "no record found" });
        }
    } catch (err) {
        res.status(400).json({ error: "no record found" });
    }
};

const createPaste = async (req: Request, res: Response) => {
    const newPasteModel: PasteModel = req.body;
    const newPasteResult = await createPasteToDb(req.params.userId,newPasteModel);
    if (newPasteResult) {
        res.status(200).json({ success: newPasteResult });
    }
};

const deletePaste = async (req: Request, res: Response) => {
    const deletePaste = await deletePasteByIdFromDb(req.params.id);
    res.status(200).json({ success: deletePaste });
};

const updatePaste = async (req: Request, res: Response) => {
    try {
        const updatedPaste = await updatePasteToDb(req.params.id, req.body);
        res.status(200).json({ success: updatedPaste });
    } catch (err) {
        res.status(400).json({ error: "something went wrong" });
    }
};

export { getAllPastes, getPasteById, createPaste, updatePaste, deletePaste };
