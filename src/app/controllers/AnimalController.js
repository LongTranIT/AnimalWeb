
const dotenv = require('dotenv/config');
const Animal =require('../models/Animal');

class AnimalController{
    //[GET] /
    showHome(req,res){
        res.render('home');
    }
    showDiscover(req,res){
        Animal.find({})
            .lean()
            .limit(6)
            .then(data=>res.render('discover',{data}))
            .catch(err=>res.json(err))
    }
    showInfo(req,res){
        res.render('info');
    }
    search(req,res){
        res.render('search');
    }
    aboutUs(req,res){
        res.render('aboutUS');
    }
    map(req,res){
        const key=process.env.MAP_API_KEY+"";
        res.render('map',{key});
    }
}

module.exports= new AnimalController;