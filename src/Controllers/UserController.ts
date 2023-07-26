import { Response, Request } from "express";
import UserModel from "../Model/types/UserModel.ts";
import {
    deleteUserByIdFromDb,
    findUserByIdFromDb,
    saveUserToDb,
    updateUserToDb,
} from "../Services/UserService.ts";

export const createUser = async (req: Request, res: Response) => {
    const newUserModel: UserModel = req.body;
    const newUserResult = await saveUserToDb(newUserModel);

    if (newUserResult) {
        res.status(200).json({ success: newUserResult });
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const filteredUser = await findUserByIdFromDb(req.params.id);
        if (filteredUser) {
            res.status(200).json({ success: filteredUser });
        } else {
            res.status(400).json({ error: "no user found" });
        }
    } catch (err) {
        res.status(400).json({ error: "no user found" });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const deletedUser = await deleteUserByIdFromDb(req.params.id);
    res.status(200).json({ success: deletedUser });
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const updatedUser = await updateUserToDb(req.params.id, req.body);
        res.status(200).json({ success: updatedUser });
    } catch (err) {
        res.status(400).json({ error: "something went wrong" });
    }
};
