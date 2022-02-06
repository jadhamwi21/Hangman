import styled from "styled-components";

export const LetterFieldContainer = styled.div`
	width: 100%;
	max-width: 100px;
	height: 100px;
	background-color: transparent;
	border-bottom: solid 2px var(--pickled-bluewood);
	margin: 1em;
	display: grid;
	place-items: center;
	color: var(--imperial-red);
	@media (max-width: 768px) {
		max-width: initial;
		min-width: 10px;
	}
`;
