import styled from "styled-components";
import { ColorType } from "../../types/types";

export const CustomRadioContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	transition: all 0.15s ease;
	cursor: pointer;
	&:hover {
		filter: brightness(150%);
	}
`;

export const RadioButtonWrapper = styled.div<{ color: ColorType }>`
	background-color: transparent;
	border: solid 2px;
	border-color: var(--${(props) => props.color});
	display: grid;
	place-items: center;
	border-radius: 50%;
	height: 20px;
	width: 20px;
`;

export const Radio = styled.div<{ color: ColorType; active: boolean }>`
	border-radius: 50%;
	background-color: var(--${(props) => props.color});
	height: 100%;
	width: 100%;
	transition: all 0.15s ease;
	transform: scale(${(props) => (props.active ? "0.6" : "0")});
`;
export const Label = styled.p<{ color: string }>`
	color: var(--${(props) => props.color});
	margin-left: 1em;
`;
