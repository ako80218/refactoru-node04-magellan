var countriesModel= require('../models/countries.js');
var userModel = require('../models/users.js');
var counter = 0;
// console.log("find User: ", userModel.findUser(0));
module.exports = {
    index:function(req, res){
        var webName = req.params.webName;
        var currentUser = userModel.findUser(0)[0];
        res.render('countries', {
            title: currentUser.lastName + '\'s Voyage',
            country: countriesModel.findOne(currentUser.locationsExplored[counter]),
            user: currentUser
        });
        if (counter< currentUser.locationsExplored.length){
            counter++;
        }
    }
}
