var utility = require('../utility/utility.js');
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
    // userLocation:function(){
    //     return utility.pluck(users, locationId)
    // }
    idFilter: function(id) {
        console.log("id: ", id);
            var allUsers=users.slice(0);
            console.log("allUsers: ", allUsers);
            var output = [];
            for(var i=0; i<allUsers.length; i++) {
                console.log("allUsers["+ String(i)+"].id", allUsers[i].id);
                if(allUsers[i].id === id){
                    output.push(allUsers[i]);
                    console.log("match Found");
                    console.log("output: ", output);
                }
            }
            
            return output[0];
    }
}