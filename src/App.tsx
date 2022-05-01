import React, { useState, ReactElement, ReactNode } from "react";
import "./stylesheets/index.css";
import { Card, Deck, unshuffledDeck } from "./Deck";
import arrayShuffle from "array-shuffle";

function App() {
	const [playerScore, setPlayerScore] = useState<number>(0);
	const [currentHand, setCurrentHand] = useState<Deck>([]);
	const [currentDeck, setCurrentDeck] = useState<Deck>(() =>
		arrayShuffle(unshuffledDeck)
	);

	const dealCard = (): void => {
		// place the top card from the deck into the player's hand
		const newHand = [...currentHand];
		newHand.push(currentDeck[0]);
		setCurrentHand(newHand);

		const newDeck = currentDeck.slice(1);
		setCurrentDeck(newDeck);
	};

	return (
		<div className="App">
			<button className="deal-button" onClick={() => dealCard()}>
				Hit
			</button>

			<ul className="current-hand">
				{currentHand.map((card: Card): ReactNode => {
					return (
						<li className="card" key={card.value}>
							{card.icon}
						</li>
					);
				})}
			</ul>

			<div>
				There are {currentDeck.length} cards remaining in the deck
			</div>
		</div>
	);
}

export default App;

// NOTE - I am aware that the card list items will have overlapping keys
//     currently trying to decide the best way to deal with this
