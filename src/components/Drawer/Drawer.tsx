import React from "react";
import { DrawerContainer, DrawImage } from "./Drawer.sc";

type Props = {
	draw: string;
};

const Drawer = ({ draw }: Props) => {
	return (
		<DrawerContainer>
			<DrawImage src={draw} alt="hang-headline" />
		</DrawerContainer>
	);
};

export default Drawer;
