import { TTheme } from '../../themes';

export interface IPropsButton extends IPropsComponentButton {
	children: JSX.Element | string;
	onClick: () => void;
}

export interface IPropsComponentButton {
	type?: 'default' | 'icon' | undefined;
	color?: 'primary' | 'success' | 'error';
	theme: TTheme;
}
