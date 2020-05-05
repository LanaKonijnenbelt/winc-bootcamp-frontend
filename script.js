const age = 46;
const name = "Marieke";
const totalAmount = 27;



if (age >= 18 && age <=25){

    console.log('Gefeliciteerd! Je krijgt 50% korting op bier!')

} else{

    console.log('Sorry, wij doen aan leeftijdsdiscriminatie, en daarom moet jij de volle mep betalen. Flauw hè? (Tip: onze overburen van The Skiff doen het precies andersom! ;))')

}

if (name === "Sarah" || name === "Bram"){

    console.log('Wij bestaan 50 jaar! Daarom krijgt iedereen die Sarah of Bram heet vandaag een gratis biertje!')
 
}

if (totalAmount >= 25 && totalAmount < 50){

    console.log('Je hebt voor meer dan 25 euro aan drankjes besteld. Daarom krijg je van ons een gratis portie bitterballen (vegetarisch of vegan ook mogelijk!)')

}

else if(totalAmount >=50 && totalAmount < 100){

    console.log('Je hebt voor meer dan 50 euro aan drankjes besteld. Daarom krijg je van ons een gratis portie nachos!')

}

else if(totalAmount >=100){

    console.log('Je hebt voor meer dan 100 euro aan drankjes besteld. Daarom krijg je van ons een gratis fles champagne!')

}
