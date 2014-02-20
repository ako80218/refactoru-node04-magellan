var users=[
{
    id: 0,
    name: 'Ferdinand Magellan',
    info: 'Magellan was an explorer.',
    image:'images/magellan.gif'
}
];
module.exports ={
    findAll: function(){
        return users.slice(0);
    }
}