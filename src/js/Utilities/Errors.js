import Auth from './Auth.js';

export const errorMessageText = (response, logout = true) => {
	if (logout && response.status === 401) {
		return Auth.logout(response.status);
	}
	return `Error: ${response.errors.map((e) => (e.title)).join(' ')}`;
};
