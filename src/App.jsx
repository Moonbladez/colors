import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Palette } from "./Palette/Palette";
import { generatePalette } from "./ColorHelpers/colorHelpers";
import SeedColors from "./SeedColors/SeedColors";

class App extends Component {
	findPalette(id) {
		return SeedColors.find((palette) => {
			return palette.id === id;
		});
	}
	render() {
		return (
			<Switch>
				<Route exact path='/' render={() => <h1>Palette List here</h1>} />
				<Route
					exact
					path='/palette/:id'
					render={(routeProps) => (
						<Palette
							palette={generatePalette(
								this.findPalette(routeProps.match.params.id)
							)}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
