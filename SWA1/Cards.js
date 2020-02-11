// Generate a deck of cards

function deck() {
    let deck = [],
        sCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
    suits = ["Clubs", "Diamonds", "Hearts", "Spades"]

    for (let i = 0; i < sCards.length; i++) {
        for (let j = 0; j < suits.length; j++) {
            deck.push({
                [sCards[i]]: suits[j]
            })
        }
    }

    return deck
}

function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }
}

function drawRandomCard(deck) {
    return deck[Math.floor(Math.random() * deck.length)]
}

console.log("Generating a deck of cards")
var cards = deck()
console.log(cards)

console.log("Shuffling the deck")
shuffle(cards)
console.log(cards)

console.log("Drawing two random cards from the deck")
console.log(drawRandomCard(cards))
console.log(drawRandomCard(cards))