import { TTheme } from '../../themes';

export interface IPropsInput {
	onChange?: (name: string, value: string) => void;
	placeholder?: string;
	name: string;
	value: number | string | null;
	id?: string;
	error?: boolean;
	type?: 'text' | 'number';
	label?: string;
	alternative?: boolean;
}

export interface IPropsComponentInput {
	theme: TTheme;
	error?: boolean;
	alternative?: boolean;
}
