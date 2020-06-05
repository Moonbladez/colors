import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import { ColorBox } from "../ColorBox/ColorBox";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = { format: "hex" };
		this.changeFormat = this.changeFormat.bind(this);
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

	changeFormat(value) {
		this.setState({ format: value });
	}
	render() {
		const { id } = this.props.palette;
		const { format } = this.state;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={uuidv4()}
				name={color.name}
				background={color[format]}
				showLink={false}
			/>
		));
		return (
			<div className='SingleColorPalette Palette'>
				<Navbar handleChange={this.changeFormat} isAllPalette={false} />
				<div className='Palette-colors'>
					{colorBoxes}
					<div className='goBack ColorBox'>
						<Link to={`/palette/${id}`} className='back-button'>
							Go Back
						</Link>
					</div>
				</div>
				<Footer colors={this.props.palette} />
			</div>
		);
	}
}
