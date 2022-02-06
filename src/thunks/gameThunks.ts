import { createAsyncThunk } from "@reduxjs/toolkit";
import { WordSerivce } from "../services/WordService";
import { setGuesses } from "../slices/player";
import { AppState } from "../store/store";
import { Word } from "../types/types";

// This Action Used For Start/Restart Of The Game

export const startGame = createAsyncThunk<Word, void, { state: AppState }>(
	"game/startgame",
	(_, { getState }) => {
		const {
			Game: { difficulty },
		} = getState();
		const generatedWord = WordSerivce.generateWordByDifficulty(
			difficulty
		) as Word;
		return generatedWord;
	}
);

export const quitGame = createAsyncThunk<void, void, { state: AppState }>(
	"game/quitgame",
	(_, { dispatch }) => {
		dispatch(setGuesses(0));
	}
);
