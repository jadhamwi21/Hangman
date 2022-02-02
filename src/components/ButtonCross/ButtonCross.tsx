import React from "react";
import { ButtonCrossContainer } from "./ButtonCross.sc";

type Props = {
	children: React.ReactNode;
	selected: boolean;
};

const ButtonCross = ({ children, selected }: Props) => {
	const style = selected ? { opacity: 0.5 } : {};
	return (
		<ButtonCrossContainer style={style} selected={selected}>
			{children}
		</ButtonCrossContainer>
	);
};

export default ButtonCross;
