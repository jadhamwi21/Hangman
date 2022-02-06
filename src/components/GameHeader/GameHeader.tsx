import React from "react";
import { selectGuesses } from "../../selectors/playerSelectors";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { quitGame, startGame } from "../../thunks/gameThunks";
import Button from "../Button/Button";
import {
	GameHeaderContainer,
	GameHeaderWrapper,
	GuessesNumber,
	GuessesText,
	GuessesWrapper,
	QuitAndGoToMainMenuButtonWrapper,
	StartOverButtonWrapper,
} from "./GameHeader.sc";

const GameHeader = () => {
	const guesses = useAppSelector(selectGuesses);
	const Dispatch = useAppDispatch();
	return (
		<GameHeaderContainer>
			<GameHeaderWrapper>
				<StartOverButtonWrapper>
					<Button
						onClick={() => {
							Dispatch(startGame());
						}}
						style={{
							padding: "0.5em",
						}}
					>
						Start Over
					</Button>
				</StartOverButtonWrapper>
				<GuessesWrapper>
					<GuessesText>Guesses</GuessesText>
					<GuessesNumber>{guesses}</GuessesNumber>
				</GuessesWrapper>
				<QuitAndGoToMainMenuButtonWrapper>
					<Button
						onClick={() => {
							Dispatch(quitGame());
						}}
						style={{
							padding: "0.5em",
						}}
					>
						Quit & Go To Main Menu
					</Button>
				</QuitAndGoToMainMenuButtonWrapper>
			</GameHeaderWrapper>
		</GameHeaderContainer>
	);
};

export default GameHeader;
