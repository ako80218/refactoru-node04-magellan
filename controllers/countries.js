var countriesModel= require('../models/countries.js');
var userModel = require('../models/users.js');
console.log("find User: ", userModel.findUser(0));
module.exports = {
    index:function(req, res){
        var webName = req.params.webName;
        res.render('countries', {
           title: 'Magellan\'s Voyage',
            country: countriesModel.findOne(webName),
            user: userModel.findUser(0)[0]
        });
    }
}
