import styled from "styled-components";

export const GameOverContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	& p {
		margin: 0.25em;
	}
`;

export const GameOverText = styled.p`
	font-size: 25px;
	color: var(--regent-gray);
`;
export const NumberOfGuessesText = styled.p`
	font-size: 25px;
	color: var(--imperial-red);
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: fit-content;
	height: fit-content;
`;

export const UnguessedWords = styled.div`
	height: fit-content;
	width: fit-content;
	color: var(--regent-gray);
`;
