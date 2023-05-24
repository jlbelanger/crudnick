import Auth from './Auth';

export const errorMessageText = (response, logout = true) => { // eslint-disable-line import/prefer-default-export
	if (logout && response.status === 401) {
		return Auth.logout(response.status);
	}
	return `Error: ${response.errors.map((e) => (e.title)).join(' ')}`;
};
