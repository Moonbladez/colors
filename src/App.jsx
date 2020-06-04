import React, { Component } from "react";

import { Palette } from "./Palette/Palette";
import { generatePalette } from "./ColorHelpers/colorHelpers";
import SeedColors from "./SeedColors/SeedColors";
import { render } from "@testing-library/react";

class App extends Component {
	render() {
		console.log(generatePalette(SeedColors[4]));
		return (
			<div className='App'>
				<Palette palette={SeedColors[1]} />
			</div>
		);
	}
}

export default App;
