import fastify from 'fastify'
import Person from '../models/Persona.js'
import conn from '../services/database.js'

export const fast = fastify({logger:true})

fast.get('/', async ()=>{
    return 'Bye mundo'
})

fast.post('/api/person', async (request, reply)=>{
    try {
        const conexion = await conn()
        const data = request.body
        const person = new Person(data)
        await person.save()
        conexion.close()
        return data
    } catch (error) {
        fast.log.error(error)
        return error
    }
    
})