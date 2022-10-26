import axios, { AxiosRequestConfig } from 'axios';

import { API_URL } from '../commons/constants/env';

export const onResponseError = <T = unknown>(error: T): Promise<T> =>
	Promise.reject(error);

export const setHeaders = (
	reqConfig: AxiosRequestConfig
): AxiosRequestConfig => {
	const headers = {
		'Content-Type': 'application/json',
		'X-API-Key': '68469fa0',
	};

	// eslint-disable-next-line no-param-reassign
	reqConfig.headers = { ...reqConfig.headers, ...headers };
	return reqConfig;
};

const api = axios.create({
	baseURL: API_URL,
});

api.interceptors.request.use(setHeaders, onResponseError);
api.defaults.headers.common.Accept = 'application/json';
api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common.credentials = 'include';

export default api;
