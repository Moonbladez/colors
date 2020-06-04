import React from "react";

import { Palette } from "./Palette/Palette";
import SeedColors from "./SeedColors/SeedColors";

function App() {
	return (
		<div className='App'>
			<Palette palette={SeedColors[0]} />
		</div>
	);
}

export default App;
