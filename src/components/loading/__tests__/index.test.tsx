// test/pages/index.test.js

import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithTheme } from '../../../utils/styleTest';

import Loading from '..';

describe('Loading', () => {
	it('Renderizar', () => {
		const { getByTestId } = renderWithTheme(<Loading />);

		expect(getByTestId('icon-loading')).toBeTruthy();
	});
});
