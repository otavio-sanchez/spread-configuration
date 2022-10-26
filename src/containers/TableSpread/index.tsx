import React, { useState } from 'react';

import Check from '../../assets/icons/check.svg';
import Delete from '../../assets/icons/delete.svg';
import { TSpread } from '../../commons/types';
import Button from '../../components/button';
import Input from '../../components/input';
import Loading from '../../components/loading';
import { TableRow, TableCol, Table } from '../../components/table';
import Side from './components/side';
import { Content, Title, Icon } from './style';
import { IPropsTableSpread } from './types';

function TableSpread({
	title,
	loading,
	data,
	onEdit,
	onDelete,
}: IPropsTableSpread) {
	const [editValues, setEditValues] = useState<any>({});

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

	const onHandlerDelete = (spread: TSpread) => {
		onDelete(spread);
	};

	const onHandlerEdit = (spread: TSpread) => {
		if (spread.id) {
			onEdit({
				...spread,
				...(spread.id && editValues[spread.id]),
			});

			setEditValues({
				...editValues,
				[spread.id]: null,
			});
		}
	};

	const editValue = (name: string, value: string, id: number | undefined) => {
		if (id) {
			setEditValues({
				...editValues,
				[id]: {
					...editValues[id],
					[name]: value,
				},
			});
		}
	};

	const renderBody = () => {
		return data.map((spreadItem: TSpread) => (
			<TableRow key={spreadItem.id}>
				<TableCol>{`${spreadItem.accountId}`}</TableCol>
				<TableCol>{spreadItem.symbol}</TableCol>
				<TableCol>
					<Side type={spreadItem.side}>{spreadItem.side}</Side>
				</TableCol>
				<TableCol>
					<Input
						onChange={(name: string, value: string) =>
							editValue(name, value, spreadItem.id)
						}
						value={spreadItem.notionalFrom}
						name="notionalFrom"
						placeholder="Notional From"
					/>
				</TableCol>
				<TableCol>
					<Input
						onChange={(name: string, value: string) =>
							editValue(name, value, spreadItem.id)
						}
						value={spreadItem.notionalTo}
						name="notionalTo"
						placeholder="Notional To"
					/>
				</TableCol>
				<TableCol>
					<Input
						onChange={(name: string, value: string) =>
							editValue(name, value, spreadItem.id)
						}
						value={spreadItem.spreadPercentil}
						name="spreadPercentil"
						placeholder="Spread Percentil"
					/>
				</TableCol>
				<TableCol>
					<Button
						typeButton="icon"
						disabled={!(spreadItem.id && !!editValues[spreadItem.id])}
						onClick={() => onHandlerEdit(spreadItem)}
					>
						<Icon>
							<Check />
						</Icon>
					</Button>
				</TableCol>
				<TableCol>
					<Button typeButton="icon" onClick={() => onHandlerDelete(spreadItem)}>
						<Icon color="error">
							<Delete />
						</Icon>
					</Button>
				</TableCol>
			</TableRow>
		));
	};

	return (
		<Content>
			<Title>
				{title} {loading && <Loading />}
			</Title>
			<Table>
				{renderHeader()}
				<>{renderBody()}</>
			</Table>
		</Content>
	);
}

export default TableSpread;
