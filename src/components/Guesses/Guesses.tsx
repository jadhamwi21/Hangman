import React from "react";
import { selectGuesses } from "../../selectors/playerSelectors";
import { useAppSelector } from "../../store/store";
import { GuessesContainer, GuessesNumber, GuessesText } from "./Guesses.sc";

const Guesses = () => {
	const guesses = useAppSelector(selectGuesses);
	return (
		<GuessesContainer>
			<div>
				<GuessesText>Guesses</GuessesText>
				<GuessesNumber>{guesses}</GuessesNumber>
			</div>
		</GuessesContainer>
	);
};

export default Guesses;
