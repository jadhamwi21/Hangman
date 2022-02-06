import React from "react";
import { letters } from "../../constants/letters";
import buttonWithSelection from "../../hoc/buttonWithSelection";
import { selectLettersSelected } from "../../selectors/gameSelectors";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { guess } from "../../thunks/playerThunks";
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
	return (
		<LettersContainer>
			{letters.map((letter) => {
				return (
					<ButtonWithSelection
						isSelected={LettersSelected.indexOf(letter) !== -1}
						onClick={() => {
							Dispatch(guess(letter));
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
