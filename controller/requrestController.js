
const { course } = require('../models');
const db = require('../models')
const Request = db.request;


const addRequest = async (req,res) =>{
    try {
        let items = {
            author: req.body.author,
            student: req.body.student,
            course: req.body.course,
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
        const request = await Request.findAll(
                {
                    where: {
                        author:id,
                        status:"processing"
                    }
                }

            );
        return res.status(200).send( request)
    }catch(err){
        return res.status(400).send({mesage: err.message});
    }

}

const getRequestDone = async (req,res) =>{
    
    try{
        const id = req.params.id;
        const request = await Request.findAll(
                {
                    where: {
                        author:id,
                        status:"done"
                    }
                }

            );
        return res.status(200).send( request)
    }catch(err){
        return res.status(400).send({mesage: err.message});
    }

}

const cancelRequest = async (req,res) =>{

    try{
        const id = req.params.id;
        const reposne = await Request.destroy(
            {       
                where:{
                    id:id
                }
            }
        );
        return res.status(200).send({
            success:"true",
            mesage: reposne
        })
    }catch(err){
        return res.status(400).send({
            success:false,
            mesage: err.message});
    }

}

const acceptRequest = async (req,res) =>{

    try{
        const id = req.params.id;
        const request = await Request.findByPk(id);
        request.update({status:"true"}).then((result) =>{
            res.status(200).send({success:true,mesage:result})
        }).catch(err =>{
            return res.status(400).send({message:err.message});
        });
        
    }catch(err){
        return res.status(400).send({success:"false", message:err.message});
    }

}
const doneRequest = async (req,res) =>{

    try{
        const id = req.params.id;
        const request = await Request.findByPk(id);
        request.update({status:"done"}).then((result) =>{
            res.status(200).send({success:true,mesage:result})
        }).catch(err =>{
            return res.status(400).send({message:err.message});
        });
        
    }catch(err){
        return res.status(400).send({success:"false", message:err.message});
    }

}

const getAllRequestWithCourse = async (req,res) =>{
    try{
        const id = req.params.idCourse;
        const reponse = await Request.findAll({
            where:{
                course:id,
                status:"true"
            }
        })
        return res.status(200).send(reponse);
    }catch(err){
        return res.status(400).send({success:"false", message})
    }
    

    
}



module.exports = {
    addRequest,
    getRequrestById,
    cancelRequest,
    acceptRequest,
    getAllRequestWithCourse,
    doneRequest,
    getRequestDone

}