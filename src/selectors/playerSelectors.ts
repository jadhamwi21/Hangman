import { AppState } from "../store/store";

export const selectGuesses = (state: AppState) => state.Player.guesses;

export const selectRecentScores = (state: AppState) =>
	state.Player.recentScores;
