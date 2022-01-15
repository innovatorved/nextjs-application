const mongoos = require('mongoose');

//  HeroSchema
const HeroSchema = mongoos.Schema({
    superHero : {
        type : String,
        required : [true , 'Hero name is required'],
        unique : true,
        trim : true
    },
    realName : {
        type : String,
        required : [true, 'pls keep real name short']
    }
});

//  import the model
module.exports = mongoos.models.Hero || mongoos.model('Hero', HeroSchema);