import axios, { AxiosError, type AxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
	baseURL: process.env.API_URL,
	headers: {
		// Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		'Content-Type': 'application/json',
	},
});

export const request = async <T>(options: AxiosRequestConfig) => {
	const result = await axiosClient<T>(options);
	return result.data;
};
