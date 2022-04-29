import React, { useState, ReactElement } from "react";
import "./stylesheets/index.css";
import { Card, Deck, unshuffledDeck } from "./Deck";
import arrayShuffle from "array-shuffle";

function App() {
	const [playerScore, setPlayerScore] = useState<number>(0);
	const [currentHand, setCurrentHand] = useState<Deck>([]);
	const [curDeck, setCurDeck] = useState<Deck>(() =>
		arrayShuffle(unshuffledDeck)
	);

	return (
		<div className="App">
			<p>
				There are {unshuffledDeck.length} cards in the unshuffled deck
			</p>
			<p>There are {curDeck.length} cards in the shuffled deck</p>
		</div>
	);
}

export default App;
