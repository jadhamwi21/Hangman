import React from "react";
import GameOver from "../components/GameOver/GameOver";
import GameOverViewLayout from "../layouts/GameOverViewLayout";
import { selectGuesses } from "../selectors/playerSelectors";
import { useAppSelector } from "../store/store";

type Props = {};

const GameOverView = (props: Props) => {
	const guesses = useAppSelector(selectGuesses);
	return (
		<GameOverViewLayout>
			<GameOver guesses={guesses} />
		</GameOverViewLayout>
	);
};

export default GameOverView;
