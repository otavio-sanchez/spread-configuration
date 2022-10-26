import styled from 'styled-components';

import { TTheme } from '../../../../themes';

const ContainerContent = styled.section<{
	maxWidth?: number;
	alternative?: boolean;
	align?: string;
}>`
	position: relative;
	display: block;
	max-width: ${({ theme }: { theme: TTheme }) => theme.size.container.maxSize};
	width: ${({ alternative }): string => (alternative ? '100%' : '80vw')};
	margin: auto;
	overflow-x: hidden;
	max-width: ${({ maxWidth }): string =>
		maxWidth ? `${maxWidth}px;` : `100%`};
`;

export { ContainerContent };
