import PasteDbModel from "../Model/Mongoose/PasteDBModel.js";
import PasteModel from "../Model/PasteModel.js";

export const savePasteToDb = async (newUserPaste: PasteModel) => {
    const newPaste = new PasteDbModel(newUserPaste);
    newPaste.save();
    return true;
};

export const getAllPasteFromDb = async () => {
    const allPastes = await PasteDbModel.find();
    return allPastes;
};
export const getPasteByIdFromDb = async (pasteId: string) => {
    const paste = await PasteDbModel.findById(pasteId);
    return paste;
};
export const deletePasteByIdFromDb = async (pasteId: string) => {
    const result = await PasteDbModel.findByIdAndRemove(pasteId);
    return result;
};

export const updatePasteToDb = async (id: string, paste: PasteModel) => {
    const updatedPaste = await PasteDbModel.updateOne(
        { _id: id },
        { _id: id, ...paste }
    );
    return updatedPaste;
};
