import React, { Component } from "react";

import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./Navbar.css";

export class Navbar extends Component {
	render() {
		const { level, changeLevel } = this.props;
		return (
			<nav className='Navbar'>
				<div className='brand'>
					<a href='#'>Kulers</a>
				</div>
				<div className='slider_container'>
					<span>level: {level}</span>
					<div className='slider'>
						<Slider
							defaultValue={level}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeLevel}
						/>
					</div>
				</div>
			</nav>
		);
	}
}
