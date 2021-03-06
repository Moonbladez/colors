import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Palette } from "./Palette/Palette";
import { PaletteList } from "./PaletteList/PaletteList";
import { SingleColorPalette } from "./SingleColorPalette/SingleColorPalette";
import { generatePalette } from "./ColorHelpers/colorHelpers";
import NewPaletteForm from "./NewPaletteForm/NewPaletteForm";
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
				<Route exact path='/palette/new' render={() => <NewPaletteForm />} />
				<Route
					exact
					path='/'
					render={(routeProps) => (
						<PaletteList palettes={SeedColors} {...routeProps} />
					)}
				/>
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
				<Route
					exact
					path='/palette/:paletteId/:colorId'
					render={(routeProps) => (
						<SingleColorPalette
							colorId={routeProps.match.params.colorId}
							palette={generatePalette(
								this.findPalette(routeProps.match.params.paletteId)
							)}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
