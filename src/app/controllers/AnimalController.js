const dotenv = require("dotenv/config");
const Animal = require("../models/Animal");

class AnimalController {
    //[GET] /
    showHome(req, res) {
        res.render("home");
    }
    showDiscover(req, res) {
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
        Animal.find(query)
                .lean()
                .limit(6)
                .then((data) => res.render("discover", { data, search }))
                .catch((err) => res.json(err));
    }

    showInfo(req, res) {
        Animal.findOne({ slug: req.params.slug })
            .lean()
            .then((animal) => res.render("info", { animal }))
            .catch((err) => res.json(err));
    }
    search(req, res) {
        res.render("search");
    }
    aboutUs(req, res) {
        res.render("aboutUS");
    }
    map(req, res) {
        const key = process.env.MAP_API_KEY + "";
        res.render("map", { key });
    }
}

module.exports = new AnimalController();
