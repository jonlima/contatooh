var mongoose = require('mongoose');
mongoose.set('debug', true);

module.exports = function(){
    
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        emergencia: {
            type: mongoose.Schema.ObjectId,
            ref: 'Contato'
        }
    });
    
    return mongoose.model('Contato', schema);
    
};