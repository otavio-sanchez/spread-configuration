import { TConfigRoute } from './types';
import SpreadConfiguration from '../pages/SpreadConfiguration';

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
