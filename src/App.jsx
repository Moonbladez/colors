import React, { Component } from "react";

import { Palette } from "./Palette/Palette";
import { generatePalette } from "./ColorHelpers/colorHelpers";
import SeedColors from "./SeedColors/SeedColors";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Palette palette={generatePalette(SeedColors[4])} />
			</div>
		);
	}
}

export default App;
