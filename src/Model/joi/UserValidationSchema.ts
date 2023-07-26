import joi from "joi";

const schema = joi.object({
    id: joi.string().required(),
    fullName: joi.string().required(),
    username: joi.string().required(),
    imageUrl: joi.string().required(),
});

export default schema;

export const userId = joi.object({
    userId:joi.string().required()
})
