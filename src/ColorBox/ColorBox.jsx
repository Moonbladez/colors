import React, { Component } from "react";

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
		const { name, background } = this.props;
		const { copied } = this.state;
		return (
			<CopyToClipBoard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className='ColorBox'>
					<div
						className={`copy-overlay ${copied && "show"}`}
						style={{ background }}
					></div>
					<div className={`copy-message ${copied && "show"}`}>
						<h1>copied</h1>
						<p>{background}</p>
					</div>
					<div className='copy-container'></div>
					<div className='box-content'>
						<span>{name}</span>
					</div>
					<button className='copy-button'>copy</button>
					<span className='see-more'>more</span>
				</div>
			</CopyToClipBoard>
		);
	}
}
