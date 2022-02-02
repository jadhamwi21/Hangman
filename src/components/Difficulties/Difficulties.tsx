import React, { useCallback, useState } from "react";
import { CSSProperties } from "styled-components";
import { selectDifficulty } from "../../selectors/gameSelectors";
import { setDifficulty } from "../../slices/game";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Radio from "../Radio/Radio";
import { DifficultiesContainer } from "./Difficulties.sc";

const ContainerStyles: CSSProperties = { margin: "0px 3em" };

const Difficulties = () => {
	const Difficulty = useAppSelector(selectDifficulty);
	const Dispatch = useAppDispatch();
	return (
		<DifficultiesContainer>
			<Radio
				label="Easy"
				color="regent-gray"
				active={Difficulty === "Easy"}
				containerStyle={ContainerStyles}
				onClick={() => Dispatch(setDifficulty("Easy"))}
			/>
			<Radio
				label="Medium"
				color="regent-gray"
				active={Difficulty === "Medium"}
				containerStyle={ContainerStyles}
				onClick={() => Dispatch(setDifficulty("Medium"))}
			/>
			<Radio
				label="Hard"
				color="regent-gray"
				active={Difficulty === "Hard"}
				containerStyle={ContainerStyles}
				onClick={() => Dispatch(setDifficulty("Hard"))}
			/>
		</DifficultiesContainer>
	);
};

export default Difficulties;
