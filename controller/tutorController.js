const db = require('../models');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

// const resultImg = await cloudinary.uploader.upload(req.file.path);

const Tutor = db.tutor;

const registerTutors = async (req,res) =>{
    const email = req.body.email;
    const isUser = await Tutor.findOne({
        where:{
            email:email,
        }
    });

    if(!isUser) {
        

        const {name,bithDay,phone,email,password,address,skill,education,gpa} = await req.body;
        const tutors = {
            name:name,
            bithDay:bithDay,
            phone:phone,
            email:email,
            password:password,
            address:address,
            skill:skill,
            education:education,
            gpa:gpa
        }
        try{
           const response = await Tutor.create(tutors);
            return res.status(200).send(response);
        }catch(err){
            return res.status(400).send(false);
        }
    }else{
        return res.status(401).send(false);
    }
}


const loginWithUsername = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const reponse = await Tutor.findOne({
            where: {email: email,
                password: password
            }
        })
        console.log("resposne"+ reponse)
        if(reponse){
            if(reponse.status == "active"){
                return res.status(200).send(true);
            }else{
                return res.status(401).send(false);
            }
            
        }else{
            return res.status(400).send(false);
        }
    }catch(err){
        return res.status(400).send(false);
    }




}


const getAllTutor = async (req,res) =>{

    try{
        const tutor  = await Tutor.findAll({where:{
            status:"pending"
        }});
        return res.status(200).send(tutor);
    }catch(err){
        return res.status(400).send({mesage: err.message});
    }

}

const getTutorProfile = async(req,res) => {
    const email  = req.params.email;
    const tutors = await Tutor.findOne({
        where:{
            email:email,
        }
    });
    if(tutors != null){
        return res.status(200).send(tutors);
    }else{
        return res.status(400).send({message:"No profile with id"+email});
    }
}


const acceptTutor = async (req,res) =>{

        const idTutor = req.params.idTutor;
        const tutor = await Tutor.findByPk(idTutor);
        tutor.update({status:"active"}).then((result) =>{
            return res.status(200).send({message:result})
        }).catch((err) =>{
            return res.status(400).send({message:err.message})
        })
   
}

const updateProfile = async(req,res) =>{

    const id = req.params.id;
    const body = await req.body;
    const item = await Tutor.findByPk(id);
    item.update({
        name:body.name,
        email:body.email,
        education:body.education,
        skill:body.skill,
        avatar:body.avatar,
        phone:body.phone,

    }).then(()=>{

        return res.status(200).send(true);
    }).catch(()=>{
        return res.status(400).send(false)
    })

}


module.exports = {
    registerTutors,
    getTutorProfile,
    loginWithUsername,
    acceptTutor,
    getAllTutor,
    updateProfile
}