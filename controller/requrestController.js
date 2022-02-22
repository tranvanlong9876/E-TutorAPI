const db = require('db')
const Request = db.request;


const addRequest = async (req,res) =>{
    try {
        let items = {
            student: req.body.student,
            course: req.body.course,
            status:req.body.status
        }
        await Request(items);
        return res.status(200).send({Message: 'Course added successfully'});
    }catch(e){
        res.status(400).send({mesage: e.message});
    }   
} 

const getRequrestById = async (req,res) =>{
    
    try{
        const id = req.params.id;
        const Request = await Request.findById({author:id});
        return res.status(200).send({data: Request})
    }catch(err){
        return res.status(400).send({mesage: err.message});
    }

}



module.exports = {
    addRequest,
    getRequrestById
}