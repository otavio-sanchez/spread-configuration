// test/pages/index.test.js

import { fireEvent } from '@testing-library/react';
import React from 'react';

import { renderWithTheme } from '../../../utils/styleTest';

import Button from '..';

describe('Button', () => {
	it('Renderizar e ação de clique', () => {
		const onClick = jest.fn();
		const text = 'action';
		const { getByText } = renderWithTheme(
			<Button onClick={onClick}>{text}</Button>
		);

		const button = getByText(text);

		fireEvent.click(button);

		expect(button).toBeTruthy();
		expect(onClick).toBeCalled();
	});

	it('Renderizar com cores alternativas', () => {
		const onClick = jest.fn();
		const text = 'abc';

		const { getByText } = renderWithTheme(
			<Button onClick={onClick} typeButton="icon" color="success">
				{text}
			</Button>
		);

		const button = getByText(text);

		expect(button).toHaveAttribute('color', `success`);
	});
});
