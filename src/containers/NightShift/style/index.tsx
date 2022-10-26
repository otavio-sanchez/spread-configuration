import styled from 'styled-components';
import { TTheme } from '../../../themes';

export const Content = styled.section`
	width: 100%;
	background-color: ${({ theme }: { theme: TTheme }) => theme.colors.grey[200]};
	border-radius: 4px;
`;
export const Title = styled.h2`
	font-size: ${({ theme }: { theme: TTheme }) => theme.size.font.large};
	padding: ${({ theme }: { theme: TTheme }) => theme.space(2)}
		${({ theme }: { theme: TTheme }) => theme.space(1)};
	color: #fff;
	margin: 0px;
`;
