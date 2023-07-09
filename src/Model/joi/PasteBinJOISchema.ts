import joi from "joi";
const schema = joi.object({
    id:joi.string().optional(),
    title:joi.string().required(),
    data:joi.string().required(),
    expiresOn: joi.number().max(30).min(1).required(),
    isAnonymous: joi.boolean().required(),
})
export default schema