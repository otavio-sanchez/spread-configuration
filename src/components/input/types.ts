import { TTheme } from '../../themes';

export interface IPropsInput {
	onChange?: (name: string, value: string) => void;
	placeholder?: string;
	name: string;
}

export interface IPropsComponentInput {
	theme: TTheme;
}
