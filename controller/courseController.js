const db = require('db')
const Course = db.course;


const addCourse = async (req,res) =>{
    try {
        let course = {
            author: req.body.author,
            name: req.body.name,
            description: req.body.description,
            ageLimit: req.body.ageLimit,
            price: req.body.price,
        }
        await Course(course);
        return res.status(200).send({Message: 'Course added successfully'});
    }catch(e){
        res.status(400).send({mesage: e.message});
    }   


} 

const getALlCourse = async (req,res) =>{

    try{
        const course  = await Course.findAll();
        return res.status(200).send({data: course});
    }catch(err){
        return res.status(400).send({mesage: err.message});
    }

}

const getCourseWithId = async (req,res) =>{
    try{
        const id = req.params.id;
        const Course = await Course.findById({author:id});
        return res.status(200).send({data: Course})
    }catch(err){
        return res.status(400).send({mesage: err.message});
    }
}

module.exports = {
    addCourse,
    getCourseWithId,
    getALlCourse
}