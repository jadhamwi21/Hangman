import React from "react";
import { CSSProperties } from "styled-components";
import ButtonCross from "../components/ButtonCross/ButtonCross";

type Props = {
	isSelected: boolean;
};

const buttonWithSelection = <
	P extends { children: string; style?: CSSProperties; onClick: () => void }
>(
	ButtonComponent: React.ComponentType<P>
) => {
	const enhancedButton = (props: P & Props) => {
		return (
			<ButtonCross selected={props.isSelected}>
				<ButtonComponent {...(props as P)} />
			</ButtonCross>
		);
	};
	return enhancedButton;
};

export default buttonWithSelection;
