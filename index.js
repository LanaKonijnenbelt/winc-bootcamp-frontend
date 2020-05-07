let name = prompt("Welkom bij dit spelletje. Wat is je naam?", "Schrijf hier jouw naam");

alert("Hoi " + name + "! We gaan het spel Raad Het Getal spelen. Klik op OK om te beginnen.");

let random = Math.floor(Math.random() * 10) + 1;

console.log(random);

let number = parseInt(
  prompt("Voer een getal in tussen de 1 en de 10 om te beginnen met raden.")
);

console.log(number);

let guess = 1;

while (number !== random && guess < 5) {
    if (number !== 1 && number !== 2 && number !== 3 && number !== 4 && number !== 5 && number !== 6 && number !== 7 && number !== 8 && number !== 9 && number !== 10) {
        alert(
          "Je hebt geen getal tussen de 1 en 10 ingevoerd. Je hebt nog " +
            (5 - guess) +
            " pogingen over. Klik op OK om verder te gaan."
        );
      } else {
        alert(
          "Jij koos " +
            number +
            ". Helaas, dat is niet het juiste getal. Je hebt nog " +
            (5 - guess) +
            " pogingen over. Klik op OK om verder te gaan."
    );
  }

  number = parseInt(
    prompt("Probeer het nog een keer. Voer een getal in tussen de 1 en de 10.")
  );
  guess++;
}

if (number === random) {
  alert("Gefeliciteerd, dat is het juiste nummer. Je hebt gewonnen!");
} else {
  alert("Helaas, " + name + ", je bent door al je pogingen heen en hebt het getal niet geraden. Volgende keer beter!");
}

alert("Bedankt voor het spelen! Tot de volgende keer!");
