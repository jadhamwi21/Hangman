import React from "react";
import { CSSProperties } from "styled-components";
import { ColorType } from "../../types/types";
import {
	CustomRadioContainer,
	Label,
	Radio as RadioElement,
	RadioButtonWrapper,
} from "./Radio.sc";

type Props = {
	color: ColorType;
	active: boolean;
	label: string;
	containerStyle?: CSSProperties;
	onClick: () => void;
};

const Radio = ({ color, active, label, containerStyle, onClick }: Props) => {
	return (
		<CustomRadioContainer style={containerStyle} onClick={onClick}>
			<RadioButtonWrapper color={color}>
				<RadioElement color={color} active={active} />
			</RadioButtonWrapper>
			<Label color={color}>{label}</Label>
		</CustomRadioContainer>
	);
};

export default Radio;
