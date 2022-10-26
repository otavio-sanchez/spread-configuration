export interface IPropsRow {
	children: JSX.Element | JSX.Element[];
	columnsDesktop?: number;
	columnsTablet?: number;
	columnsMobile?: number;
	spacingRow?: number;
	gridTemplateColumns?: string;
	spacingColumn?: number;
	align?: string;
}
