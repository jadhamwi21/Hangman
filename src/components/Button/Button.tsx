import React from "react";
import { CSSProperties } from "styled-components";
import { StyledButton } from "./Button.sc";

type Props = {
	children: string;
	style?: CSSProperties;
	onClick: () => void;
};

const Button = ({ children, style, onClick }: Props) => {
	return (
		<StyledButton style={style} onClick={onClick}>
			{children}
		</StyledButton>
	);
};

export default Button;
