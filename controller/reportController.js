const db = require('../models');

const Report = db.report;

const createReport = async (req, res, next) => {
    try{
        let news = {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        }
        await Report.create(news);
        return res.status(200).send("Create news successfully");

    }catch(err){
        res.status(err.status || 400).send("Message"+err.message);
    }
}

const getAllReport = async (req, res, next) => {

    try{
        const report = await Report.findAll();
        return res.status(200).send(report);
    }catch(er){
        return res.status(er.status || 400).send("Message"+er.message)
    }

}

module.exports = {
    createReport,
    getAllReport
}