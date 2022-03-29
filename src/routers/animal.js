
const express=require('express');
const router=express.Router();

const animalController=require('../app/controllers/AnimalController');

router.get('/',animalController.showHome);
router.get('/discover',animalController.showDiscover);
router.get('/info',animalController.showInfo);
router.get('/search',animalController.search);
router.get('/aboutus',animalController.aboutUs);
router.get('/map',animalController.map);
module.exports=router;