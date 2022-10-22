import React from 'react';
import { createGlobalStyle, DefaultTheme, ThemeProps } from 'styled-components';
import { TTheme } from '../../../themes';
import { Content } from './style';
import { TPropsAppLayout } from './types';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }: { theme: TTheme }) =>
			theme.colors.primary.main};
    color: ${({ theme }: { theme: TTheme }) => theme.colors.primary.text};
    font-family: ${({ theme }: { theme: TTheme }) => theme.font.family};
  }
`;

function AppLayout({ children }: TPropsAppLayout) {
	return (
		<>
			<GlobalStyle />
			<Content> {children}</Content>
		</>
	);
}

export default AppLayout;
