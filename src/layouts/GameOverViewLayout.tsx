import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

type Props = {
	children: React.ReactNode;
};

const GameOverViewLayout = ({ children }: Props) => {
	return (
		<Container>
			<Helmet>
				<title>Game Over</title>
			</Helmet>
			{children}
		</Container>
	);
};

const Container = styled.div`
	display: grid;
	place-items: center;
	background-color: var(--vulcun);
	height: 100vh;
	width: 100%;
`;

export default GameOverViewLayout;
