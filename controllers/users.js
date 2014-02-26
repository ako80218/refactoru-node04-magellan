/*
 * GET users listing.
 */
// var utility = require('../utility/utility.js');

var userModel = require('../models/users.js');
module.exports = {
    index:function(req, res){
        res.render('home', {
            title: 'Welcome to World Explorers',
            users: userModel.findAll()
        });
    },
    findUser:function(req, res){
        var id = parseInt(req.params.id);
        // filter(userModel.findAll(), function(user){
        //     // console.log('user.lastName', user.lastName); 
        //     if (user.id === id){
        //         // console.log('user.lastName', user.lastName)
        //         res.redirect('/users/'+ user.lastName);
        //         // res.redirect(route);
        //         // return user;
        //     }
        
        // });
console.log("userMOdel: ", userModel);
        var currentUser = userModel.idFilter(id);
        
              res.redirect('/users/'+ currentUser.lastName);  
            
        

    }
}

