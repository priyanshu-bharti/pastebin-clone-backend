import UserDbModel from "../Model/Mongoose/UserDbModel.ts";
import UserModel from "../Model/types/UserModel.ts";

export const saveUserToDb = async (user: UserModel) => {
    const newUser = new UserDbModel(user);
    newUser.save();
    return true;
};

export const findUserByIdFromDb = async (pasteId: string) => {
    const user = await UserDbModel.findById(pasteId);
    return user;
};
