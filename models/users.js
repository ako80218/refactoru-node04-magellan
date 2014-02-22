var utility = require('./utility.js');
var users=[
{
    id: 0,
    firstName: 'Christopher',
    lastName: 'Columbus',
    info: 'Columbus was an explorer.',
    image:'/images/columbus.png',
    locationsExplored: [6]
},
{
    id: 1,
    firstName: 'Ferdinand',
    lastName: 'Magellan',
    info: 'Magellan was an explorer.',
    image:'/images/magellan.gif',
    locationId: 'seville',
    locationsExplored: [0,1,2,3,4,5]
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
    findCountry: function(){

    }
    // userLocation:function(){
    //     return utility.pluck(users, locationId)
    // }
}