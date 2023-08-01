import PasteDbModel from "../Model/Mongoose/PasteDBModel.js";
import UserDbModel from "../Model/Mongoose/UserDbModel.js";
import { findUserByIdFromDb } from "./UserService.js";
export const createPasteInDb = async (userId, newUserPaste) => {
    const user = await findUserByIdFromDb(userId);
    const newPaste = new PasteDbModel(newUserPaste);
    newPaste.owner = user?._id;
    user?.pastes.push(newPaste._id);
    await user?.save();
    const result = await newPaste.save();
    return result;
};
export const getPasteByPasteIdFromDb = async (pasteId) => {
    const paste = await PasteDbModel.findOne({ pasteId: pasteId });
    const user = await UserDbModel.findById(paste?.owner);
    const data = { ...paste, userName: user?.username };
    return data;
};
export const getAllPasteFromDb = async (userId) => {
    const allPastes = await PasteDbModel.find();
    return allPastes;
};
export const getAllUserPasteFromDb = async (userId) => {
    const allPastes = await UserDbModel.find({ id: userId }).populate("pastes");
    return allPastes;
};
export const getPasteByIdFromDb = async (pasteId) => {
    const paste = await PasteDbModel.findById(pasteId);
    return paste;
};
export const deletePasteByIdFromDb = async (pasteId) => {
    const result = await PasteDbModel.findOneAndDelete({ pasteId: pasteId });
    return result;
};
export const updatePasteToDb = async (id, paste) => {
    const updatedPaste = await PasteDbModel.updateOne({ pasteId: id }, { ...paste });
    return updatedPaste;
};
export const handleDeletePasteCron = async () => {
    const pastes = await PasteDbModel.find();
    const todaysDate = Date.now();
    const pastesToBeDeleted = pastes
        .filter((paste) => paste.expiresOn - todaysDate <= 0)
        .map((paste) => paste.pasteId);
    console.log("pastes to be Expired ", pastesToBeDeleted);
    const result = await PasteDbModel.findOneAndDelete({
        pasteId: { $in: pastesToBeDeleted },
    });
    console.log("result is ", result);
};
//# sourceMappingURL=PasteService.js.map