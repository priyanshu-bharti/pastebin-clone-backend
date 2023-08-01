import UserDbModel from "../Model/Mongoose/UserDbModel.js";
export const createUserInDb = async (user) => {
    const userExists = await UserDbModel.find({ id: user.id });
    if (userExists.length >= 1) {
        return false;
    }
    else {
        const newUser = new UserDbModel(user);
        newUser.save();
        return true;
    }
};
export const findUserByIdFromDb = async (id) => {
    const user = await UserDbModel.findOne({
        id: id,
    });
    return user;
};
export const deleteUserByIdFromDb = async (id) => {
    const result = await UserDbModel.findOneAndDelete({
        id: id,
    });
    return result;
};
export const updateUserToDb = async (id, user) => {
    const updatedUser = await UserDbModel.updateOne({ id: id }, { ...user });
    return updatedUser;
};
//# sourceMappingURL=UserService.js.map