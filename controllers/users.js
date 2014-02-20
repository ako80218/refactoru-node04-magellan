
/*
 * GET users listing.
 */
var userModel = require('../models/users.js');
module.exports = {
    index:function(req, res){
        res.render('index', {
            title: 'Magellan\'s Voyage',
            user: userModel.findAll()[0]
        });
    }
}