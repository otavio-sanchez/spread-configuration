import { TTheme } from '../../themes';

export type TOption = {
	value: number | string;
	label: string;
};

export interface IPropsSelect {
	selected: string;
	label: string;
	options: TOption[];
	id: string;
	name: string;
	onChange: (name: string, value: number | string) => void;
	error?: boolean;
}

export interface IPropsSelectComponent {
	error?: boolean;
	theme: TTheme;
}
