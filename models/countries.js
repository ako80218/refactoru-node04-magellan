var countries = [
{
id: 0,
name: 'Seville',
webName: 'seville',
info: 'Seville is a Spanish city, it is the capital and largest city of the autonomous community of Andalusia and the province of Seville. It is situated on the plain of the River Guadalquivir. The inhabitants of the city are known as sevillanos (feminine form: sevillanas) or hispalenses, after the Roman name of the city, Hispalis. Seville has a municipal population of about 703,000 as of 2011, and a metropolitan population of about 1.5 million, making it the fourth-largest city in Spain and the 30th most populous municipality in the European Union. Its Old Town, the third largest in Europe with an area of 4 square kilometres (2 sq mi), contains three UNESCO World Heritage Sites: the Alcázar palace complex, the Cathedral and the General Archive of the Indies. The Seville harbour, located about 80 kilometres (50 miles) from the Atlantic Ocean, is the only river port in Spain.',
image:'/images/seville.jpg'
},
{
id: 1, 
name: 'Canary Islands',
webName: 'canary_islands', 
info: 'The Canary Islands also known as the Canaries (Spanish: Canarias), are a Spanish archipelago located just off the northwest coast of mainland Africa, 100 kilometres (62 miles) west of the border between Morocco and the Western Sahara. The Canaries are one of Spain\'s 17 autonomous communities and are among the outermost region of the European Union proper. The islands include (from largest to smallest): Tenerife, Fuerteventura, Gran Canaria, Lanzarote, La Palma, La Gomera, El Hierro, La Graciosa, Alegranza, Isla de Lobos, Montaña Clara, Roque del Este and Roque del Oeste',
image:'/images/canary islands.jpg'
},
{
id: 2, 
name: 'Cape Verde', 
webName: 'cape_verde',
info: 'Cape Verde  is an island country spanning an archipelago of 10 volcanic islands in the central Atlantic Ocean. Located 570 kilometres (350 miles) off the coast of Western Africa, the islands cover a combined area of slightly over 4,000 square kilometres (1,500 sq mi). Three (Sal, Boa Vista and Maio) are fairly flat, sandy and dry; the others generally rockier with more vegetation. Portuguese explorers discovered and colonized the previously uninhabited islands in the 15th century. Ideally located for the Atlantic slave trade, they grew prosperous and often attracted privateers and pirates, among them Sir Francis Drake, a corsair privateering under Letter of marque granted by the English crown who twice sacked the (then) capital Ribeira Grande in the 1580s. The islands were also visited by Charles Darwin\'s expedition in 1832.',
image:'/images/cape verde.jpg'
},
{
id: 3, 
name: 'Strait of Magellan',
webName: 'strait_of_magellan', 
info: 'The Strait of Magellan (also called the Straits of Magellan ) is a navigable sea route immediately south of mainland South America and north of Tierra del Fuego. The strait is the most important natural passage between the Atlantic and Pacific oceans, but it is considered a difficult route to navigate because of the unpredictable winds and currents and the narrowness of the passage.',
image:'/images/strait of magellan.jpg'
},
{
id: 4, 
name: 'Guam',
webName: 'guam', 
info: 'Guam is an organized, unincorporated territory of the United States in the western Pacific Ocean. It is one of five U.S. territories with an established civilian government.[4][5] Guam is listed as one of seventeen Non-Self-Governing Territories by the Special Committee on Decolonization of the United Nations. The island\'s capital is Hagåtña (formerly named Agana). Guam is the largest and southernmost of the Mariana Islands.',
image:'/images/guam.jpg'
},
{
id: 5, 
name: 'Phillipines',
webName: 'phillipines', 
info: 'The Phillipines, officially known as the Republic of the Philippines (Filipino: Repúblika ng Pilipinas), is a sovereign island country in Southeast Asia situated in the western Pacific Ocean. To its north across the Luzon Strait lies Taiwan; west across the South China Sea sits Vietnam; southwest is the island of Borneo across the Sulu Sea, and to the south the Celebes Sea separates it from other islands of Indonesia; while to the east it is bounded by the Philippine Sea and the island-nation of Palau. Its location on the Pacific Ring of Fire and close to the equator make the Philippines prone to earthquakes and typhoons, but also endows it with abundant natural resources and some of the world\'s greatest biodiversity. At 300,000 square kilometers (115,831 sq mi), the Philippines is the 64th-largest country in the world,[10] consisting of an archipelago of 7,107 islands that are categorized broadly under three main geographical divisions: Luzon, Visayas, and Mindanao. Its capital city is Manila while its most populous city is Quezon City; both are part of Metro Manila.',
image:'/images/phillipines.jpg'
},
{
id: 6, 
name: 'Phillipines',
webName: 'phillipines', 
info: 'The Phillipines, officially known as the Republic of the Philippines (Filipino: Repúblika ng Pilipinas), is a sovereign island country in Southeast Asia situated in the western Pacific Ocean. To its north across the Luzon Strait lies Taiwan; west across the South China Sea sits Vietnam; southwest is the island of Borneo across the Sulu Sea, and to the south the Celebes Sea separates it from other islands of Indonesia; while to the east it is bounded by the Philippine Sea and the island-nation of Palau. Its location on the Pacific Ring of Fire and close to the equator make the Philippines prone to earthquakes and typhoons, but also endows it with abundant natural resources and some of the world\'s greatest biodiversity. At 300,000 square kilometers (115,831 sq mi), the Philippines is the 64th-largest country in the world,[10] consisting of an archipelago of 7,107 islands that are categorized broadly under three main geographical divisions: Luzon, Visayas, and Mindanao. Its capital city is Manila while its most populous city is Quezon City; both are part of Metro Manila.',
image:'/images/phillipines.jpg'
},

];
module.exports={
    findAll: function(){
        return countries.slice(0);
    },
    findOne: function(id) {
        return countries.filter(function(item) {
            return item.id === id;
        })[0]}
}