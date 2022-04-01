const mongoose=require('mongoose');

const Schema=mongoose.Schema;
const Animal=new Schema({
    id:Number,
    timestamp:String,
    science_name:String,
    vietnamse_name:String,
    local_name:String,
    gender:String,
    phylum:String,
    class:String,
    order:String,
    family:String,
    photos:{String},
    morphological_detail:String,
    ecological_detail:String,
    value_to_use:String,
    conservation_status_IUCN:String,
    conservation_status_red_book_vn:String,
    conservation_status_32_2006:String,
    conservation_status_CITES:String,
    distribution:String,
    coordinations:{String},
    specimen_status:String,
    habitat:String,
    place:String,
    collection_date:String,
    collection_person:String,
    slug:String,
    icon:String,
},{
    timestamps:true
})

module.exports=mongoose.model('animal',Animal);