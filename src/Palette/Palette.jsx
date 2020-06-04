import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import { ColorBox } from "../ColorBox/ColorBox";
import { Navbar } from "../Navbar/Navbar";

import "./Palette.css";

export class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 };
		this.changeLevel = this.changeLevel.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox background={color.hex} name={color.name} key={uuidv4()} />
		));
		return (
			<div className='Palette'>
				<Navbar level={level} changeLevel={this.changeLevel} />
				<div className='Palette-colors'>{colorBoxes}</div>
				{/* fiiter goes here */}
			</div>
		);
	}
}
