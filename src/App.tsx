import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { TConfigRoute } from './routes/types';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(
					({ component: Component, path, id }: TConfigRoute): JSX.Element => (
						<Route key={id} path={path} element={<Component />} />
					)
				)}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
