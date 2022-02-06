import { useEffect, useState } from "react";
import Words from "../data/words.txt";
import { selectWords } from "../selectors/gameSelectors";
import { setWords } from "../slices/game";
import { useAppDispatch, useAppSelector } from "../store/store";

export const useWordsLoader = () => {
	const [loading, setLoading] = useState(true);
	const Dispatch = useAppDispatch();
	const words = useAppSelector(selectWords);
	useEffect(() => {
		if (words.length !== 0) {
			setLoading(false);
		} else
			fetch(Words)
				.then((r) => r.text())
				.then((text) => {
					const WordsArray: string[] = text
						.split(/\r?\n/)
						.map((word) => word.toUpperCase()) as unknown as string[];
					Dispatch(setWords(WordsArray));
					setTimeout(() => {
						setLoading(false);
					}, 1500);
				});
	}, []);

	return loading;
};
