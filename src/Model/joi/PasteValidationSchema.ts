import joi from "joi";

const schema = joi.object({
    pasteId: joi.string().required().min(8),
    title: joi.string().required(),
    data: joi.string().required(),
    expiresOn: joi.number().required(),
    isAnonymous: joi.boolean().required(),
});

export default schema;
