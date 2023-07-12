import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PasteDbSchema = new Schema({
    title: {
        type: String,
        default: "Untitled Snippet",
    },
    data: {
        type: String,
        default: "",
    },
    expiresOn: {
        type: Number,
        default: Date.now(),
    },
    isAnonymous: {
        type: Boolean,
        default: false,
    },
});

const PasteDbModel = mongoose.model("Paste", PasteDbSchema);

export default PasteDbModel;
