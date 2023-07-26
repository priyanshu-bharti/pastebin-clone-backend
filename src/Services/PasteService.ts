import PasteDbModel from "../Model/Mongoose/PasteDbModel.ts";
import UserDbModel from "../Model/Mongoose/UserDbModel.ts";
import PasteModel from "../Model/types/PasteModel.ts";
import { findUserByIdFromDb } from "./UserService.ts";

export const createPasteToDb = async (userId:string,newUserPaste: PasteModel) => {
    const user = await findUserByIdFromDb(userId);
    const newPaste = new PasteDbModel(newUserPaste);
    newPaste.owner = user?._id;
    user?.pastes.push(newPaste._id);
    await user?.save();
    const result = await newPaste.save();
    return result;
};

export const getAllPasteFromDb = async (userId:string) => {
    const allPastes = await UserDbModel.findOne({id:userId}).populate("pastes");
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
