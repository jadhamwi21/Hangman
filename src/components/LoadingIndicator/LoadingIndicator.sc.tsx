import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: grid;
	place-items: center;
	background-color: var(--vulcun);
	color: var(--regent-gray);
	font-size: 25px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40%;
	@media (max-width: 768px) {
		width: 80%;
	}
`;
export const PleaseWaitText = styled.p`
	width: 100%;
	max-width: 200px;
	position: relative;
	left: 1em;
`;
