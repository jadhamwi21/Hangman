import { AppState } from "../store/store";

export const selectWordToGuess = (state: AppState) => state.Game.wordToGuess;

export const selectDifficulty = (state: AppState) => state.Game.difficulty;

export const selectGuessedWords = (state: AppState) => state.Game.guessedWords;

export const selectCurrentGameView = (state: AppState) =>
	state.Game.currentGameView;
export const selectHangGrowth = (state: AppState) => state.Game.hangGrowth;

export const selectLettersSelected = (state: AppState) =>
	state.Game.lettersSelected;

export const selectWords = (state: AppState) => state.Game.words;
