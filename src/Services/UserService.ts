import UserDbModel from "../Model/Mongoose/UserDbModel.ts";
import UserModel from "../Model/types/UserModel.ts";

export const createUserInDb = async (user: UserModel) => {
    const newUser = new UserDbModel(user);
    newUser.save();
    return true;
};

export const findUserByIdFromDb = async (id: string) => {
    const user = await UserDbModel.findOne({
        id: id,
    });
    return user;
};

export const deleteUserByIdFromDb = async (id: string) => {
    const result = await UserDbModel.findOneAndDelete({
        id: id,
    });
    return result;
};

export const updateUserToDb = async (id: string, user: UserModel) => {
    const updatedUser = await UserDbModel.updateOne({ id: id }, { ...user });
    return updatedUser;
};
