import styled from "styled-components";

export const TableWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: calc(100vh - 120px - 40px);
	width: 100%;
`;

export const ScoresTableElement = styled.table`
	border-collapse: collapse;
	border: none;
	margin: 1.25em auto;
	height: fit-content;
	max-height: 50vh;
	overflow-y: auto;
	display: block;
	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: var(--pickled-bluewood);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--regent-gray);
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;
export const TableRow = styled.tr``;

export const NoRecentScoresText = styled.div`
	font-size: 30px;
	color: var(--regent-gray);
	padding: 4em 0px;
`;
