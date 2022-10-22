import SpreadConfiguration from '../pages/SpreadConfiguration';
import { TConfigRoute } from './types';

const routesPath = {
	spreadConfiguration: '/',
};

const routes: TConfigRoute[] = [
	{
		component: SpreadConfiguration,
		path: routesPath.spreadConfiguration,
		exact: true,
		id: 'SpreadConfiguration',
	},
];

export { routes, routesPath };
