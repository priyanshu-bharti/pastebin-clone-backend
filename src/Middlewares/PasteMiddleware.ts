import PasteJoiSchema from "../Model/joi/PasteJoiSchema.js";
import { Response, Request, NextFunction } from "express";

const validatePasteModel = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validatedModel = await PasteJoiSchema.validateAsync(req.body);
        next();
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

const validatePasteParamId = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const isExistingId = req.params.id;
        if (isExistingId) {
            next();
        } else {
            throw "Param id not found";
        }
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

export { validatePasteModel, validatePasteParamId };
