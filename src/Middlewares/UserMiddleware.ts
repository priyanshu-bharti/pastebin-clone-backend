import UserValidationSchema from "../Model/joi/UserValidationSchema.ts";
import { Response, Request, NextFunction } from "express";

const validateUserModel = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const res = await UserValidationSchema.validateAsync(req.body);

        next();
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

const validateUserFromParamId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const existingId = req.params.id;

        if (existingId) {
            next();
        } else {
            throw "Param id not found";
        }
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

const validateUserFromUserId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const existingId = req.body.userId;

        if (existingId) {
            next();
        } else {
            throw "user Id not found";
        }
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

export { validateUserModel, validateUserFromParamId, validateUserFromUserId };
