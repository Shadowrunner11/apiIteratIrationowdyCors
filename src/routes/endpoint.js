import fastify from "fastify";
import fastifyCors from "fastify-cors";
import Person from "../models/Person.js";
import db from "../services/database.js";


export const fast = fastify({logger:true})

fast.register(fastifyCors, {
    origin:'*',
    methods:['POST', 'GET']
})

fast.get('/',  (request, response)=>{
    response.type('text/html').send('<div>Bye mundo</div>')
})

fast.post('/api/person', async (request, response)=>{

    try {
        const conexion = await db()
        const {name, education} = request.body
        const person = new Person({name,education})
        await person.save()
        await conexion.close()
        return request.body
        
    } catch (error) {
       fast.log.error(error)
       return {message:"Algo ha salido mal"} 
    }


})
