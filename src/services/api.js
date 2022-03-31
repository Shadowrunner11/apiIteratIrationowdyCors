import { fast } from "../routes/endpoint.js";

const start = async () =>{
    try {
        await fast.listen(process.env.PORT | 5000)
        
    } catch (error) {
       fast.log.error(error) 
    }
}

export default start
