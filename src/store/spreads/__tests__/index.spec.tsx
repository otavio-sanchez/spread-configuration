import { renderHook } from '@testing-library/react';

import { TSpread } from '../../../commons/types';
import api from '../../../services/api';
import useStore from '../index';
import { data } from '../mock';

const mockFn = jest.fn();

describe('useSpreads', () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let result: any;

	beforeEach(() => {
		result = renderHook(() => useStore()).result;
	});

	it('fetchSpread', async () => {
		api.get = mockFn.mockImplementationOnce(() =>
			Promise.resolve({ data: data.body })
		);
		await result.current.fetchSpread();
		expect(result.current.spreads).toEqual(data.body);
	});

	it('deleteSpread', async () => {
		api.delete = mockFn.mockImplementationOnce(() =>
			Promise.resolve({ data: data.body })
		);
		await result.current.editSpread({ data: data.body[0] });
		expect(
			result.current.spreads.filter(
				(spread: TSpread) => spread.id === data.body[0].id
			).length > 0
		).toBeTruthy();
	});
});
