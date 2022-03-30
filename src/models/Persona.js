import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
    name: String,
    education: [{institution: String}]
})

const Person = mongoose.model('Person', PersonSchema)

export default Person
