import { random } from "lodash";
import { addNewSelectedLetter } from "../slices/game";
import { store } from "../store/store";
import { DifficultyType, Letter, Word } from "../types/types";

export class WordService {
	private static generateEasyWord(): Word {
		const { Game } = store.getState();
		const easyWords = Game.words.filter((word) => {
			if (word.length <= 4 && !Game.wordsGuessed.includes(word)) {
				return true;
			} else {
				return false;
			}
		});
		return easyWords[random(0, easyWords.length - 1)].split("") as Word;
	}
	private static generateMediumWord(): Word {
		const { Game } = store.getState();
		const mediumWords = Game.words.filter((word) => {
			if (
				word.length <= 7 &&
				word.length >= 5 &&
				!Game.wordsGuessed.includes(word)
			) {
				return true;
			} else {
				return false;
			}
		});
		return mediumWords[random(0, mediumWords.length - 1)].split("") as Word;
	}
	private static generateHardWord(): Word {
		const { Game } = store.getState();
		const hardWords = Game.words.filter((word) => {
			if (word.length >= 8 && !Game.wordsGuessed.includes(word)) {
				return true;
			} else {
				return false;
			}
		});
		return hardWords[random(0, hardWords.length - 1)].split("") as Word;
	}
	public static getLettersToInitialize(
		word: Word,
		difficulty: DifficultyType
	): Letter[] {
		if (word.length === 1) {
			return [];
		}
		const numberOfLettersToShow = (() => {
			if (difficulty === "Easy") {
				return 1;
			} else if (difficulty === "Medium") {
				return 2;
			} else {
				return 3;
			}
		})();
		const initializedLetters: Letter[] = [];
		for (; initializedLetters.length !== numberOfLettersToShow; ) {
			const randomLetter: Letter = word[
				Math.floor(Math.random() * word.length)
			] as Letter;
			if (!initializedLetters.find((letter) => letter === randomLetter)) {
				initializedLetters.push(randomLetter);
			}
		}

		return initializedLetters;
	}
	public static generateWordByDifficulty(difficulty: DifficultyType): Word {
		if (difficulty === "Easy") {
			return this.generateEasyWord();
		}
		if (difficulty === "Medium") {
			return this.generateMediumWord();
		}
		if (difficulty === "Hard") {
			return this.generateHardWord();
		}
		throw new Error("Unreachable");
	}
}
