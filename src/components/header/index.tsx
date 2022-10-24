import React from 'react';
import { HeaderContent, Title } from './style';
import { IPropsHeader } from './types';
import { Row, Col, Container } from '../grid';

function Header({ title }: IPropsHeader): JSX.Element {
	return (
		<HeaderContent>
			<Container maxWidth={1420} alternative>
				<Row gridTemplateColumns="auto">
					<Col align="start-flex">
						<Title data-testid="main-title">{title}</Title>
					</Col>
				</Row>
			</Container>
		</HeaderContent>
	);
}

export default Header;
