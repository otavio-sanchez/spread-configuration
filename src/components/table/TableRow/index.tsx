import React from 'react';
import { RowContent } from './style';
import { IPropsRow } from './types';

function Row({ children }: IPropsRow): JSX.Element {
	return <RowContent>{children}</RowContent>;
}

export default Row;
