import PasteDBModel from "../Model/Mongoose/PasteModel.js";
import PasteModel from "../Model/PasteModel.js";

export const savePasteToDB = async (newUserPaste:PasteModel)=>{
        const newPaste = new PasteDBModel(newUserPaste);
        newPaste.save();
        return true; 
}

export const getAllPasteFromDB = async () =>{
    const allPaste = await PasteDBModel.find();
    return allPaste
}
export const getPasteByIdFromDB = async (pasteId:string)=>{
    const paste = await PasteDBModel.findById(pasteId);
    return paste
}
export const deletePasteByIdFromDB = async(pasteId:string)=>{
    const result = await PasteDBModel.findByIdAndRemove(pasteId);
    return result;
}

export const updatePasteToDB = async(id:string,paste:PasteModel)=>{
    const updatePaste = await PasteDBModel.updateOne({_id:id},{_id:id,...paste});
    return updatePaste
}