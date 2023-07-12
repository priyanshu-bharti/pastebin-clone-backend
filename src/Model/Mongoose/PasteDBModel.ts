import mongoose from "mongoose";
const Schema = mongoose.Schema

const PasteDBSchema = new Schema({
    title: {
        type:String,
        default:'Untitled Snippet'
    },
    data: {
        type:String,
        default:"",
    },
    expiresOn: {
        type:Number,
        default:Date.now()
    },
    isAnonymous: {
        type:Boolean,
        default:false
    }
});

const PasteDBModel = mongoose.model('Paste',PasteDBSchema);

export default PasteDBModel;
