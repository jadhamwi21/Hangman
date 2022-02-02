import React from "react";
import Difficulties from "../components/Difficulties/Difficulties";
import Drawer from "../components/Drawer/Drawer";
import StartGame from "../components/StartGame/StartGame";
import { Draws, draws } from "../constants/draws";
import GameMenuViewLayout from "../layouts/GameMenuViewLayout";

const GameMenuView = () => {
	return (
		<GameMenuViewLayout>
			<Drawer draw={draws[Draws.Draw6]} />
			<Difficulties />
			<StartGame />
		</GameMenuViewLayout>
	);
};

export default GameMenuView;
