import * as React from "react";
import { Router } from '@reach/router';

import {
	Home,
	Gallery,
	Contact
} from './pages';

function App() {

	return (
		<>
			<Router id="homerouting">
				<Home path="/" />
				<Gallery path="/gallery" />
				<Contact path="/contact" />
			</Router>
		</>
	)
}

export default App;
