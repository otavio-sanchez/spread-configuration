export type TSpread = {
	id: number;
	spreadTypeId: number;
	accountId: number;
	symbol: string;
	side: string | null;
	notionalFrom: number;
	notionalTo: number;
	spreadPercentil: number;
};
