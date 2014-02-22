var utility = require('./utility.js');
var users=[
{
    id: 0,
    firstName: 'Ferdinand',
    lastName: 'Magellan',
    info: 'Magellan was an explorer.',
    image:'images/magellan.gif',
    locationId: 'Seville'
}
];
module.exports ={
    findAll: function(){
        return users.slice(0);
    },
    findUser:function(id){
        return users.filter(function(user){
             return user.id === id;
        })
    },
    userLocation:function(){
        return utility.pluck(users, locationId)
    }
}