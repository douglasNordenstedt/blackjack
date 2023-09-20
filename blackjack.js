const färg = ["Hjärter", "Spader", "Ruter", "Klöver"];
const valör = ["A" ,"2" ,"3","4", "5", "6" ,"7" ,"8","9","10","Knekt", "Dam", "Kung"];

let acesinhand = 0;
function randomCard()
{
let y = Math.floor(Math.random()*4)
//console.log(färg[y]);

let x = Math.floor(Math.random()*13)
//console.log(valör[x]);

let cardscore = x + 1;


if(cardscore>10 && x>=9)
{
    cardscore = 10;
};

if(valör[x] == "A")
{
acesinhand += 1;
cardscore = 11;
};
return([färg[y], valör[x], cardscore]);

};

let enemyacesinhand = 0;
function randomEnemyCard()
{
let y = Math.floor(Math.random()*4)
//console.log(färg[y]);

let x = Math.floor(Math.random()*13)
//console.log(valör[x]);

let cardscore = x + 1;

if(valör[x] == "A"){
    enemyacesinhand += 1;
    cardscore = 11;
}

return([färg[y], valör[x], cardscore]);
//return(`${färg[y]} ${valör[x]} ${cardscore}`);
};

let kortinfo = [];
let kortinfox = [];

//spelarens första kort
kortinfo.push(randomCard());
kortinfox.push(randomCard());


let playercard = ((kortinfo[0][0]) + (kortinfo[0][1]));
let playercardx = ((kortinfox[0][0]) + (kortinfox[0][1]));
let playerscore = ((kortinfo[0][2]) + (kortinfox[0][2]));

if(acesinhand>0 && playerscore>21){
playerscore -= 10;
acesinhand -= 1;
};
//console.log(`dina kort är ${kortinfo[0][0]} ${kortinfo[0][1]} och ${kortinfox[0][0]} ${kortinfox[0][1]}`);
//console.log(`din poäng är ${playerscore}`);




kortinfo = [];
kortinfox = [];

//motståndarens första kort
kortinfo.push(randomEnemyCard());
kortinfox.push(randomEnemyCard());
let enemycard = ((kortinfo[0][0]) + (kortinfo[0][1]));
let enemycardx = ((kortinfox[0][0]) + (kortinfox[0][1]));
let enemyscore = ((kortinfo[0][2]) + (kortinfox[0][2]));

if(enemyacesinhand>0 && enemyscore>21){
    enemyscore -= 10;
    enemyacesinhand -= 1;
    };

kortinfo = [];
kortinfox = [];

//console.log(`motståndarens kort är ${kortinfo[0][0]} ${kortinfo[0][1]} och ${kortinfox[0][0]} ${kortinfox[0][1]}`);
//console.log(`motståndarens poäng är ${enemyscore}`);


let choice = prompt(
    `dina kort är ${playercard} och ${playercardx}
din poäng är ${playerscore}

motståndarens kort är ${enemycard} och ${enemycardx}
motståndarens poäng är ${enemyscore}

hit or stand? (h/s)`
)


if(choice = h){

}

if(choice = s){

}