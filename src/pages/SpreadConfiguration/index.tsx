import React, { useCallback, useEffect, useState } from 'react';

import { types } from '../../commons/constants/spread';
import { TSpread } from '../../commons/types';
import { Container, Row, Col } from '../../components/grid';
import Header from '../../components/header';
import AddRange from '../../containers/AddRange';
import TableSpread from '../../containers/TableSpread';
import useSpreads from '../../store/spreads';

function SpreadConfiguration() {
	const { fetchSpread, addSpread, spreads, deleteSpread, editSpread, loading } =
		useSpreads((state) => state);

	const [workingHour, setWorkingHour] = useState<TSpread[]>([]);
	const [nightShift, setNightShift] = useState<TSpread[]>([]);

	const loadSpreads = useCallback(() => {
		fetchSpread();
	}, [fetchSpread]);

	useEffect(() => {
		loadSpreads();
	}, []);

	useEffect(() => {
		const workingHourFormatted = spreads.filter(
			(spreadItem: TSpread) => spreadItem.spreadTypeId === types.WORKING_HOURS
		);
		setWorkingHour(workingHourFormatted);

		const nightShiftFormatted = spreads.filter(
			(spreadItem: TSpread) => spreadItem.spreadTypeId === types.NIGHT_SHIFT
		);
		setNightShift(nightShiftFormatted);
	}, [spreads]);

	return (
		<Container>
			<Row spacingRow={2} gridTemplateColumns="auto">
				<Col>
					<Header title="Spread Configuration">
						<Container>
							<Row spacingRow={2} spacingColumn={2}>
								<Col>
									<AddRange addRange={addSpread} />
								</Col>
							</Row>
						</Container>
					</Header>
				</Col>
			</Row>
			<Row spacingRow={2}>
				<Col>
					<TableSpread
						title="Working Hours"
						data={workingHour}
						loading={loading}
						onEdit={editSpread}
						onDelete={deleteSpread}
					/>
				</Col>
			</Row>
			<Row spacingRow={2}>
				<Col>
					<TableSpread
						title="Night Shift"
						data={nightShift}
						loading={loading}
						onEdit={editSpread}
						onDelete={deleteSpread}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default SpreadConfiguration;
