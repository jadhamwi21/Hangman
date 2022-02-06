import React from "react";
import styled from "styled-components";
import { ColorType } from "../../types/types";

type Props = {
	color: ColorType;
	children: string;
	sticky?: boolean;
};

const ScoresTableCell = ({ color, children, sticky }: Props) => {
	return (
		<Cell
			style={{
				color: `var(--${color})`,
				position: sticky ? "sticky" : "initial",
				top: 0,
				backgroundColor: sticky ? "var(--vulcun)" : "initial",
			}}
		>
			{children}
		</Cell>
	);
};

const Cell = styled.td`
	text-align: center;
	height: fit-content;
	width: 30vw;
	font-size: 18px;
	padding: 2em;
	@media (max-width: 768px) {
		width: auto;
		padding: 1em;
	}
`;

export default ScoresTableCell;
