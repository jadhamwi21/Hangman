import { Link } from "react-router-dom";
import styled from "styled-components";
import { ColorType } from "../../types/types";

export const StyledLink = styled(Link)<{ color: ColorType }>`
	text-decoration: none;
	color: var(--${(props) => props.color});
	transition: all 0.1s ease;
	display: inline-block;
	opacity: 0.8;
	&:hover {
		opacity: 1;
	}
`;
