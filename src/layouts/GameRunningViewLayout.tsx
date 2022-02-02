import React from "react";
import styled from "styled-components";
import Guesses from "../components/Guesses/Guesses";

type Props = {
	children: React.ReactNode;
};

const GameRunningViewLayout = ({ children }: Props) => {
	return (
		<Container>
			<Guesses />
			{children}
		</Container>
	);
};

const Container = styled.div`
	background-color: var(--vulcun);
	height: 100vh;
	position: relative;
`;

export default GameRunningViewLayout;
