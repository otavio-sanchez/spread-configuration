import { TSpread } from '../commons/types';
import api from './api';

export const Spread = {
	get: () => api.get('/spreads'),
	delete: (id: number) => api.get(`/spreads/${id}`),
	put: (id: number) => api.get(`/spreads/${id}`),
	post: (spread: TSpread) => api.get(`/spreads`, { data: spread }),
};
