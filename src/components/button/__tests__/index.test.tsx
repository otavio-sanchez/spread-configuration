// test/pages/index.test.js

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { mainTheme } from '../../../themes';

import Button from '..';

describe('Button', () => {
	it('Renderizar e ação de clique', () => {
		const onClick = jest.fn();
		render(<Button onClick={onClick}> ABC </Button>);

		const text = screen.getByText(/ABC/i);

		fireEvent.click(text);

		expect(text).toBeTruthy();
		expect(onClick).toBeCalled();
	});

	it('Renderizar com cores alternativas', () => {
		const onClick = jest.fn();
		render(
			<Button onClick={onClick} type="icon" color="success">
				ABCD
			</Button>
		);

		const button = screen.getByText(/ABCD/i);

		expect(button.style.backgroundColor).toEqual(mainTheme.colors.success.main);
	});
});
