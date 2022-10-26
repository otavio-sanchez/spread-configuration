import { TTheme } from '../../themes';

export interface IPropsButton extends IPropsComponentButton {
	children: JSX.Element | string;
	onClick: () => void;
}

export interface IPropsComponentButton {
	typeButton?: 'default' | 'icon';
	color?: 'primary' | 'success' | 'error' | 'info';
	theme: TTheme;
	disabled?: boolean;
}
