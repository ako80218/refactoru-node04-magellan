
var userModel = require('../models/users.js');
var countriesModel = require('../models/countries.js');
module.exports = {
    index:function(req, res){
        var webName = req.params.webName;
        console.log('Countries model: ', countriesModel.findOne(webName));
        res.render('index', {
            title: 'Magellan\'s Voyage',
            country: countriesModel.findOne(webName)
        });
    }
}