import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import GameHeader from "../components/GameHeader/GameHeader";

type Props = {
	children: React.ReactNode;
};

const GameRunningViewLayout = ({ children }: Props) => {
	return (
		<Container>
			<Helmet>
				<title>Guess The Word</title>
			</Helmet>
			<GameHeader />
			{children}
		</Container>
	);
};

const Container = styled.div`
	background-color: var(--vulcun);
	height: 100vh;
	position: relative;
	@media (max-width: 768px) {
		height: fit-content;
	}
`;

export default GameRunningViewLayout;
