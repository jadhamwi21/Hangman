import React from "react";
import { Navigate, useNavigate } from "react-router";
import { Score } from "../../types/types";
import Button from "../Button/Button";
import {
	NoRecentScoresText,
	ScoresTableElement,
	TableRow,
	TableWrapper,
} from "./ScoresTable.sc";
import ScoresTableCell from "./ScoresTableCell";

type Props = {
	recentScores: Score[];
};

const ScoresTable = ({ recentScores }: Props) => {
	const Navigate = useNavigate();
	return (
		<TableWrapper>
			{recentScores.length !== 0 ? (
				<ScoresTableElement>
					<TableRow>
						<ScoresTableCell color="regent-gray" sticky={true}>
							Date
						</ScoresTableCell>
						<ScoresTableCell color="regent-gray" sticky={true}>
							Difficulty
						</ScoresTableCell>
						<ScoresTableCell color="imperial-red" sticky={true}>
							Guesses
						</ScoresTableCell>
					</TableRow>
					{recentScores.reverse().map((score) => (
						<TableRow>
							<ScoresTableCell color="regent-gray">
								{score.timestamp}
							</ScoresTableCell>
							<ScoresTableCell color="regent-gray">
								{score.difficulty}
							</ScoresTableCell>
							<ScoresTableCell color="imperial-red">
								{score.guesses.toString()}
							</ScoresTableCell>
						</TableRow>
					))}
				</ScoresTableElement>
			) : (
				<NoRecentScoresText>No Recent Scores</NoRecentScoresText>
			)}
			<Button style={{ padding: "1em" }} onClick={() => Navigate("/")}>
				Back
			</Button>
		</TableWrapper>
	);
};

export default ScoresTable;
