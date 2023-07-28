import joi from "joi";

const schema = joi.object({
    pasteId: joi.string().required().min(8),
    title: joi.string().required(),
    data: joi.string().required(),
    expiresOn: joi.number().max(30).min(1).required(),
    isAnonymous: joi.boolean().required(),
});

export default schema;
