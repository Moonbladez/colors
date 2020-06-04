import React, { Component } from "react";

import Slider from "rc-slider";
import { v4 as uuidv4 } from "uuid";

import { ColorBox } from "../ColorBox/ColorBox";

import "./Palette.css";
import "rc-slider/assets/index.css";

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
				<Slider
					defaultValue={level}
					min={100}
					max={900}
					step={100}
					onAfterChange={this.changeLevel}
				/>
				{/* navbar goes here */}
				<div className='Palette-colors'>{colorBoxes}</div>
				{/* fiiter goes here */}
			</div>
		);
	}
}
