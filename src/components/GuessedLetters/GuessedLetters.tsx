import React from "react";
import { Letter } from "../../types/types";
import LetterField from "../LetterField/LetterField";
import { GuessedLettersContainer } from "./GuessedLetters.sc";

type Props = {
	wordToGuess: Letter[];
	selectedLetters: Letter[];
};

const GuessedLetters = ({ wordToGuess, selectedLetters }: Props) => {
	return (
		<GuessedLettersContainer>
			{wordToGuess.map((letter: Letter, index) => {
				if (selectedLetters.indexOf(letter) !== -1) {
					return <LetterField selectedLetter={letter} key={letter + index} />;
				} else {
					return <LetterField key={letter + index} />;
				}
			})}
		</GuessedLettersContainer>
	);
};

export default GuessedLetters;
