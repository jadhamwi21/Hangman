import React from "react";
import GameOver from "../components/GameOver/GameOver";
import GameOverViewLayout from "../layouts/GameOverViewLayout";
import { selectWordToGuess } from "../selectors/gameSelectors";
import { selectGuesses } from "../selectors/playerSelectors";
import { useAppSelector } from "../store/store";

type Props = {};

const GameOverView = (props: Props) => {
	const guesses = useAppSelector(selectGuesses);
	const unguessedWord: string = useAppSelector(selectWordToGuess)
		.join("")
		.toLowerCase();
	return (
		<GameOverViewLayout>
			<GameOver guesses={guesses} unguessedWord={unguessedWord} />
		</GameOverViewLayout>
	);
};

export default GameOverView;
