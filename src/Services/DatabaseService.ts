import mongoose from "mongoose";
export async function connectToDB():Promise<typeof mongoose>{
    console.log("lauda");
    
   return mongoose.connect(process.env.DATABASE_URL ?? "")
}

