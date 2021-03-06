
const express=require('express');
const router=express.Router();

const animalController=require('../app/controllers/AnimalController');

router.get('/',animalController.showHome);
router.get('/discover/:page',animalController.showDiscover);
router.get('/info/:slug',animalController.showInfo);
router.get('/search',animalController.search);
router.get('/aboutus',animalController.aboutUs);
router.get('/map/:slug',animalController.mapDetail);
router.get('/map',animalController.mapAll);
module.exports=router;