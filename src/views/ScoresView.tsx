import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ScoresHeader from "../components/ScoresHeader/ScoresHeader";
import ScoresTable from "../components/ScoresTable/ScoresTable";
import { selectRecentScores } from "../selectors/playerSelectors";
import { useAppSelector } from "../store/store";

type Props = {};

const ScoresView = (props: Props) => {
	const recentScores = useAppSelector(selectRecentScores);
	return (
		<Container>
			<Helmet>
				<title>Your Recent Scores</title>
			</Helmet>
			<ScoresHeader />
			<ScoresTable recentScores={recentScores} />
		</Container>
	);
};

const Container = styled.div`
	height: 100vh;
	width: 100%;
	background-color: var(--vulcun);
`;

export default ScoresView;
