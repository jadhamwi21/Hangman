import React from "react";
import Link from "../Link/Link";
import { HangmanTitle, HeaderContainer } from "./Header.sc";

const Header = () => {
	return (
		<HeaderContainer>
			<HangmanTitle>Hangman</HangmanTitle>
			<Link
				linkTo="/scores"
				style={{
					color: "imperial-red",
					position: "absolute",
					top: "50%",
					right: "4%",
					transform: "translate(4%,-50%)",
					fontSize: "24px",
				}}
				color="imperial-red"
			>
				Scores
			</Link>
		</HeaderContainer>
	);
};

export default Header;
