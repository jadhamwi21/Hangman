import React from "react";
import { selectCurrentGameView } from "../selectors/gameSelectors";
import { useAppSelector } from "../store/store";
import { GameView } from "../types/types";
import GameMenuView from "../views/GameMenuView";
import GameOverView from "../views/GameOverView";
import GameRunningView from "../views/GameRunningView";

const RenderGameView = (gameView: GameView): JSX.Element => {
	if (gameView === "Game Menu") {
		return <GameMenuView />;
	}
	if (gameView === "Game Running") {
		return <GameRunningView />;
	}
	if (gameView === "Game Over") {
		return <GameOverView />;
	}
	throw new Error("Unreachable");
};

const Game = () => {
	const gameView = useAppSelector(selectCurrentGameView);
	return RenderGameView(gameView);
};

export default Game;
