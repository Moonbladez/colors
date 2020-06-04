import React, { Component } from "react";

import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

import { AiOutlineClose } from "react-icons/ai";

import "rc-slider/assets/index.css";
import "./Navbar.css";

export class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: "hex", open: false };
		this.handleChange = this.handleChange.bind(this);
		this.closeToast = this.closeToast.bind(this);
	}

	handleChange(event) {
		this.setState({ format: event.target.value, open: true });
		this.props.handleChange(event.target.value);
	}

	closeToast() {
		this.setState({ open: false });
	}
	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;
		return (
			<nav className='Navbar'>
				<div className='brand'>
					<Link to='/'>Kulur</Link>
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
				<div className='select-container'>
					<Select onChange={this.handleChange} value={format}>
						<MenuItem value='hex'>HEX - #fffffff</MenuItem>
						<MenuItem value='rgb'>RGB - rgb(255, 255, 255, 255)</MenuItem>
						<MenuItem value='rgba'>
							RGBA - rgba(255, 255, 255, 255, 1.0)
						</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
					open={this.state.open}
					autoHideDuration={3000}
					message={
						<span id='message-id'>
							Changed Format to {format.toUpperCase()}
						</span>
					}
					ContentProps={{
						"aria-describeby": "message-id",
					}}
					onClose={this.closeToast}
					action={[
						<IconButton
							onClick={this.closeToast}
							color='inherit'
							key='close'
							aria-label='close'
						>
							<AiOutlineClose />
						</IconButton>,
					]}
				/>
			</nav>
		);
	}
}
