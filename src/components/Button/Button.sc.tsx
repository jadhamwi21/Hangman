import styled from "styled-components";

export const StyledButton = styled.button`
	outline: none;
	border: none;
	border-radius: 4px;
	background-color: var(--pickled-bluewood);
	color: white;
	font-size: 18px;
	font-weight: 600;
	transition: all 0.1s ease;
	cursor: pointer;
	filter: brightness(120%);
	&:hover {
		filter: brightness(100%);
		transform: scale(1);
	}
	&:active {
		transform: scale(0.99);
	}
`;
