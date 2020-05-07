//Deel A

//bullet point 1

/*
makeCheeseSandwich
• Step 1: Get 2 slices of bread.
• Step 2: Put 3 slices of Violife vegan cheese on top of 1 slice of bread.
• Step 3: Put the other slice of bread on top of the first one.
*/

//bullet point 2

/*

function makeCheeseSandwich(){
    console.log('Step 1: Get 2 slices of bread.');
    console.log('Step 2: Put 3 slices of Violife vegan cheese on top of 1 slice of bread.');
    console.log('Step 3: Put the other slice of bread on top of the first one.');
}

makeCheeseSandwich();

//bullet point 3 en verder

function makeCheeseSandwich(withFilling1, withFilling2){
    console.log('Step 1: Get 2 slices of bread.');
    console.log('Step 2: Put 3 slices of Violife vegan cheese, ' + withFilling1 + 'and ' + withFilling2 + 'on top of 1 slice of bread.');
    console.log('Step 3: Put the other slice of bread on top of the first one.');
}

makeCheeseSandwich('6 slices of cucumber, ', '50 grams of lettuce ');

//Deel B: schrijf een functie met een argument

//punt 1-5

function makeSandwich(filling){
    console.log('There you go, a sandwich with ' + filling);
}

makeSandwich('topping');


//punt 6 en 7

/*
De functie declareer je bovenin je code en ziet er, abstract gezien, ongeveer zo uit:

function naamFunctie(parameter){
    console.log(HIER DECLAREER JE DE FUNCTIE)
}

Daaronder call je de functie. Abstract gezien ziet dat er ongeveer zo uit:

naamFunctie(argument)


//punt 8


function makeSandwich(filling1, filling2){
    console.log('There you go, a sandwich with ' + filling1 + ' and ' + filling2 + '!');
}

makeSandwich('bell pepper-garlic spread', 'olives');

*/

//Deel C: gebruik een return statement

//na uren worstelen, dingen uitproberen, alle video's nog een keer bekijken, aantekeningen doornemen... Maar het is gelukt!

/*
function calculateDiscountedPrice(totalAmount, discount) {
    return totalAmount * discount;
  }

let totalAmount = 3;
let discount = 0.8;
console.log(totalAmount * discount);
*/


//Deel D: gebruik meerdere return statements

//hier gaat iets niet goed, maar wat? Als ik node gebruik, komt er nog steeds 2.4 uit. Ik kom er niet uit en ga nu toch maar de opdracht inleveren.

function calculateDiscountedPrice(totalAmount, discount) {
    if (totalAmount >= 25) {
    return totalAmount * discount;
    } 
    else return totalAmount
  }
let totalAmount = 3;
let discount = 0.8;
console.log(totalAmount * discount);
