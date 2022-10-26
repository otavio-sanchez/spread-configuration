import React from 'react';
import Header from '../../components/header';
import NightShift from '../../containers/NightShift';
import { Container, Row, Col } from '../../components/grid';

function SpreadConfiguration() {
	return (
		<Container>
			<Row spacingRow={2}>
				<Col>
					<Header data-testid="main-title" title="Spread Configuration" />
				</Col>
			</Row>
			<Row spacingRow={2}>
				<Col>
					<NightShift />
				</Col>
			</Row>
		</Container>
	);
}

export default SpreadConfiguration;
