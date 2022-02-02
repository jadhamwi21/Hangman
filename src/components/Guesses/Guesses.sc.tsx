import styled from "styled-components";

export const GuessesContainer = styled.header`
	display: grid;
	place-items: center;
	color: var(--imperial-red);
	font-size: 22px;
	background-color: var(--vulcun);
	padding: 2em;
`;

export const GuessesWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const GuessesText = styled.b`
	width: fit-content;
	display: inline-block;
`;

export const GuessesNumber = styled.div`
	width: 100px;
	margin-left: 2em;
	display: inline-block;
`;
