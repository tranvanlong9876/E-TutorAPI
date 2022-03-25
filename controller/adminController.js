// const Admin = require("../models/admin");
// const News = require("../models/news");
const db = require("../models")

const Admin = db.admin;
const Tutor = db.tutor;


const createAdmin = async (req,res) =>{   
    try{
        // const admin = req.body; 
        let admin = {
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
            status: req.body.status,
        }
       await Admin.create(admin);
        return res.status(200).send("Create admin success");
    }catch(e){
        return res.status(e.status || 400).send("Message"+e.message);
    }
}


const LoginAdminWithUsername = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const reponse = await Admin.findOne({
            where: {email: email,
                password: password
            }
        })
        console.log("resposne"+ reponse)
        if(reponse){
            
                return res.status(200).send(true);
           
            
        }else{
            return res.status(400).send(false);
        }
    }catch(err){
        return res.status(400).send(false);
    }
}

const acceptTutor = async (req,res) =>{

    const idTutor = req.params.idTutor;
    const tutor = await Tutor.findByPk(idTutor);
    if(tutor == null) {
        return res.status(400).send({message:result});
    }
    tutor.update({status:"active"}).then((result) =>{
        return res.status(200).send({message:result})
    }).catch((err) =>{
        return res.status(400).send({message:err.message})
    })

}


module.exports = {
    acceptTutor,
    createAdmin,
    LoginAdminWithUsername
}