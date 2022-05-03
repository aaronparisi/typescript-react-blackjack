import React from "react";
import { Deck, Player } from "../../Deck";

interface InfoPaneProps {
	currentDeck: Deck;
	players: Player[];
	pot: number;
	inPlay: boolean;
}

const InfoPane: React.FC<InfoPaneProps> = ({
	currentDeck,
	players,
	pot,
	inPlay,
}) => {
	return (
		<div className="info-pane">
			<div className="wealth-display">{players[0]?.wealth}</div>
			<div className="betting-widget">
				$
				<input
					type="number"
					step="5"
					min="0"
					max={players[0]?.wealth}
					defaultValue="10"
				/>
				<button className="bet-button">Bet!</button>
			</div>
			<div className="pot-display">{pot}</div>
			<div className="game-control-panel">
				<button className="num-player-button" id="add-player-button">
					+
				</button>
				<button
					className="num-player-button"
					id="subtract-player-button"
				>
					-
				</button>
				<button className="start-stop-button">
					{inPlay ? "Stop" : "Start"}
				</button>
			</div>
		</div>
	);
};

export default InfoPane;
