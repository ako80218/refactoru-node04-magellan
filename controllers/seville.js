
var userModel = require('../models/users.js');
var countriesModel = require('../models/countries.js');
module.exports = {
    index:function(req, res){
        var id = parseInt(req.params.id);
        res.render('index', {
            country: countriesModel.findAll()[id]
        });
    }
}