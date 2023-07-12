import UserValidationSchema from "../Model/joi/UserValidationSchema.ts";
import { Response, Request, NextFunction } from "express";

const validateUserModel = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const res = await UserValidationSchema.validateAsync(req.body);
        console.log("🦄 LOG -> res:", res)

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
        console.log("🦄 LOG -> existingId:", existingId)

        if (existingId) {
            next();
        } else {
            throw "Param id not found";
        }
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

export { validateUserModel, validateUserFromParamId };
