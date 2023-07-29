import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserDbSchema = new Schema({
    id: {
        type: String,
    },
    fullName: {
        type: String,
    },
    username: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    pastes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Paste",
        },
    ],
});

const UserDbModel = mongoose.model("User", UserDbSchema);

export default UserDbModel;
