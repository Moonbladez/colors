import React, { Component } from "react";

import "./ColorBox.css";

export class ColorBox extends Component {
	render() {
		const { name, background } = this.props;
		return (
			<div style={{ background }} className='ColorBox'>
				<div className='copy-container'></div>
				<div className='box-content'>
					<span>{name}</span>
				</div>
				<button className='copy-button'>copy</button>
				<span className='see-more'>more</span>
			</div>
		);
	}
}
