import React, { useEffect, useState } from "react";
import { Container, PleaseWaitText, Wrapper } from "./LoadingIndicator.sc";
import ReactLoading from "react-loading";

type Props = {};

const LoadingIndicator = (props: Props) => {
	const [dots, setDots] = useState("");
	useEffect(() => {
		const intervalId = setInterval(() => {
			setDots((state) => {
				if (state === "...") {
					return "";
				} else {
					return state + ".";
				}
			});
		}, 200);
		return () => {
			clearInterval(intervalId);
		};
	}, []);
	return (
		<Container>
			<Wrapper>
				<ReactLoading
					type={"balls"}
					color={"#38405f"}
					height={"30%"}
					width={"30%"}
				/>
				<PleaseWaitText>Please Wait{dots}</PleaseWaitText>
			</Wrapper>
		</Container>
	);
};

export default LoadingIndicator;
