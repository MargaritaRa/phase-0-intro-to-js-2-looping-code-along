const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  
  }

  return gifts;
}

function writeCards(names, event) {
  let cards = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let greeting = `Thank you, ${name}, for the wonderful ${event} gift!`;
    cards.push(greeting);
  }
  return cards;
}

const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
const result = writeCards(names, event);
console.log(result);

function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

countDown(10); 

debugger
