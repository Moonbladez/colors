import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import { ColorBox } from "../ColorBox/ColorBox";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

import "./Palette.css";

export class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: "hex" };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeFormat(value) {
		this.setState({ format: value });
	}

	render() {
		const { colors, id } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				background={color[format]}
				name={color.name}
				key={uuidv4()}
				id={color.id}
				paletteId={id}
				showLink
			/>
		));
		return (
			<div className='Palette'>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					isAllPalette={true}
				/>
				<div className='Palette-colors'>{colorBoxes}</div>
				<Footer colors={this.props.palette} />
			</div>
		);
	}
}
