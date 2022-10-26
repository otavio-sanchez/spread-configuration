import styled from 'styled-components';
import { TTheme } from '../../../../themes';

const TableContent = styled.table`
	position: relative;
	background-color: ${({ theme }: { theme: TTheme }) => theme.colors.grey[700]};
	width: 100%;

	tr:nth-child(1) {
		background-color: ${({ theme }: { theme: TTheme }) =>
			theme.colors.grey[500]};

		td {
			padding: ${({ theme }: { theme: TTheme }) => theme.space(3)}
				${({ theme }: { theme: TTheme }) => theme.space(2)};
		}
	}

	tr:nth-child(2n) {
		background-color: ${({ theme }: { theme: TTheme }) =>
			theme.colors.grey[600]};
	}
`;

export { TableContent };
