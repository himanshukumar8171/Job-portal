import mongoose from "mongoose";

const connectDB= async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL);
       console.log("MongoDB connected");

    }catch(err){
        console.log("Error connecting to database");
    }
}
export default connectDB;