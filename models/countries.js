var countries = [
{
id: 0, 
name: 'Seville', 
info: 'Seville is a Spanish city, it is the capital and largest\
city of the autonomous community of Andalusia and the province of Seville.',
image:'images/seville.jpg'
},
{
id: 1, 
name: 'Canary Islands', 
info: 'These are the Canary Islands',
image:'images/canary islands.jpg'
},
{
id: 2, 
name: 'Cape Verde', 
info: 'This is Cape Verde.',
image:'images/cape verde.jpg'
},
{
id: 3, 
name: 'Strait of Magellan', 
info: 'This is the Strait of Magellan.',
image:'images/strait of magellan.jpg'
},
{
id: 4, 
name: 'Guam', 
info: 'This is Guam.',
image:'images/guam.jpg'
},
{
id: 5, 
name: 'Phillipines', 
info: 'This is the Phillipines.',
image:'images/phillipines.jpg'
}
];
module.exports={
    findAll: function(){
        return countries.slice(0);
    }
}