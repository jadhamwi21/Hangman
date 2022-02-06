export type ColorType =
	| "vulcun"
	| "pickled-bluewood"
	| "smokey"
	| "regent-gray"
	| "imperial-red";

export type DifficultyType = "Easy" | "Medium" | "Hard";

export type GameView = "Game Menu" | "Game Running" | "Game Over";

export interface Score {
	timestamp: string;
	difficulty: DifficultyType;
	guesses: number;
}

export interface PlayerState {
	guesses: number;
	recentScores: Score[];
}

export type Word = Letter[];

export interface GameState {
	wordToGuess: Word;
	difficulty: DifficultyType;
	wordsGuessed: string[];
	currentGameView: GameView;
	hangGrowth: number;
	lettersSelected: Letter[];
	words: string[];
}

export type Letter =
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "N"
	| "O"
	| "P"
	| "Q"
	| "R"
	| "S"
	| "T"
	| "U"
	| "V"
	| "W"
	| "X"
	| "Y"
	| "Z";
