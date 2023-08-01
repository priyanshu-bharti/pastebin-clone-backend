import mongoose from "mongoose";
export async function connectToDB() {
    console.log("🦄 Debug: Initiating Database Connection...");
    return mongoose.connect(process.env.DATABASE_URL ?? "");
}
//# sourceMappingURL=ConnectDatabase.js.map