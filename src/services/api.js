import { fast } from "../routes/endpoint.js";

const start = async ()=>{
    try {
        await fast.listen(process.env.PORT || 3000)
        console.log(process.env.MONGODB_ADDON_URI)
        
    } catch (error) {
        fast.log.error(error)
        process.exit(1)
    }
}

export default start