import PasteValidationSchema from "../Model/joi/PasteValidationSchema.ts";
import { Response, Request, NextFunction } from "express";

const validatePasteModel = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await PasteValidationSchema.validateAsync(req.body);
        next();
    } catch (err) {
        res.status(400).json({ error: err });
    }
};

const validatePasteFromParamId = async (
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

export { validatePasteModel, validatePasteFromParamId };
