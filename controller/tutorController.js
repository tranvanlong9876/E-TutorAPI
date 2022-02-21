const db = require('..models');

const Tutor = db.tutors;

const registerTutors = async (req,res) =>{
    const email = Tutor.findOne(req.body.email);
    if(email != null) {
        const {name,passwords,address} = await req.body;
        const tutors = {
            email: email,
            name:name,
            password: passwords,
            address: address
        }
        try{
            Tutor.create(tutors);
            return res.status(200).send("Create tutor success!");
        }catch(err){
            return res.status(400).send({message: err.message});
        }
    }else{
        return res.status(400).send({message:"Email alredy useing"});
    }
}


const getTutorProfile = async(req,res) => {
    const id  = req.params.id;
    const tutors = await Tutor.findOne(id);
    if(tutors != null){
        return res.status(200).send({profile:tutors});
    }else{
        return res.status(400).send({message:"No profile with id"+id});
    }
}

module.exports = {
    registerTutors,
    getTutorProfile
}