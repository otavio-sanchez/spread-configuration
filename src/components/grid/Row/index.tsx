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
	align,
}: IPropsRow): JSX.Element {
	return (
		<RowContent
			columnsDesktop={columnsDesktop}
			columnsTablet={columnsTablet}
			columnsMobile={columnsMobile}
			spacingRow={spacingRow}
			gridTemplateColumns={gridTemplateColumns}
			spacingColumn={spacingColumn}
			align={align}
		>
			{children}
		</RowContent>
	);
}

export default Row;
