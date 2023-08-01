import UserValidationSchema from "../Model/joi/UserValidationSchema.js";
const validateUserModel = async (req, res, next) => {
    try {
        const res = await UserValidationSchema.validateAsync(req.body);
        next();
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
};
const validateUserFromParamId = async (req, res, next) => {
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
const validateUserFromUserId = async (req, res, next) => {
    try {
        const existingId = req.body.userId;
        if (existingId) {
            next();
        }
        else {
            throw "user Id not found";
        }
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
};
export { validateUserModel, validateUserFromParamId, validateUserFromUserId };
//# sourceMappingURL=UserMiddleware.js.map