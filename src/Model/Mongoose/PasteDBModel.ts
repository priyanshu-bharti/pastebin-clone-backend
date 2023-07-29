import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PasteDbSchema = new Schema({
    pasteId: {
        type: String,
        require: true,
    },
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
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

const PasteDbModel = mongoose.model("Paste", PasteDbSchema);

export default PasteDbModel;
