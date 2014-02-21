var countries = [
{
id: 0,
next : 'canary_islands', 
name: 'Seville',
webName: 'seville',
info: 'Seville is a Spanish city, it is the capital and largest\
city of the autonomous community of Andalusia and the province of Seville.',
image:'images/seville.jpg'
},
{
id: 1, 
next: 'cape_verde',
name: 'Canary Islands',
webName: 'canary_islands', 
info: 'These are the Canary Islands',
image:'images/canary islands.jpg'
},
{
id: 2, 
next: 'strait_of_magellan',
name: 'Cape Verde', 
webName: 'cape_verde',
info: 'This is Cape Verde.',
image:'images/cape verde.jpg'
},
{
id: 3, 
next: 'guam',
name: 'Strait of Magellan',
webName: 'strait_of_magellan', 
info: 'This is the Strait of Magellan.',
image:'images/strait of magellan.jpg'
},
{
id: 4, 
next: 'phillipines',
name: 'Guam',
webName: 'guam', 
info: 'This is Guam.',
image:'images/guam.jpg'
},
{
id: 5, 
next: 'seville',
name: 'Phillipines',
webName: 'phillipines', 
info: 'This is the Phillipines.',
image:'images/phillipines.jpg'
}
];
module.exports={
    findAll: function(){
        return countries.slice(0);
    },
    findOne: function(webName) {
        return countries.filter(function(item) {
            return item.webName === webName;
        })[0]}
}