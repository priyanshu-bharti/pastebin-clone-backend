import mongoose from "mongoose";
export async function connectToDB(): Promise<typeof mongoose> {
    console.log("Debug: Connected to the database.");

    return mongoose.connect(process.env.DATABASE_URL ?? "");
}
