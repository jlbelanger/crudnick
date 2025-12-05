import Cookies from 'js-cookie';
import CrudnickConfig from './Config';

export default class Auth {
	static login(user, token, remember) {
		const cookiePrefix = CrudnickConfig.get('cookiePrefix');
		Cookies.set(`${cookiePrefix}_user`, JSON.stringify(user), Auth.attributes(remember));
		Cookies.set(`${cookiePrefix}_token`, token, Auth.attributes(remember));
	}

	static refresh() {
		let user = Auth.user();
		user = user ? JSON.parse(user) : null;
		if (user && user.remember) {
			Auth.login(user, Auth.token(), user.remember);
		}
	}

	static attributes(remember) {
		const attributes = {
			sameSite: 'lax',
		};
		if (remember) {
			attributes.expires = 365;
		}
		if (window.location.protocol === 'https:') {
			attributes.secure = true;
		}
		return attributes;
	}

	static logout(status = '') {
		const basePath = CrudnickConfig.get('basePath');
		const cookiePrefix = CrudnickConfig.get('cookiePrefix');
		Cookies.remove(`${cookiePrefix}_user`);
		Cookies.remove(`${cookiePrefix}_token`);
		window.location.href = `${basePath}${status ? `?status=${status}` : ''}`;
	}

	static id() {
		const user = Auth.user();
		return user ? JSON.parse(user).id : null;
	}

	static user() {
		const cookiePrefix = CrudnickConfig.get('cookiePrefix');
		return Cookies.get(`${cookiePrefix}_user`);
	}

	static token() {
		const cookiePrefix = CrudnickConfig.get('cookiePrefix');
		return Cookies.get(`${cookiePrefix}_token`);
	}

	static isLoggedIn() {
		return !!Auth.user() && !!Auth.token();
	}
}
