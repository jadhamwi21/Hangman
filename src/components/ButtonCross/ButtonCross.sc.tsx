import styled from "styled-components";

export const ButtonCrossContainer = styled.div<{ selected: boolean }>`
	height: fit-content;
	width: fit-content;
	pointer-events: ${(props) => (props.selected ? "none" : "initial")};
`;
