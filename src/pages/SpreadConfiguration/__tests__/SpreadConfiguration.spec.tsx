import React from 'react';
import { render } from '@testing-library/react';

import SpreadConfiguration from '..';

describe('SpreadConfiguration', () => {
	test('Teste de renderização', () => {
		const { getByTestId } = render(<SpreadConfiguration />);

		expect(getByTestId('main-title')).toBeTruthy();
	});
});
