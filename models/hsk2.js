const mongoose=require('mongoose');
const Schema = mongoose.Schema;


const characterSchema= new Schema({
    Character: {
        type: String,
        required: true
    },
    Traditional: {
        type: String,
        required: true
    },
    Pronounciation: {
        type: String,
        required: true
    },
    Meaning: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
});
//2 args, name of model/ A pointer to the Schema
module.exports=mongoose.model('hsk2',characterSchema);