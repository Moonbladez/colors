import React, { Component } from "react";

import { Link } from "react-router-dom";

import chroma from "chroma-js";
import CopyToClipBoard from "react-copy-to-clipboard";

import "./ColorBox.css";

export class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}
	render() {
		const { name, background, paletteId, id, showLink } = this.props;
		const { copied } = this.state;
		const isDarkColor = chroma(background).luminance() <= 0.08;
		const isLightColor = chroma(background).luminance() >= 0.7;
		return (
			<CopyToClipBoard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className='ColorBox'>
					<div
						className={`copy-overlay ${copied && "show"}`}
						style={{ background }}
					></div>
					<div className={`copy-message ${copied && "show"}`}>
						<h1>copied</h1>
						<p className={` ${isLightColor && "dark-text"}`}>{background}</p>
					</div>
					<div className='copy-container'></div>
					<div className='box-content'>
						<span className={isDarkColor && "light-text"}>{name}</span>
					</div>
					<button className={`copy-button ${isLightColor && "dark-text"}`}>
						copy
					</button>
					{showLink && (
						<Link
							to={`/palette/${paletteId}/${id}`}
							onClick={(event) => event.stopPropagation()}
						>
							<span className={`see-more ${isLightColor && "dark-text"}`}>
								more
							</span>
						</Link>
					)}
				</div>
			</CopyToClipBoard>
		);
	}
}
