import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import AppLayout from './containers/App/AppLayout';
import AppTheme from './containers/App/AppTheme';
=======

>>>>>>> 4081ffb4fb3729376762be1d90f8491149594735
import { routes } from './routes';
import { TConfigRoute } from './routes/types';

function App() {
	return (
		<AppTheme>
			<AppLayout>
				<BrowserRouter>
					<Routes>
						{routes.map(
							({
								component: Component,
								path,
								id,
							}: TConfigRoute): JSX.Element => (
								<Route key={id} path={path} element={<Component />} />
							)
						)}
					</Routes>
				</BrowserRouter>
			</AppLayout>
		</AppTheme>
	);
}

export default App;
