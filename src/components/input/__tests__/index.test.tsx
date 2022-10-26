// test/pages/index.test.js

import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithTheme } from '../../../utils/styleTest';

import Input from '..';

describe('Input', () => {
	it('Renderizar e ação de onChange', () => {
		const onChange = jest.fn();
		const name = 'input-test';
		const value = 10;
		const { getByTestId } = renderWithTheme(
			<Input name={name} onChange={onChange} value={value} />
		);

		const input = getByTestId('input-text');

		fireEvent.change(input, { target: { value: '5' } });

		expect(input).toHaveValue('5');
		expect(onChange).toBeCalled();
	});
});
