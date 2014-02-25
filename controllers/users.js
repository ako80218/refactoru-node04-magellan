/*
 * GET users listing.
 */
var userModel = require('../models/users.js');
module.exports = {
    index:function(req, res){
        res.render('home', {
            title: 'Welcome to World Explorers',
            users: userModel.findAll()
        });
    },
    findUser:function(id){
        return users.filter(function(user){
             return user.id === id;
        })
    },
}

