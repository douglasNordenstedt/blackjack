const färg = ["Hjärter", "Spader", "Ruter", "Klöver"];
const valör = ["A" ,"2" ,"3","4", "5", "6" ,"7" ,"8","9","10","Knekt", "Dam", "Kung"];


function randomCard()
{
let y = Math.floor(Math.random()*4)
//console.log(färg[y]);

let x = Math.floor(Math.random()*13)
//console.log(valör[x]);

let cardscore = x + 1;


if(cardscore>10){
    cardscore = 10
}


return([färg[y], valör[x], cardscore])
//return(`${färg[y]} ${valör[x]} ${cardscore}`);
};



let kortinfo = [];
let kortinfox = [];

//spelarens första kort
kortinfo.push(randomCard());
kortinfox.push(randomCard());

//välj om A blir 1 eller 11
let acechoice = "1";

if(kortinfo[0][1] == "A")
{
    acechoice = prompt("ditt första kort är ett A. vad ska det vara värt?(1/11)")
   
    if(acechoice == "11"){
        kortinfo[0][2] += 10;
    };
    acechoice = "1";
};

if(kortinfox[0][1] == "A")
{
    acechoice = prompt("ditt andra kort är ett A. vad ska det vara värt?(1/11)")
    if(acechoice == "11")
    {
        kortinfox[0][2] += 10;
    }
    acechoice = "1";
};



let playercard = ((kortinfo[0][0]) + (kortinfo[0][1]));
let playercardx = ((kortinfox[0][0]) + (kortinfox[0][1]));
let playerscore = ((kortinfo[0][2]) + (kortinfox[0][2]));
//console.log(`dina kort är ${kortinfo[0][0]} ${kortinfo[0][1]} och ${kortinfox[0][0]} ${kortinfox[0][1]}`);
//console.log(`din poäng är ${playerscore}`);



kortinfo = [];
kortinfox = [];

//motståndarens första kort
kortinfo.push(randomCard());
kortinfox.push(randomCard());
let enemycard = ((kortinfo[0][0]) + (kortinfo[0][1]));
let enemycardx = ((kortinfox[0][0]) + (kortinfox[0][1]));
let enemyscore = ((kortinfo[0][2]) + (kortinfox[0][2]));
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