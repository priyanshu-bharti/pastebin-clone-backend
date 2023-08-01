import { deleteUserByIdFromDb, findUserByIdFromDb, createUserInDb, updateUserToDb, } from "../Services/UserService.js";
export const createUser = async (req, res) => {
    const newUserModel = req.body;
    const newUserResult = await createUserInDb(newUserModel);
    if (newUserResult) {
        res.status(200).json({ success: newUserResult });
    }
};
export const getUser = async (req, res) => {
    try {
        const filteredUser = await findUserByIdFromDb(req.params.id);
        if (filteredUser) {
            res.status(200).json({ success: filteredUser });
        }
        else {
            res.status(400).json({ error: "no user found" });
        }
    }
    catch (err) {
        res.status(400).json({ error: "no user found" });
    }
};
export const deleteUser = async (req, res) => {
    const deletedUser = await deleteUserByIdFromDb(req.params.id);
    res.status(200).json({ success: deletedUser });
};
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await updateUserToDb(req.params.id, req.body);
        res.status(200).json({ success: updatedUser });
    }
    catch (err) {
        res.status(400).json({ error: "something went wrong" });
    }
};
//# sourceMappingURL=UserController.js.map