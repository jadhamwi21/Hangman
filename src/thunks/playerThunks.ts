import { createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";
import { WordSerivce } from "../services/WordService";
import {
	addNewGuessedWord,
	addNewSelectedLetter,
	resetWordState,
	setGameView,
	setHangGrowth,
	setWordToGuess,
} from "../slices/game";
import { AppState, store } from "../store/store";
import { DifficultyType, Letter } from "../types/types";

const isWordGuessed = () => {
	const { Game } = store.getState();
	return Game.wordToGuess.every(
		(letter) => Game.lettersSelected.indexOf(letter) !== -1
	);
};

export const guess = createAsyncThunk<
	{ wordGuessed: boolean; lost: boolean; difficulty?: DifficultyType },
	Letter,
	{ state: AppState }
>("player/guess", (letter, { getState, dispatch }) => {
	dispatch(addNewSelectedLetter(letter));
	const { Game } = getState();
	const WordToGuess = Game.wordToGuess;
	const correctLetterGuess = WordToGuess.find(
		(currentLetter) => currentLetter === letter
	);
	if (correctLetterGuess) {
		if (isWordGuessed()) {
			dispatch(addNewGuessedWord(Game.wordToGuess.join("")));
			const newGeneratedWord = WordSerivce.generateWordByDifficulty(
				Game.difficulty
			);
			dispatch(setWordToGuess(newGeneratedWord));
			dispatch(resetWordState());
			return { wordGuessed: true, lost: false };
		} else {
			return { wordGuessed: false, lost: false };
		}
	} else {
		if (Game.hangGrowth === 5) {
			dispatch(setGameView("Game Over"));
			return { wordGuessed: false, lost: true, difficulty: Game.difficulty };
		} else {
			dispatch(setHangGrowth(Game.hangGrowth + 1));
			return { wordGuessed: false, lost: false };
		}
	}
});
