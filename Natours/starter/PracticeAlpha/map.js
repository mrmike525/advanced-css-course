

const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["\u2665", "\u2660", "\u2663", "\u2666"];

const fullDeck = suits.map((value) => (
    numbers.map((nums) => (
        
        [{ suit: value, number: nums }]))));
console.log(fullDeck)

const drawOne = () => {
    const randomSuitIndex = Math.floor(Math.random() * suits.length);
    const randomNumberIndex = Math.floor(Math.random() * numbers.length);
    const randomCard = [suits[randomSuitIndex], numbers[randomNumberIndex]]
    return randomCard;
}
const drawFive = (draws = 5) => {
    const result = [];
    for (let draw = 1; draw <= draws; draw++) {
        
        result.push(drawOne())
    }
    return result;
};

const produceCard = () => {
    const body = document.body;
    const cardSection = document.createElement('section');
    cardSection.className = "card-main";
    const main = document.querySelector('.main');
    main.append(cardSection);
    cardSection.style.backgroundColor = "orange";
    cardSection.style.height = "95vw"
    const cardDiv = document.createElement('div');
    cardDiv.className = "card";
    // const 
}
produceCard();
