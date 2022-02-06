import styled from "styled-components";

export const DifficultiesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: var(--vulcun);
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;
