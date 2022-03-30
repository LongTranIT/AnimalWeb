
const dotenv = require('dotenv/config');

class AnimalController{
    //[GET] /
    showHome(req,res){
        res.render('home');
    }
    showDiscover(req,res){
        res.render('discover');
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