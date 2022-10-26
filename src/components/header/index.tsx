import React from 'react';

import { Row, Col, Container } from '../grid';
import { HeaderContent, Title } from './style';
import { IPropsHeader } from './types';

function Header({ title, children = <div /> }: IPropsHeader): JSX.Element {
	return (
		<HeaderContent>
			<Container maxWidth={1420} alternative>
				<Row
					gridTemplateColumns="auto auto"
					columnsDesktop={2}
					columnsTablet={1}
					columnsMobile={1}
					align="start"
				>
					<Col align="start">
						<Title data-testid="main-title">{title}</Title>
					</Col>
					<Col align="start">{children}</Col>
				</Row>
			</Container>
		</HeaderContent>
	);
}

export default Header;
