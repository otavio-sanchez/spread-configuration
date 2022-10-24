import React from 'react';
import { TSpread } from '../../commons/types';
import Button from '../../components/button';
import { Input } from '../../components/input/style';
import { TableRow, TableCol, Table } from '../../components/table';
import { data } from './mock';
import { Content, Title } from './style';

function NightShift() {
	const headerTable = [
		'AccountId',
		'Symbol',
		'Side',
		'Notional From',
		'Notional To',
		'Percent',
		'Edit',
		'Delete',
	];

	const renderHeader = () => {
		return (
			<TableRow>
				{headerTable.map((item: string) => (
					<TableCol key={item}>{item}</TableCol>
				))}
			</TableRow>
		);
	};

	const renderBody = () => {
		return data.body.map(
			({
				accountId,
				symbol,
				side,
				notionalFrom,
				notionalTo,
				spreadPercentil,
			}: TSpread) => (
				<TableRow key={accountId}>
					<TableCol>{`${accountId}`}</TableCol>
					<TableCol>{symbol}</TableCol>
					<TableCol>{`${side}`}</TableCol>
					<TableCol>
						<Input
							onChange={() => null}
							defaultValue={notionalFrom}
							name="notionalFrom"
						/>
					</TableCol>
					<TableCol>
						<Input
							onChange={() => null}
							defaultValue={notionalTo}
							name="notionalTo"
						/>
					</TableCol>
					<TableCol>
						<Input
							onChange={() => null}
							defaultValue={spreadPercentil}
							name="percent"
						/>
					</TableCol>
					<TableCol>
						<Button typeButton="icon" onClick={() => null}>
							edit
						</Button>
					</TableCol>
					<TableCol>
						<Button typeButton="icon" onClick={() => null}>
							delete
						</Button>
					</TableCol>
				</TableRow>
			)
		);
	};

	return (
		<Content>
			<Title>NIGHT SHIFT</Title>
			<Table>
				{renderHeader()}
				<>{renderBody()}</>
			</Table>
		</Content>
	);
}

export default NightShift;
