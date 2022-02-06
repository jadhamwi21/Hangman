import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { guess } from "../thunks/playerThunks";
import { PlayerState, Score } from "../types/types";

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
			{ payload }: PayloadAction<((guesses: number) => number) | number>
		) => {
			if (typeof payload === "function") {
				state.guesses = payload(state.guesses);
			} else {
				state.guesses = payload;
			}
		},
		pushScore: (state, { payload: score }: PayloadAction<Score>) => {
			state.recentScores.push(score);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			guess.fulfilled,
			(state, { payload: { wordGuessed, lost, difficulty } }) => {
				if (wordGuessed) {
					state.guesses = state.guesses + 1;
				}
				if (lost) {
					const Guesses = state.guesses;
					state.recentScores.push({
						guesses: Guesses,
						difficulty: difficulty!,
						timestamp: new Date().toLocaleString(),
					});
				}
			}
		);
	},
});

export const { setGuesses } = playerSlice.actions;
export const PlayerReducer = playerSlice.reducer;
