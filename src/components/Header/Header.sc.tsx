import styled from "styled-components";

export const HeaderContainer = styled.header`
	height: fit-content;
	width: 98%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--vulcun);
	margin: 0 auto;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
export const HangmanTitle = styled.div`
	margin: 0px;
	font-size: 40px;
	padding: 0.5em;
	font-weight: 500;
	color: var(--regent-gray);
`;
