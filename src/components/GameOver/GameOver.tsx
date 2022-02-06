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
} from "./GameOver.sc";

type Props = {
	guesses: number;
};

const GameOver = ({ guesses }: Props) => {
	const Dispatch = useAppDispatch();
	const buttonStyles: CSSProperties = { padding: "0.5em", margin: "2em" };
	return (
		<GameOverContainer>
			<GameOverText>Game Over</GameOverText>
			<NumberOfGuessesText>Number Of Guesses : {guesses}</NumberOfGuessesText>
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
