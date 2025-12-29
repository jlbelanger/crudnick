export default class CrudnickConfig {
	static init(userConfig = {}) {
		window.CRUDNICK_CONFIG = {
			basePath: userConfig.basePath || '/',
			cookiePrefix: userConfig.cookiePrefix || '',
			frontendUrl: userConfig.frontendUrl || '',
			siteTitle: userConfig.siteTitle || '',
		};
	}

	static isReady() {
		return typeof window.CRUDNICK_CONFIG !== 'undefined';
	}

	static get(key) {
		if (!CrudnickConfig.isReady()) {
			return null;
		}
		return key ? window.CRUDNICK_CONFIG[key] : window.CRUDNICK_CONFIG;
	}

	static set(key, value) {
		window.CRUDNICK_CONFIG[key] = value;
	}
}
