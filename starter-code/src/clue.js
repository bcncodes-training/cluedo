// Characters

let character1 = {first_name:"Jacob",
last_name:"Green", color:"green", description:"He has a lot of connections",age:"45",
image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",occupation:"Entrepreneur"};

let character2 = {first_name: "Doctor", last_name:"Orchid",color:"white",description:"PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:"26", image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg", ocupation:"Scientist"};

let character3 = {first_name:"Victor",last_name:"Plum",color:"purple",description:"Billionare video game designer",
age:"22",image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",occupation:"Designer"};

let character4 = {first_name:"Kasandra",last_name:"Scarlet",color:"red",description:"She is an A-list movie star with a dark past",
age:"31",image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",occupation:"Actor"};

let character5 = {first_name:"Eleanor",last_name:"Peacock",color:"blue",description:"She is from a wealthy family and uses her status and money to earn popularity",age:"36",image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",occupation:"Socialité"};

let character6 = {first_name:"Jack",last_name:"Mustard",color:"yellow",description:"He is a former football player who tries to get by on his former glory",age:"62",image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",occupation:"Retired Football player"};

// Weapons

let weapon1 = { name:"rope", weight: 10};
let weapon2 = { name:"knife", weight: 8}; 
let weapon3 = { name:"candlestick", weight: 2};
let weapon4 = { name:"dumbbell", weight: 30};  
let weapon5 = { name:"poison", weight: 2};
let weapon6 = { name:"axe", weight: 15}; 
let weapon7 = { name:"bat", weight: 13};    
let weapon8 = { name:"trophy", weight: 25};    
let weapon9 = { name:"pistol", weight: 20};   

// Rooms

let room1 = {name:"Dinning Room"};
let room2 = {name:"Conservatory"};
let room3 = {name:"Kitchen"};
let room4 = {name:"Study"};
let room5 = {name:"Library"};
let room6 = {name:"Billiard Room"};
let room7 = {name:"Lounge"};
let room8 = {name:"Ballroom"};
let room9 = {name:"Hall"};
let room10 = {name:"Spa"};
let room11 = {name:"Living Room"}
let room12 = {name:"Observatory"};
let room13 = {name:"Theater"};
let room14 = {name:"Guest House"};
let room15 = {name:"Patio"};



// Characters Collection
let charactersArray = [];
charactersArray.push(character1);
charactersArray.push(character2);
charactersArray.push(character3);
charactersArray.push(character4);
charactersArray.push(character5);
charactersArray.push(character6);

// Rooms' Collection
let roomsArray = [];
roomsArray.push(room1);
roomsArray.push(room2);
roomsArray.push(room3);
roomsArray.push(room4);
roomsArray.push(room5);
roomsArray.push(room6);
roomsArray.push(room7);
roomsArray.push(room8);
roomsArray.push(room9);
roomsArray.push(room10);
roomsArray.push(room11);
roomsArray.push(room12);
roomsArray.push(room13);
roomsArray.push(room14);
roomsArray.push(room15);

// Weapons Collection
let weaponsArray = [];
weaponsArray.push(weapon1);
weaponsArray.push(weapon2);
weaponsArray.push(weapon3);
weaponsArray.push(weapon4);
weaponsArray.push(weapon5);
weaponsArray.push(weapon6);
weaponsArray.push(weapon7);
weaponsArray.push(weapon8);
weaponsArray.push(weapon9);

/*  
let characterRand = charactersArray[Math.floor(Math.random() * charactersArray.length)];
console.log(characterRand.first_name);
console.log(characterRand.last_name);*/

/*  
let roomRand = roomsArray[Math.floor(Math.random() * roomsArray.length)];
console.log(roomRand.name);
console.log(roomRand);*/

function randomSelector(array){
  let resultado = array[Math.floor(Math.random() * array.length)];

  return resultado;
}


function pickMistery(){
  let personaje = randomSelector(charactersArray);
  let habitacion = randomSelector(roomsArray);
  let arma = randomSelector(weaponsArray);

  let lista = []
  lista.push(personaje);
  lista.push(arma);
  lista.push(habitacion);

  return lista;
}

let misteryEnvelope = pickMistery();

function revealMistery(misteryEnvelope){
return `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`;

}

console.log(revealMistery(misteryEnvelope));


