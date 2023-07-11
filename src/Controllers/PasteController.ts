import { Response, Request } from "express";
import PasteModel from "../Model/PasteModel.js";

const getAllPastes = (req: Request, res: Response) => {
    res.status(200).json({ success: "Get all paste Bins route" });
};

const getPasteById = (req: Request, res: Response) => {
    res.status(200).json({ success: "Get  paste Bin by id route" });
};

const postPaste = (req: Request, res: Response) => {
    const newPasteBin: PasteModel = req.body;
    console.log(newPasteBin);

    res.status(200).json({ success: "post paste Bin route" });
};

const deletePaste = (req: Request, res: Response) => {
    res.status(200).json({ success: "delete paste Bin route" });
};

const updatePaste = (req: Request, res: Response) => {
    res.status(200).json({ success: "update paste Bin route" });
};

export { getAllPastes, getPasteById, postPaste, updatePaste, deletePaste };
