import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "../types/types";

const initialState: PlayerState = {
	guesses: 0,
	recentScores: [],
};

const playerSlice = createSlice({
	name: "Player",
	initialState,
	reducers: {
		setGuesses: (
			state,
			{ payload }: PayloadAction<((state: PlayerState) => number) | number>
		) => {
			if (typeof payload === "function") {
				state.guesses = payload(state);
			} else {
				state.guesses = payload;
			}
		},
	},
});

export const { setGuesses } = playerSlice.actions;
export const PlayerReducer = playerSlice.reducer;
