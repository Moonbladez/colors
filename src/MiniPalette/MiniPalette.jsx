import React from "react";

import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";

export const MiniPalette = (props) => {
	const { paletteName, emoji, colors } = props;
	const miniColorBoxes = colors.map((color) => (
		<MiniColor
			style={{ backgroundColor: color.color }}
			key={uuidv4()}
		></MiniColor>
	));
	return (
		<Wrapper onClick={props.handleClick}>
			<Colors>{miniColorBoxes}</Colors>
			<Title>
				{paletteName}
				<span>{emoji}</span>
			</Title>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: #fefefe;
	border-radius: 5px;
	padding: 0.5rem;
	position: relative;
	overflow: hidden;
	border: 1px solid #333333;

	&:hover {
		cursor: pointer;
	}
`;

const Colors = styled.div`
	background-color: #dae1e4;
	height: 150px;
	width: 100%;
	border-radius: 0.3rem;
	overflow: hidden;
`;

const MiniColor = styled.div`
	height: 25%;
	width: 20%;
	display: inline-block;
	margin: 0 auto;
	position: relative;
	margin-bottom: -4px;
`;

const Title = styled.h5`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	color: #333333;
	padding-top: 0.5rem;
	font-size: 1rem;
	position: relative;

	span {
		background-color: 0.5rem;
		font-size: 1.5rem;
	}
`;
