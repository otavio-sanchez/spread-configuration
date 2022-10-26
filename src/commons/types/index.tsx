export type TSpread = {
	id?: number;
	spreadTypeId: number;
	accountId?: number | string;
	symbol: string;
	side: string | null;
	notionalFrom: number | string;
	notionalTo: number | string;
	spreadPercentil: number | string;
};
