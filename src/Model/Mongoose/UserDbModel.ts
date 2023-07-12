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
});

const UserDbModel = mongoose.model("User", UserDbSchema);

export default UserDbModel;
