import styled from 'styled-components';

import { TTheme } from '../../../themes';

const HeaderContent = styled.header`
	padding: ${({ theme }: { theme: TTheme }) => theme.space(2)}
		${({ theme }: { theme: TTheme }) => theme.space(1)};
	box-sizing: border-box;
`;

const Title = styled.h1`
	font-size: ${({ theme }: { theme: TTheme }) => theme.size.font.xLarge};
	width: 100%;
	display: inline-block;
	min-width: 266px;
`;

export { HeaderContent, Title };
