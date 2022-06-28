"use strict";

(function() {

    // stolen from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function buildDeck() {
        let cards = [];

        // add cards for diamonds
        for (let i = 2; i <= 14; i++) {
            const card = buildCard(i, "diamonds");
            cards.push(card);
        }
        for (let i = 2; i <= 14; i++) {
            const card = buildCard(i, "spades");
            cards.push(card);
        }
        for (let i = 2; i <= 14; i++) {
            const card = buildCard(i, "clubs");
            cards.push(card);
        }
        for (let i = 2; i <= 14; i++) {
            const card = buildCard(i, "hearts");
            cards.push(card);
        }

        return cards;
    }

    function buildCard(rank, suit) {
        return {
            rank: rank,
                suit: suit,
            printCard: function() {
                if (this.rank < 11) {
                    return `${this.rank} of ${this.suit}`;
                } else {
                    switch (rank) {
                        case 11:
                            return `Jack of ${this.suit}`;
                        case 12:
                            return `Queen of ${this.suit}`;
                        case 13:
                            return `King of ${this.suit}`;
                        case 14:
                            return `Ace of ${this.suit}`;
                    }
                }
            }
        }
    }

    function printDeck(cards) {
        cards.forEach(function(card) {
            console.log(card.printCard());
        })
    }


    const cards = buildDeck();

    // shuffle the cards
    shuffleArray(cards);
    printDeck(cards);
    console.log(cards.length)

    let topCard = cards.pop();
    console.log(topCard.printCard());
    console.log(cards.length);

})();