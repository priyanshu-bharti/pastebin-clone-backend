import { Response, Request } from "express";
import PasteModel from "../Model/PasteModel.js";
import { savePasteToDB,getAllPasteFromDB,getPasteByIdFromDB ,deletePasteByIdFromDB,updatePasteToDB} from "../Services/PasteService.js";
import PasteDBModel from "../Model/Mongoose/PasteModel.js";

const getAllPastes = async (req: Request, res: Response) => {
    const Allpastes = await getAllPasteFromDB();
    res.status(200).json({ success: Allpastes });
};

const getPasteById = async (req: Request, res: Response) => {
    try{
        const filteredPaste = await getPasteByIdFromDB(req.params.id);
        if(filteredPaste){
            res.status(200).json({ success: filteredPaste });
        }else{
            res.status(400).json({ error:"no record found" });
        }
    }catch(err){
        res.status(400).json({ error:"no record found" });
    }
   
    
};

const postPaste = async (req: Request, res: Response) => {
    const newPasteModel: PasteModel = req.body;
    const newPasteResult = await savePasteToDB(newPasteModel);
    if(newPasteResult){
        res.status(200).json({success:newPasteResult});
    }
};

const deletePaste = async (req: Request, res: Response) => {
    const deletePaste = await deletePasteByIdFromDB(req.params.id);
    res.status(200).json({ success: deletePaste });
};

const updatePaste = async (req: Request, res: Response) => {
    try{
        const updatedPaste = await updatePasteToDB(req.params.id,req.body);
        res.status(200).json({ success: updatedPaste });
    }catch(err){
        res.status(400).json({ error: "something went wrong" });
    }
    
   
};

export { getAllPastes, getPasteById, postPaste, updatePaste, deletePaste };
