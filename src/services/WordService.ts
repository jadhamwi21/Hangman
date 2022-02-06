import { random } from "lodash";
import { store } from "../store/store";
import { DifficultyType, Word } from "../types/types";

export class WordSerivce {
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
