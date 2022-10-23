import React from 'react';
import { withTheme, ThemeProvider } from 'styled-components';

import { mainTheme } from '../../../themes';
import { TPropsAppTheme } from './types';

function StyleComponent({ children }: TPropsAppTheme) {
	return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}

export default withTheme(StyleComponent);
