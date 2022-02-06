import styled from "styled-components";

export const LettersContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 2%;
	transform: translate(-2%, -50%);
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 400px;
	height: fit-content;
	@media (max-width: 768px) {
		position: initial;
		top: 0%;
		left: 0%;
		transform: translate(0%, 0%);
		width: 90vw;
		margin: 2.5em auto;
		/* align-items: center;
		justify-content: center; */
	}
`;
