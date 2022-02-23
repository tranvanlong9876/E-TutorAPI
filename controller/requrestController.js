const db = require('../models')
const Request = db.request;


const addRequest = async (req,res) =>{
    try {
        let items = {
            student: req.body.student,
            course: req.body.course,
            status:req.body.status
        }
        await Request.create(items);
        return res.status(200).send({Message: 'Course added successfully'});
    }catch(e){
        res.status(400).send({mesage: e.message});
    }   
} 

const getRequrestById = async (req,res) =>{
    
    try{
        const id = req.params.id;
        const request = await Request.findAll({author:id});
        return res.status(200).send({data: request})
    }catch(err){
        return res.status(400).send({mesage: err.message});
    }

}



module.exports = {
    addRequest,
    getRequrestById
}