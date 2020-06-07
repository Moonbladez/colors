import React from "react";

import styled from "styled-components";

export const DraggableColorBox = (props) => {
	return (
		<DraggableBox style={{ backgroundColor: props.color }}>
			{props.color}
		</DraggableBox>
	);
};

const DraggableBox = styled.div`
	width: 20%;
	height: 25%;
	margin: 0 auto;
	display: inline-block;
	position: relative;
	cursor: pointer;
	margin-bottom: -3.7px;
`;
