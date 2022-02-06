import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { quitGame, startGame } from "../thunks/gameThunks";
import {
	DifficultyType,
	GameState,
	GameView,
	Letter,
	Word,
} from "../types/types";

const initialState: GameState = {
	wordsGuessed: [],
	words: [],
	wordToGuess: [],
	lettersSelected: [],
	currentGameView: "Game Menu",
	difficulty: "Medium",
	hangGrowth: 0,
};

const gameSlice = createSlice({
	name: "Game",
	initialState,
	reducers: {
		setWordToGuess: (state, { payload: word }: PayloadAction<Word>) => {
			state.wordToGuess = word;
		},
		setDifficulty: (
			state,
			{ payload: difficulty }: PayloadAction<DifficultyType>
		) => {
			state.difficulty = difficulty;
		},
		setHangGrowth: (state, { payload: growth }: PayloadAction<number>) => {
			state.hangGrowth = growth;
		},
		setWords: (state, { payload: words }: PayloadAction<string[]>) => {
			state.words = words;
		},
		addNewGuessedWord: (state, { payload: word }: PayloadAction<string>) => {
			state.wordsGuessed.push(word);
		},
		setGameView: (state, { payload: view }: PayloadAction<GameView>) => {
			state.currentGameView = view;
		},
		addNewSelectedLetter: (
			state,
			{ payload: letter }: PayloadAction<Letter>
		) => {
			state.lettersSelected.push(letter);
		},
		resetWordState: (state) => {
			state.hangGrowth = 0;
			state.lettersSelected = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(startGame.fulfilled, (state, { payload }) => {
			state.currentGameView = "Game Running";
			state.wordToGuess = payload;
			state.lettersSelected = [];
			state.hangGrowth = 0;
			state.wordsGuessed = [];
		});
		builder.addCase(quitGame.fulfilled, (state) => {
			state.currentGameView = "Game Menu";
			state.wordsGuessed = [];
			state.wordToGuess = [];
			state.lettersSelected = [];
			state.hangGrowth = 0;
		});
	},
});

export const {
	setDifficulty,
	addNewGuessedWord,
	setWordToGuess,
	setHangGrowth,
	setWords,
	resetWordState,
	addNewSelectedLetter,
	setGameView,
} = gameSlice.actions;
export const GameReducer = gameSlice.reducer;
