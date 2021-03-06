import { createAsyncThunk } from "@reduxjs/toolkit";
import { WordService } from "../services/WordService";
import { setGuesses } from "../slices/player";
import { AppState } from "../store/store";
import { Word } from "../types/types";

// This Action Used For Start/Restart Of The Game

export const startGame = createAsyncThunk<Word, void, { state: AppState }>(
	"game/startgame",
	(_, { getState, dispatch }) => {
		const {
			Game: { difficulty },
		} = getState();
		const generatedWord = WordService.generateWordByDifficulty(
			difficulty
		) as Word;
		dispatch(setGuesses(0));
		return generatedWord;
	}
);

export const quitGame = createAsyncThunk<void, void, { state: AppState }>(
	"game/quitgame",
	(_, { dispatch }) => {
		dispatch(setGuesses(0));
	}
);
