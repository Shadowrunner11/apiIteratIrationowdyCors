
import axios from "axios";
import chai from "chai";

const should = chai.should()

describe('Test api', ()=>{
    it('post api',async ()=>{
        const response = await axios.post('https://apirowdy.herokuapp.com/api/person',{
           name: 'fake name' ,
           education: [{institution: 'fake institution'}]
        })
        
        console.log(response.data)
        response.status.should.equal(200)
    })
})