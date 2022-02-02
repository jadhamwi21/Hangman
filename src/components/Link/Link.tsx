import React from "react";
import { CSSProperties } from "styled-components";
import { ColorType } from "../../types/types";
import { StyledLink } from "./Link.sc";

type Props = {
	linkTo: `/${string}`;
	children: string;
	style: CSSProperties;
	color: ColorType;
};

const Link = ({ linkTo, children, style, color }: Props) => {
	return (
		<StyledLink to={linkTo} style={style} color={color}>
			{children}
		</StyledLink>
	);
};

export default Link;
