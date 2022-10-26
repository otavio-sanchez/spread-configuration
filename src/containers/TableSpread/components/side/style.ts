import styled from 'styled-components';
import { TTheme } from '../../../../themes';

export const Content = styled.span`
	color: ${({ theme, type }: { theme: TTheme; type: string }) =>
		type === 'BUY' ? theme.colors.success.text : theme.colors.error.text};
`;
