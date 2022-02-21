const db = require('../models');

const News = db.news;

const createNews = async (req, res, next) => {
    try{
        let news = {
            title: req.body.title,
            content: req.body.content,
            
        }
        await News.create(news);
        return res.status(200).send("Create news successfully");

    }catch(err){
        res.status(err.status || 400).send("Message"+err.message);
    }
}

const getAllNews = async (req, res, next) => {

    try{
        const news = await News.findAll();
        return res.status(200).send(news);
    }catch(er){
        return res.status(er.status || 400).send("Message"+er.message)
    }

}

module.exports = {
    createNews,
    getAllNews
}