
const form = require("../model/model.forms");

const getAllUsers = async(req, res)=>{
    try{
        const data = await form.find();
        return res.status(201).send(data)
    }catch(err){
        console.log(err);
    }

}


const createUser = async(req, res)=>{
    try{
        const {
            body
        } = req;
        const response = await form.create(body)
        return res.status(201).send(response)

    }catch(err){
        console.log(err);
    }
}


const deleteByid = async(req, res)=>{
    try{
        const {
            params: {id}
        } = req;
        const response = await form.findOneAndDelete({_id: id})
        return res.status(201).send(response) 

    }catch(err){
        console.log(err);
    }

}


module.exports = {
    getAllUsers,
    createUser,
    deleteByid
}