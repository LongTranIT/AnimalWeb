const dotenv = require("dotenv/config");
const Animal = require("../models/Animal");

class AnimalController {
    //[GET] /
    showHome(req, res) {
        res.render("home");
    }

    //[GET] /discover/:page?queryParams
    showDiscover(req,res){
        let query={};
        let search="";
        if (req.query.hasOwnProperty("q")) {
            query.vietnamse_name= { $regex: req.query.q, $options: "i" };
            search = req.query.q;
        } 
        if (req.query.hasOwnProperty("phylum")) {
            query.phylum= req.query.phylum;
            search += req.query.phylum+"-";
        } 
        if (req.query.hasOwnProperty("class")) {
            query.class= req.query.class;
            search += req.query.class+"-";
        } 
        if (req.query.hasOwnProperty("order")) {
            query.order= req.query.order;
            search += req.query.order+"-";
        } 
        if (req.query.hasOwnProperty("family")) {
            query.family= req.query.family;
            search += req.query.family+"-";
        } 
        if (req.query.hasOwnProperty("conservation_status_red_book_vn")) {
            query.conservation_status_red_book_vn= req.query.conservation_status_red_book_vn;
            search += req.query.conservation_status_red_book_vn+"-";
        } 
        let page = req.params.page ;
        let limitPage = req.query.limitPage || 6;
        Promise.all([
            Animal.find(query)
                .lean()
                .skip((limitPage * page) - limitPage)
                .limit(limitPage),
            Animal.countDocuments(query)
        ])
            .then(([animals,totalDocument])=>res.render('discover',{
                data:animals,
                currentPage: parseInt(page),
                totalPage: Math.ceil(totalDocument / limitPage),
                search
            }))
    }

    //[GET] /info/:slug
    showInfo(req, res) {
        Animal.findOne({ slug: req.params.slug })
            .lean()
            .then((animal) => res.render("info", { animal }))
            .catch((err) => res.json(err));
    }
    //[GET] /search
    search(req, res) {
        res.render("search");
    }
    //[GET] /aboutus
    aboutUs(req, res) {
        res.render("aboutUS");
    }
    //[GET] /map/:slug
    mapDetail(req, res) {
        const key = process.env.MAP_API_KEY + "";
        Animal.findOne({slug:req.params.slug})
            .lean()
            .then((animal) => {
                res.render("mapDetail", { key,locations:animal.coordinations,name:animal.vietnamse_name,icon:animal.icon})
            })
            .catch((err) => res.json(err));
        // res.render("map", { key });
    }
    //[GET] /map
    mapAll(req, res) {
        const key = process.env.MAP_API_KEY + "";
        Animal.find({},{vietnamse_name:1,coordinations:1, icon:1, _id:0})
            .lean()
            .then(animals=>{
                res.render('mapAll',{key,animals})
            })
            .catch(err=>res.json(err));
    }
}

module.exports = new AnimalController();
