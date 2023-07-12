import mongoose from "mongoose";

export async function connectToDB(): Promise<typeof mongoose> {
    console.log("🦄 Debug: Initiating Database Connection...");
    return mongoose.connect(process.env.DATABASE_URL ?? "");
}
