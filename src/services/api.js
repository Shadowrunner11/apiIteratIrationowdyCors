import { fast } from "../routes/endpoint.js";

const start = async () =>{
    try {
        await fast.listen(process.env.PORT, '0.0.0.0')
        
    } catch (error) {
       fast.log.error(error) 
    }
}

export default start
