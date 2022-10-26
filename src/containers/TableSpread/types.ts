import { TSpread } from '../../commons/types';

export type IPropsTableSpread = {
	title: string;
	loading: boolean;
	data: TSpread[];
	onEdit: (spread: TSpread) => void;
	onDelete: (spread: TSpread) => void;
};
