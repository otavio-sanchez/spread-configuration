import React from 'react';

import { renderWithTheme } from '../../../utils/styleTest';

import Header from '..';

describe('Header', () => {
	it('Renderizar', () => {
		const title = 'title';
		const { getByText } = renderWithTheme(<Header title={title} />);

		const button = getByText(title);

		expect(button).toBeTruthy();
	});
});
