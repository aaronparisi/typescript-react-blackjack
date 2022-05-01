import React from "react";
import InfoPane from "./InfoPane";
import Pit from "./Pit";

interface GameProps {}

const Game: React.FC<GameProps> = () => {
	return (
		<div className="game">
			<InfoPane />
			<Pit />
		</div>
	);
};

export default Game;
