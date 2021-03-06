import React from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { Helmet } from "react-helmet";

type Props = {
	children: React.ReactNode;
};

const GameMenuViewLayout = ({ children }: Props) => {
	return (
		<Container>
			<Helmet>
				<title>Main Menu</title>
			</Helmet>
			<Header />
			{children}
		</Container>
	);
};

const Container = styled.div`
	background-color: var(--vulcun);
	height: 100vh;
`;

export default GameMenuViewLayout;
