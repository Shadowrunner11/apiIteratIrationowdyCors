//import {} from 'dotenv/config'
import mongoose from "mongoose"


const db = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_ADDON_URI)
    return conn.connection
}

export default db