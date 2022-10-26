import styled from 'styled-components';

import { TTheme } from '../../../../themes';

const ContainerContent = styled.section<{
	maxWidth?: number;
	alternative?: boolean;
}>`
	position: relative;
	display: block;
	max-width: ${({ theme }: { theme: TTheme }) => theme.size.container.maxSize};
	width: ${({ alternative }): string => (alternative ? '100%' : '80vw')};
	margin: auto;
	overflow-x: hidden;
	${({ maxWidth }): string => (maxWidth ? `max-width: ${maxWidth}px;` : '')}
`;

export { ContainerContent };
