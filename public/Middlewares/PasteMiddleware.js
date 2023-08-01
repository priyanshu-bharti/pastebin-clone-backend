import PasteValidationSchema from "../Model/joi/PasteValidationSchema.js";
const validatePasteModel = async (req, res, next) => {
    try {
        await PasteValidationSchema.validateAsync(req.body);
        next();
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
};
const validatePasteFromParamId = async (req, res, next) => {
    try {
        const existingId = req.params.id;
        if (existingId) {
            next();
        }
        else {
            throw "Param id not found";
        }
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
};
export { validatePasteModel, validatePasteFromParamId };
//# sourceMappingURL=PasteMiddleware.js.map