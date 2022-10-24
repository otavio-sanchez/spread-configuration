import styled from 'styled-components';

const generateColumns = (collumns: number, concatenated = ''): string => {
	const count = collumns - 1;
	if (collumns === 0) {
		return concatenated;
	}

	return generateColumns(count, `${concatenated} 1fr`);
};

const RowContent = styled.div<{
	columnsDesktop?: number;
	columnsTablet?: number;
	columnsMobile?: number;
	spacingRow?: number;
	gridTemplateColumns?: string;
	spacingColumn?: number;
}>`
	width: 100%;
	position: relative;
	display: grid;
	grid-column-gap: 10px;
	align-items: start;
	${({ gridTemplateColumns }) =>
		gridTemplateColumns && `grid-template-columns: ${gridTemplateColumns};`}
	grid-row-gap: ${({ spacingRow }): string =>
		spacingRow ? `${spacingRow}px` : '10px'};
	grid-column-gap: ${({ spacingColumn }): string =>
		spacingColumn ? `${spacingColumn}px` : '10px'};
	${({ columnsDesktop, theme }): string =>
		columnsDesktop
			? `@media (min-width: ${theme.size.container.desktopWidth + 1}) {
      grid-template-columns: ${generateColumns(columnsDesktop)};
  }`
			: ''}

	${({ columnsTablet, theme }): string =>
		columnsTablet
			? `@media (min-width: ${
					theme.size.container.tabletWidth + 1
			  }px) and (max-width: ${theme.size.container.desktopWidth + 1}px) {
      grid-template-columns: ${generateColumns(columnsTablet)};
  }`
			: ''}
  ${({ columnsMobile, theme }): string =>
		columnsMobile
			? `@media (max-width: ${theme.size.container.tabletWidth + 1}px) {
      grid-template-columns: ${generateColumns(columnsMobile)};
  }`
			: ''}
`;

export { RowContent };
