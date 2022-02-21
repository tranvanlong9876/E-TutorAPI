const db = require('../models');

const Parents = db.parents;


const registerParents = async (req,res)=>{

    const email = Parents.findOne(req.body.email);
    if(email != null) {
        const {name,passwords,address} = await req.body;
        const items = {
            email: email,
            name:name,
            password: passwords,
            address: address
        }
        try{
            Parents.create(items);
            return res.status(200).send("Create tutor success!");
        }catch(err){
            return res.status(400).send({message: err.message});
        }
    }else{
        return res.status(400).send({message:"Email alredy useing"});
    }
    
}

const getParentsProfile = async(req,res) => {
    const id  = req.params.id;
    const items = await Parents.findOne(id);
    if(items != null){
        return res.status(200).send({profile:items});
    }else{
        return res.status(400).send({message:"No profile with id"+id});
    }
}



module.exports = {
    registerParents,
    getParentsProfile
}