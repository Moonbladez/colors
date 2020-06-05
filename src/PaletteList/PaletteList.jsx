import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import { MiniPalette } from "../MiniPalette/MiniPalette";

import styled from "styled-components";

export class PaletteList extends Component {
	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}
	render() {
		const { palettes } = this.props;
		return (
			<Wrapper>
				<Container>
					<Header>
						<h1>Kulur Palette</h1>
					</Header>
					<Palettes>
						{palettes.map((palette) => (
							<MiniPalette
								{...palette}
								handleClick={() => this.goToPalette(palette.id)}
								key={uuidv4()}
							/>
						))}
					</Palettes>
				</Container>
			</Wrapper>
		);
	}
}

const Wrapper = styled.main`
	background-color: blue;
	height: 100vh;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const Container = styled.div`
	width: 50%;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	flex-wrap: wrap;
`;

const Header = styled.header`
	display: flex;
	width: 100%;
	justify-content: space-between;
	color: #fefefe;
`;

const Palettes = styled.section`
	box-sizing: border-box;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 0.5rem;
`;
