export type TConfigRoute = {
	component: () => JSX.Element;
	path: string;
	exact: boolean;
	id: string;
};
