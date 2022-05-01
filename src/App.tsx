import React, { useState, ReactElement, ReactNode, useEffect } from "react";
import "./stylesheets/index.css";
import { Card, Deck, Player, unshuffledDeck } from "./Deck";
import arrayShuffle from "array-shuffle";
import Game from "./components/Game/Game";

function App() {
	const [currentDeck, setCurrentDeck] = useState<Deck>(() =>
		arrayShuffle(unshuffledDeck)
	);
	const [players, setPlayers] = useState<Player[]>([]);
	const [pot, setPot] = useState<number>(0);

	const [inPlay, setInPlay] = useState<boolean>(false);
	const [numPlayers, setNumPlayers] = useState<number>(0);

	const startGame = (): void => {
		// shuffle deck
		// deal initial hand(s)
	};

	const stopGame = (): void => {
		// basically set everything back to its og state
	};

	useEffect(() => {
		// when inPlay changes, we either want to start a game...
		if (inPlay) {
			startGame();
		} else {
			stopGame();
		}
		// or quit a game
	}, [inPlay]);
	useEffect(() => {}, [numPlayers]);

	return (
		<div className="App">
			<Game />
		</div>
	);
}

export default App;
