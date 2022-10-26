import React from 'react';
import { renderWithTheme } from '../../../utils/styleTest';

import SpreadConfiguration from '..';

describe('SpreadConfiguration', () => {
	test('Teste de renderização', () => {
		const { getByText } = renderWithTheme(<SpreadConfiguration />);

		expect(getByText('Spread Configuration')).toBeTruthy();
	});
});
