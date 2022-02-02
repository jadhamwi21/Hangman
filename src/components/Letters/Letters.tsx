import React from "react";
import { letters } from "../../constants/letters";
import buttonWithSelection from "../../hoc/buttonWithSelection";
import {
	selectHangGrowth,
	selectLettersSelected,
	selectWordToGuess,
} from "../../selectors/gameSelectors";
import { pushLettersSelected, setHangGrowth } from "../../slices/game";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Button from "../Button/Button";
import { LettersContainer } from "./Letters.sc";

type Props = {};

const ButtonWithSelection = buttonWithSelection(Button);

const Letters = (props: Props) => {
	const styles = {
		fontSize: "2em",
		height: "1.5em",
		width: "1.5em",
		padding: "0em",
		margin: "0.25em",
	};
	const Dispatch = useAppDispatch();
	const LettersSelected = useAppSelector(selectLettersSelected);
	const WordToGuess = useAppSelector(selectWordToGuess);
	const hangGrowth = useAppSelector(selectHangGrowth);
	return (
		<LettersContainer>
			{letters.map((letter) => {
				return (
					<ButtonWithSelection
						isSelected={LettersSelected.indexOf(letter) !== -1}
						onClick={() => {
							Dispatch(pushLettersSelected(letter));
							if (WordToGuess.indexOf(letter) === -1) {
								if (hangGrowth === 5) {
									console.log("You Lost");
								}
								Dispatch(setHangGrowth((growth) => growth + 1));
							}
						}}
						style={styles}
						key={letter}
					>
						{letter}
					</ButtonWithSelection>
				);
			})}
		</LettersContainer>
	);
};

export default Letters;
