import React from "react";
import { CSSProperties } from "styled-components";
import { setGuesses } from "../../slices/player";
import { useAppDispatch } from "../../store/store";
import { quitGame, startGame } from "../../thunks/gameThunks";
import Button from "../Button/Button";
import {
	ButtonsContainer,
	GameOverContainer,
	GameOverText,
	NumberOfGuessesText,
	UnguessedWords,
} from "./GameOver.sc";

type Props = {
	guesses: number;
	unguessedWord: string;
};

const GameOver = ({ guesses, unguessedWord }: Props) => {
	const Dispatch = useAppDispatch();
	const buttonStyles: CSSProperties = { padding: "0.5em", margin: "2em" };
	return (
		<GameOverContainer>
			<GameOverText>Game Over</GameOverText>
			<NumberOfGuessesText>Number Of Guesses : {guesses}</NumberOfGuessesText>
			<UnguessedWords>Unguessed Word : {unguessedWord}</UnguessedWords>
			<ButtonsContainer>
				<Button
					onClick={() => {
						Dispatch(quitGame());
					}}
					style={buttonStyles}
				>
					Main Page
				</Button>
				<Button onClick={() => Dispatch(startGame())} style={buttonStyles}>
					Start Over
				</Button>
			</ButtonsContainer>
		</GameOverContainer>
	);
};

export default GameOver;
