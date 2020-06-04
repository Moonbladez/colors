import React, { Component } from "react";

import Container from "@material-ui/core/Container";

import "./Footer.css";

export class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<Container>
					{this.props.colors.paletteName}
					<span className='emoji'>{this.props.colors.emoji}</span>
				</Container>
			</footer>
		);
	}
}
