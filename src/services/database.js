import {} from 'dotenv/config'
import mongoose from "mongoose";

const conn = async ()=>{
    const connect = await mongoose.connect(process.env.MONGODB_ADDON_URI)
    return connect.connection
}

export default conn