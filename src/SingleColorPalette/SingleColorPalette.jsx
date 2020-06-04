import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import { ColorBox } from "../ColorBox/ColorBox";

export class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		console.log(this._shades);
	}

	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(
				allColors[key].filter((color) => color.id === colorToFilterBy)
			);
		}

		return shades.slice(1);
	}
	render() {
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={uuidv4()}
				name={color.name}
				background={color.hex}
				showLink={false}
			/>
		));
		return (
			<div className='Palette'>
				<div className='Palette-colors'>{colorBoxes}</div>
			</div>
		);
	}
}
