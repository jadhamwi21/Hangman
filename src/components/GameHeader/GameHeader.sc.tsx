import styled from "styled-components";

export const GameHeaderContainer = styled.header`
	display: grid;
	place-items: center;
	color: var(--imperial-red);
	font-size: 22px;
	background-color: var(--vulcun);
	padding: 1em;
	width: 100%;
	border-bottom: solid 1px var(--pickled-bluewood);
`;

export const GameHeaderWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		width: fit-content;
		margin: 0 auto;
	}
`;

export const GuessesWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
	left: 4em;
	@media (max-width: 768px) {
		left: 0em;
		& > * {
			margin: 1em 0px;
		}
	}
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

export const QuitAndGoToMainMenuButtonWrapper = styled.div``;
export const StartOverButtonWrapper = styled.div``;
