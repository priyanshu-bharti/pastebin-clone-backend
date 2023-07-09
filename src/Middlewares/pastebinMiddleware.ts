import PasteBinJOISchema from "../Model/joi/PasteBinJOISchema.js";
import { Response,Request,NextFunction } from "express";
const validatePasteBinModel = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const validatedModel = await PasteBinJOISchema.validateAsync(req.body);
        next();
    }catch (err){
        res.status(400).json({error:err})
    }
}
export default validatePasteBinModel;