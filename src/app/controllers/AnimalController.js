
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
        res.render('map');
    }
}

module.exports= new AnimalController;