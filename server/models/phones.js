let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let Schema  = mongoose.Schema;
let phonesSchema = new Schema({
    age:        Number,
    _id:        String,
    imageUrl:   String,
    name:       String,
    snippet:    String
});
let Phones = mongoose.model('Phones', phonesSchema, 'Phones');

export default Phones;