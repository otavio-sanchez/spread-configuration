import * as React from 'react';
import { RowContent } from './style';
import { IPropsRow } from './types';

function Row({
	children,
	columnsDesktop,
	columnsTablet,
	columnsMobile,
	spacingRow,
	gridTemplateColumns,
	spacingColumn,
}: IPropsRow): JSX.Element {
	return (
		<RowContent
			columnsDesktop={columnsDesktop}
			columnsTablet={columnsTablet}
			columnsMobile={columnsMobile}
			spacingRow={spacingRow}
			gridTemplateColumns={gridTemplateColumns}
			spacingColumn={spacingColumn}
		>
			{children}
		</RowContent>
	);
}

export default Row;
