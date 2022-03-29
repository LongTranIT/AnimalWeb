const animalRouter=require('./animal');

function route(app){
    app.use('/',animalRouter);
}
module.exports=route;