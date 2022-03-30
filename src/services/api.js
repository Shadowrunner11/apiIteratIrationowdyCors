import { fast } from "../routes/endpoint.js";

const start = async ()=>{
    try {
        await fast.listen(process.env.PORT | 3000,'0.0.0.0')
        
    } catch (error) {
        fast.log.info(error)
        process.exit(1)
    }
}

export default start