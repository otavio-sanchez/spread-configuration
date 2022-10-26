import styled from 'styled-components';

import { TTheme } from '../../../themes';

export const Content = styled.section`
	width: 100%;
	background-color: ${({ theme }: { theme: TTheme }) => theme.colors.grey[200]};
	border-radius: 4px;
	margin-bottom: ${({ theme }: { theme: TTheme }) => theme.space(3)};
`;

export const Icon = styled.div<any>`
	svg {
		width: 16px;
		height: 16px;
		fill: ${({ color, theme }: { theme: TTheme; color: 'error' | undefined }) =>
			color ? theme.colors[color].main : '#fff'};
	}
`;

export const Title = styled.h2`
	font-size: ${({ theme }: { theme: TTheme }) => theme.size.font.large};
	padding: ${({ theme }: { theme: TTheme }) => theme.space(2)}
		${({ theme }: { theme: TTheme }) => theme.space(2)};
	text-shadow: 2px 2px
		${({ theme }: { theme: TTheme }) => theme.colors.grey[600]};
	color: #fff;
	margin: 0px;
`;
