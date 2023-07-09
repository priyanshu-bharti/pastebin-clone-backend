import { Response,Request } from "express";
import PasteBinModel from "../Model/PasteBinModel.js";
const getAllPasteBin = (req:Request,res:Response)=>{
    res.status(200).json({success:"Get all paste Bins route"});
}

const getPastebinById = (req:Request,res:Response)=>{
    res.status(200).json({success:"Get  paste Bin by id route"});
}

const postPastebin = (req:Request,res:Response)=>{
    const newPasteBin:PasteBinModel = req.body;
    console.log(newPasteBin);
    
    res.status(200).json({success:"post paste Bin route"});
}

const deletePastebin = (req:Request,res:Response)=>{
    res.status(200).json({success:"delete paste Bin route"});
}
const updatePastebin = (req:Request,res:Response)=>{
    res.status(200).json({success:"update paste Bin route"});
}


export {
    getAllPasteBin,
    getPastebinById,
    postPastebin,
    updatePastebin,
    deletePastebin
}