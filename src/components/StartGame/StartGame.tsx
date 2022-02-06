import React from "react";
import { useAppDispatch } from "../../store/store";
import { startGame } from "../../thunks/gameThunks";
import Button from "../Button/Button";
import { StartGameContainer } from "./StartGame.sc";

const StartGame = () => {
	const Dispatch = useAppDispatch();
	return (
		<StartGameContainer>
			<Button
				style={{ padding: "1em 1.25em" }}
				onClick={() => {
					Dispatch(startGame());
				}}
			>
				Start Game
			</Button>
		</StartGameContainer>
	);
};

export default StartGame;
