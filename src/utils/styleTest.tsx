import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { mainTheme } from '../themes';

export const renderWithTheme = (component: JSX.Element) => {
	return render(<ThemeProvider theme={mainTheme}>{component}</ThemeProvider>);
};
