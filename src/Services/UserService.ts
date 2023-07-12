import UserDbModel from "../Model/Mongoose/UserDbModel.ts";
import UserModel from "../Model/types/UserModel.ts";

export const saveUserToDb = async (user: UserModel) => {
    const newUser = new UserDbModel(user);
    newUser.save();
    return true;
};

export const findUserByIdFromDb = async (id: string) => {
    const user = await UserDbModel.findById(id);
    return user;
};

export const deleteUserByIdFromDb = async (id: string) => {
    const result = await UserDbModel.findByIdAndRemove(id);
    return result;
};

export const updateUserToDb = async (id: string, paste: UserModel) => {
    const updatedPaste = await UserDbModel.updateOne(
        { _id: id },
        { _id: id, ...paste }
    );
    return updatedPaste;
};
