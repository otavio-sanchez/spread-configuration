import * as React from 'react';
import { TableContent } from './style';
import { IPropsTable } from './types';

function Table({ children }: IPropsTable): JSX.Element {
	return (
		<TableContent cellPadding={0} cellSpacing={0}>
			{children}
		</TableContent>
	);
}

export default Table;
