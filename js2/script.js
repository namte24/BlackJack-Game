let cards = [];

let sum = 0;
 
let hasBlackjack = false;

let isAlive = false;
let message = " ";
//console.log(sum);

let messageEl = document.getElementById("message-el")
//console.log(messageEl);

let sumEl = document.getElementById("sum-el");
//console.log(sumEl)

let cardsEl = document.getElementById("cards-el");


let player = {
    name : "player",
     chips : 145,

}

let playerEl =document.getElementById("player-el");
playerEl.textContent = player.name+ ": $" + player.chips;

function getRandomcard(){
    let randNum =  Math.floor(Math.random()*13)+1;

    if(randNum > 10){
        return 10;
    }
    else if(randNum == 1){
        return 11;
    }
    else{
        return randNum;
    }
}
function startgame(){
    let firstCard = getRandomcard();
    let secondCard = getRandomcard();
    cards = [firstCard + secondCard];
    sum = firstCard + secondCard;

    isAlive = true;
    rendergame();
}

function rendergame(){
    cardsEl.textContent = "Cards: " ;
    for(let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum<21){
        message = "Do you want to  draw another card? ";
    }
    else if(sum === 21){
        message = "Wohoo! You've got blackjack";
        hasBlackjack = true;
    }
    else {
        message = "You're out of the game ";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newcard(){
    if(isAlive === true && hasBlackjack === false)
    {
        let new_card = getRandomcard();

        sum +=new_card;
        cards.push(new_card);
        rendergame();
    }
}
    





