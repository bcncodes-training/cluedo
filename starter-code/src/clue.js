// Characters


 let mrGreen = 
    {
first_name:   "Jacob",
last_name:    "Green",
color:        "green",
description:  "He has a lot of connections",
age:          45,
image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation:   "Entrepreneur"
};

let drOrchid =
    {
first_name:    "Doctor",
last_name:     "Orchid",
color:        "white",
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist"
};

let profPlum =
    {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer"
};

let missScarlet = 
    {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
};

let mrsPeacock = 
    {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"
};

let mrMustard = 
    {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"
};

// Weapons

 let weapon1 = {name: "rope", weight: 10};
 let weapon2 = {name: "knife", weight: 8};
 let weapon3 = {name: "candlestick", weight: 2};
 let weapon4 = {name: "dumbbell", weight: 30};
 let weapon5 = {name: "poison"      ,   weight: 2};
 let weapon6 = {name: "axe"         ,   weight: 15};
 let weapon7 = {name: "bat"         ,   weight: 13};
 let weapon8 = {name: "trophy"      ,   weight: 25};
 let weapon9 = {name: "pistol"      ,   weight: 20};
// Characters Collection
const charactersArray = [];
 charactersArray.push(mrGreen, mrMustard, mrsPeacock, missScarlet, profPlum, drOrchid);
// Rooms' Collection
const roomsArray = [
    {name: "Dinning Room"},
    {name: "Kitchen"},
    {name: "Conservatory"},
    {name: "Library"},
    {name: "Study"},
    {name: "Lounge"},
    {name: "Billiard Room"},
    {name: "Hall"},
    {name: "Ballroom"},
    {name: "Living Room"},
    {name: "Spa"},
    {name: "Theater"},
    {name: "Observatory"},
    {name: "Patio"},
    {name: "Guest House"}
];

// Weapons Collection
const weaponsArray = [];
weaponsArray.push(weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8,weapon9);

const randomSelector = (arr) => [...arr][Math.floor(Math.random() * arr.length)];

const pickMistery = () =>{
  let killer = randomSelector(charactersArray);
  let room   = randomSelector(roomsArray);
  let weaPon = randomSelector(weaponsArray);

  let carta = [];
  carta.push(killer);
  carta.push(weaPon);
  carta.push(room);
  return carta;
};
console.log(pickMistery());

let misteryEnvelope = pickMistery();

const revealMistery = (arr) => (`${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`);
console.log(revealMistery(misteryEnvelope));

/*******************************************************************************************/
/* 
const pickMistery = () => {
    let card = {killer: randomSelector(charactersArray.map((data) => `${data.first_name} ${data.last_name}`)), 
                weapon: randomSelector(weaponsArray.map((e) => `${e.name} and its weight is ${e.weight}`)), 
                room: randomSelector(roomsArray.map((e) => e.name))};
    return card;
};
console.log(pickMistery())

let misteryEnvelope = pickMistery();

const revealMistery = (arr) => `${arr.killer} killed Mr.Boddy using the ${arr.weapon} in the ${arr.room}!!!!`;
console.log(revealMistery(misteryEnvelope)); */

/*********************************Map cada elemento!!! ********************/

/* const pickMistery = () => {
    let card = [{killer: randomSelector(charactersArray.map((data) => `${data.first_name} ${data.last_name}`))}, 
                {weapon: randomSelector(weaponsArray.map((e) => `${e.name} and its weight is ${e.weight}`))}, 
                {room: randomSelector(roomsArray.map((e) => e.name))}];
    return card;
};
console.log(pickMistery())

let misteryEnvelope = pickMistery();

const revealMistery = (arr) => `${arr.map(e => e.killer)} killed Mr.Boddy using the ${arr.map(e => e.weapon)} in the${arr.map(e => e.room)}!!!!`;
console.log(revealMistery(misteryEnvelope)); */
