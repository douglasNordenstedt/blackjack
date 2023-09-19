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
let kortinfox = [];

//spelarens första kort
kortinfo.push(randomCard());
kortinfox.push(randomCard());


let playerscore = ((kortinfo[0][2]) + (kortinfox[0][2]));
//console.log(`dina kort är ${kortinfo[0][0]} ${kortinfo[0][1]} och ${kortinfox[0][0]} ${kortinfox[0][1]}`);
//console.log(`din poäng är ${playerscore}`);

kortinfo = [];
kortinfox = [];

//motståndarens första kort
kortinfo.push(randomCard());
kortinfox.push(randomCard());
let enemyscore = ((kortinfo[0][2]) + (kortinfox[0][2]));
//console.log(`motståndarens kort är ${kortinfo[0][0]} ${kortinfo[0][1]} och ${kortinfox[0][0]} ${kortinfox[0][1]}`);
//console.log(`motståndarens poäng är ${enemyscore}`);


let choice = prompt(
    `dina kort är ${kortinfo[0][0]} ${kortinfo[0][1]} och ${kortinfox[0][0]} ${kortinfox[0][1]}
din poäng är ${playerscore}

motståndarens kort är ${kortinfo[0][0]} ${kortinfo[0][1]} och ${kortinfox[0][0]} ${kortinfox[0][1]}
motståndarens poäng är ${enemyscore}

hit or stand? (h/s)`
)


if(choice = h){

}

if(choice = s){

}
