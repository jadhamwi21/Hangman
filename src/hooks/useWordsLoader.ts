import { useEffect, useState } from "react";
import { setWords } from "../slices/game";
import { useAppDispatch } from "../store/store";
import { Word } from "../types/types";
import Words from "./data/words.txt";

export const useWordsLoader = () => {
	const [loading, setLoading] = useState(true);
	const Dispatch = useAppDispatch();
	useEffect(() => {
		fetch(Words)
			.then((r) => r.text())
			.then((text) => {
				const WordsArray: Word[] = text
					.split(/\r?\n/)
					.map((word) => word.toUpperCase()) as unknown as Word[];
				Dispatch(setWords(WordsArray));
				setLoading(false);
			});
	}, []);

	return loading;
};
