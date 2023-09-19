const färg = ["Hjärter", "Spader", "Ruter", "Klöver"];
const valör = ["A" ,"2" ,"3","4", "5", "6" ,"7" ,"8","9","10","Knekt", "Dam", "Kung"];


function randomCard()
{
let y = Math.floor(Math.random()*3)
//console.log(färg[y]);

let x = Math.floor(Math.random()*12)
//console.log(valör[x]);

let cardscore = x + 1;


return([färg[y], valör[x], cardscore])
//return(`${färg[y]} ${valör[x]} ${cardscore}`);
};


let kortinfo = [];
kortinfo.push(randomCard());

let playerscore = kortinfo[0][2];
console.log(`${kortinfo[0][0]} ${kortinfo[0][1]}`);
console.log(`playerscore: ${playerscore}`);
let enemyscore = 0;






