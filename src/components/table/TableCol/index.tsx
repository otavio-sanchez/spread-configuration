import * as React from 'react';
import { ColContent } from './style';
import { IPropsTableCol } from './types';

function TableCol({ children }: IPropsTableCol): JSX.Element {
	return <ColContent>{children}</ColContent>;
}

export default TableCol;
