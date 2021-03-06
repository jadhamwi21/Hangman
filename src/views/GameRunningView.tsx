import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button/Button";
import Drawer from "../components/Drawer/Drawer";
import GuessedLetters from "../components/GuessedLetters/GuessedLetters";
import Letters from "../components/Letters/Letters";
import { draws } from "../constants/draws";
import buttonWithSelection from "../hoc/buttonWithSelection";
import GameRunningViewLayout from "../layouts/GameRunningViewLayout";
import {
	selectHangGrowth,
	selectLettersSelected,
	selectWordToGuess,
} from "../selectors/gameSelectors";
import { useAppSelector } from "../store/store";

const GameRunningView = () => {
	// hangGrowth is an integer which will be incremented on each incorrect guess
	// and will respresent what to draw.
	const hangGrowth = useAppSelector(selectHangGrowth);
	const wordToGuess = useAppSelector(selectWordToGuess);
	const lettersSelected = useAppSelector(selectLettersSelected);
	return (
		<GameRunningViewLayout>
			<GameRunningContainer>
				<Drawer draw={draws[hangGrowth]} />
				<GuessedLetters
					wordToGuess={wordToGuess}
					selectedLetters={lettersSelected}
				/>
				<Letters />
			</GameRunningContainer>
		</GameRunningViewLayout>
	);
};

const GameRunningContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: fit-content;
`;

export default GameRunningView;
