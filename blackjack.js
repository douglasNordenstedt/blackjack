
let playagain = "ja";
let bettotal = 100;
let skiterbjörneniskogen = true;
while(playagain == "ja"){

let bet = 101;
while(bet>bettotal || bet<0 || Number.isInteger(bet) == false){
bet = parseInt(prompt(`ny omgång blackjack
vad vill du satsa?

saldo: ${bettotal}$$$`));
if(bet>bettotal){
    alert(`du kan inte satsa mer än vad du har dummy`)
}
if(bet<0){
    alert(`du kan inte satsa negativt dummy`)
}
}

while(skiterbjörneniskogen = true){

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

if(cardscore>10 && x>=9)
{
    cardscore = 10;
};

if(valör[x] == "A"){
    enemyacesinhand += 1;
    cardscore = 11;
}

return([färg[y], valör[x], cardscore]);
//return(`${färg[y]} ${valör[x]} ${cardscore}`);
};

let kortinfo = [];
let kortinfox = [];
let allcardinfo = [];
let allenemycardinfo = [];

//spelarens första kort
kortinfo.push(randomCard());
kortinfox.push(randomCard());

allcardinfo.push(kortinfo[0][0] + kortinfo[0][1])
allcardinfo.push(" " + kortinfox[0][0] + kortinfox[0][1])

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

allenemycardinfo.push(kortinfo[0][0] + kortinfo[0][1])
allenemycardinfo.push(" " + kortinfox[0][0] + kortinfox[0][1])

let enemycard = ((kortinfo[0][0]) + (kortinfo[0][1]));
let enemycardx = ((kortinfox[0][0]) + (kortinfox[0][1]));
let enemyscore = ((kortinfo[0][2]) + (kortinfox[0][2]));

if(enemyacesinhand>0 && enemyscore>21){
    enemyscore -= 10;
    enemyacesinhand -= 1;
    };

    kortinfo = [];
    kortinfox = [];

//alla förberedelser klara

let choice = "h";
while(choice == "h" && playerscore < 21){
choice = prompt(
    `dina kort är ${allcardinfo}
din poäng är ${playerscore}

motståndarens kort är ${enemycard} och *********
motståndarens poäng är *********

hit or stand? (h/s)

insats: ${bet}$$$`
)

if(choice != "h"){
    break;
}

kortinfo.push(randomCard());
allcardinfo.push(" " + kortinfo[0][0] + kortinfo[0][1]);

playerscore += (kortinfo[0][2]);

if(acesinhand>0 && playerscore>21){
playerscore -= 10;
acesinhand -= 1;
};

kortinfo = [];

if(playerscore>21){
    bettotal -= bet;
    alert(`bust (${playerscore} poäng)
${allcardinfo}

insats: ${bet}$$$
förlust: -${bet}$$$
saldo: ${bettotal}$$$`);
};
};

if(playerscore>21){
    break;
}





if(playerscore == 21 && enemyscore != 21){
    bettotal += bet;
    alert(`du vann emot ${allenemycardinfo} (${enemyscore}poäng)
 ${allcardinfo} (21 poäng)
 
insats: ${bet}$$$
vinst: +${bet}$$$
saldo: ${bettotal}$$$`);

break;
};


while(enemyscore<17){
    kortinfo.push(randomCard());
    allenemycardinfo.push(" " + kortinfo[0][0] + kortinfo[0][1]);
    enemyscore += (kortinfo[0][2]);

    if(enemyacesinhand>0 && enemyscore>21){
        enemyscore -= 10;
        enemyacesinhand -= 1;
        };

    kortinfo = [];
};

if(enemyscore == 21 && playerscore != 21){
    bettotal -= bet;
    alert(`dealer vann direkt med ${enemycard} och ${enemycardx} (21 poäng)
${allcardinfo} (${playerscore} poäng)

insats: ${bet}$$$
förlust: -${bet}$$$
saldo: ${bettotal}$$$`);

break;
};

if(enemyscore>21){
    bettotal += bet;
    alert(`dealer busted ${allenemycardinfo}(${enemyscore} poäng)
du vann med ${allcardinfo} (${playerscore} poäng)

insats: ${bet}$$$
vinst: +${bet}$$$
saldo: ${bettotal}$$$`);

break;
};

if (enemyscore>playerscore){
    bettotal -= bet;
    alert(`dealer vann med ${enemyscore} poäng (${allenemycardinfo})
emot ${playerscore} poäng(${allcardinfo})

insats: ${bet}$$$
förlust: -${bet}$$$
saldo: ${bettotal}$$$`);

break;
};

if (playerscore>enemyscore){
    bettotal += bet;
    alert(`du vann med ${playerscore} poäng emot ${allenemycardinfo} (${enemyscore} poäng)
 ${allcardinfo}
 
insats: ${bet}$$$
vinst: +${bet}$$$
saldo: ${bettotal}$$$`);

break;
};

if (playerscore==enemyscore){
    alert(`lika, du och dealer (${allenemycardinfo}) fick ${playerscore} poäng
${allcardinfo}

insats: ${bet}$$$
vinst: +0$$$
saldo: ${bettotal}$$$`);

break;
};
}
if(bettotal<=0){
    alert(`du fick slut på pengar`)
    break;
}
playagain = prompt(`fortsätt spela?(ja/nej)`);
};
alert(`hejdå :]`);