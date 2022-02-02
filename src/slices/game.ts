import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DifficultyType, GameState, Letter, Word } from "../types/types";

const initialState: GameState = {
	guessedWords: [],
	wordToGuess: "UNIVERSE".split("") as Letter[],
	currentGameView: "Game Menu",
	difficulty: "Medium",
	hangGrowth: 0,
	guessedLetters: [],
	lettersSelected: [],
	words: [],
};

const gameSlice = createSlice({
	name: "Game",
	initialState,
	reducers: {
		setDifficulty: (
			state,
			{ payload: difficulty }: PayloadAction<DifficultyType>
		) => {
			state.difficulty = difficulty;
		},
		pushWordToGuessedWords: (state, { payload: word }: PayloadAction<Word>) => {
			state.guessedWords.push(word);
		},
		goToNextView: (state) => {
			if (state.currentGameView === "Game Menu")
				state.currentGameView = "Game Running";
			else if (state.currentGameView === "Game Running")
				state.currentGameView = "Game Over";
			else state.currentGameView = "Game Menu";
		},
		setHangGrowth: (
			state,
			{ payload }: PayloadAction<((growth: number) => number) | number>
		) => {
			if (typeof payload === "function") {
				state.hangGrowth = payload(state.hangGrowth);
			} else {
				state.hangGrowth = payload;
			}
		},
		pushLettersSelected: (
			state,
			{ payload: letter }: PayloadAction<Letter>
		) => {
			state.lettersSelected.push(letter);
		},
		setWords: (state, { payload: words }: PayloadAction<Word[]>) => {
			state.words = words;
		},
		resetGameState: () => initialState,
	},
});

export const {
	setDifficulty,
	pushWordToGuessedWords,
	goToNextView,
	resetGameState,
	setHangGrowth,
	setWords,
	pushLettersSelected,
} = gameSlice.actions;
export const GameReducer = gameSlice.reducer;
