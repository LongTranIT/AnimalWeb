
const dotenv = require('dotenv/config');
const Animal =require('../models/Animal');

class AnimalController{
    //[GET] /
    showHome(req,res){
        res.render('home');
    }
    showDiscover(req,res){
        if(req.query.hasOwnProperty('q')){
            const search=req.query.q;
            Animal.find({vietnamse_name:{$regex: req.query.q, $options: 'i'}})
            .lean()
            .limit(6)
            .then(data=>res.render('discover',{data,search}))
            .catch(err=>res.json(err))
        }
        else{
            Animal.find({})
            .lean()
            .limit(6)
            .then(data=>res.render('discover',{data}))
            .catch(err=>res.json(err))
        }
    }
        
    showInfo(req,res){
        Animal.findOne({slug:req.params.slug})
            .lean()
            .then(animal=>res.render('info',{animal}))
            .catch(err=>res.json(err))
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