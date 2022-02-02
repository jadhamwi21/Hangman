import React from "react";
import { goToNextView } from "../../slices/game";
import { useAppDispatch } from "../../store/store";
import Button from "../Button/Button";
import { StartGameContainer } from "./StartGame.sc";

const StartGame = () => {
	const Dispatch = useAppDispatch();
	return (
		<StartGameContainer>
			<Button
				style={{ padding: "1em 1.25em" }}
				onClick={() => Dispatch(goToNextView())}
			>
				Start Game
			</Button>
		</StartGameContainer>
	);
};

export default StartGame;
