import React from "react";

import styled from "styled-components";

export const MiniPalette = (props) => {
	const { paletteName, emoji } = props;
	console.log(props);
	return (
		<Wrapper>
			<div></div>
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
