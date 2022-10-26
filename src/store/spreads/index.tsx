import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { TSpread } from '../../commons/types';
import { Spread } from '../../services/spread';
import { data } from './mock';

type TStore = {
	spreads: TSpread[];
	error: boolean;
	loading: boolean;
};

// eslint-disable-next-line
const store = (set: any) => ({
	spreads: [],
	error: false,
	loading: false,
	editSpread: async (spread: TSpread) => {
		try {
			set({ loading: true, error: false }, false);
			set((state: TStore) => {
				return {
					spreads: state.spreads.map((item: TSpread) =>
						item.id === spread.id ? spread : item
					),
				};
			}, false);
			if (spread.id) {
				await Spread.put(spread.id);
			}
		} catch (error) {
			set({ error: true }, false);
		} finally {
			set({ loading: false }, false, 'EditSpread');
		}
	},
	addSpread: async (spread: TSpread) => {
		try {
			set({ loading: true, error: false }, false);
			set((state: TStore) => {
				const spreadsAdded = [spread].concat(state.spreads);
				return {
					spreads: spreadsAdded,
				};
			}, false);
			await Spread.post(spread);
		} catch (error) {
			set({ error: true }, false);
		} finally {
			set({ loading: false }, false, 'AddSpread');
		}
	},
	deleteSpread: async (spread: TSpread) => {
		try {
			set({ loading: true, error: false }, false);
			set((state: TStore) => {
				return {
					spreads: state.spreads.filter(
						(item: TSpread) => item.id !== spread.id
					),
				};
			}, false);
			if (spread.id) {
				await Spread.delete(spread.id);
			}
		} catch (error) {
			set({ error: true }, false);
		} finally {
			set({ loading: false }, false, 'DeleteSpread');
		}
	},
	fetchSpread: async () => {
		try {
			set({ loading: true, error: false }, false);
			const { data } = await Spread.get();
			set({ spreads: data }, false);
		} catch (error) {
			set({ error: true, spreads: data.body }, false);
		} finally {
			set({ loading: false }, false, 'FetchSpreads');
		}
	},
});

const useStore = create(devtools(store, { name: 'Sellers' }));

export default useStore;
