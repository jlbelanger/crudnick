import Auth from './Auth';
import get from 'get-value';

export const afterSubmitFailure = (error) => {
	if (error.status === 401) {
		Auth.logout(error.status);
	}
};

export const capitalize = (s) => (
	s.replace(/(?:^|\s)\S/g, (a) => (a.toUpperCase()))
);

export const cleanKey = (key) => (key.replace(/^relationships\./, ''));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
const escapeRegExp = (string) => (string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'));

export const errorMessageText = (response, logout = true) => {
	if (logout && response.status === 401) {
		return Auth.logout(response.status);
	}
	return `Error: ${response.errors.map((e) => (e.title)).join(' ')}`;
};

const filterByKey = (records, key, value) => {
	value = value.trim().toLowerCase();
	const escapedValue = escapeRegExp(value);
	records = records.filter((record) => {
		const recordValue = (get(record, key) || '').toString().replace(/<[^>]+?>/g, '').toLowerCase();
		return recordValue.match(new RegExp(`(^|[^a-z])${escapedValue}`));
	});
	records = records.sort((a, b) => {
		const aValue = (get(a, key) || '').toString().toLowerCase();
		const bValue = (get(b, key) || '').toString().toLowerCase();
		const aPos = aValue.indexOf(value) === 0;
		const bPos = bValue.indexOf(value) === 0;
		if ((aPos && bPos) || (!aPos && !bPos)) {
			return 0;
		}
		if (aPos && !bPos) {
			return -1;
		}
		return 1;
	});
	return records;
};

export const filterByKeys = (records, filters) => {
	Object.keys(filters).forEach((key) => {
		records = filterByKey(records, key, filters[key]);
	});
	return records;
};

export const sortByKey = (records, key, dir) => (
	records.sort((a, b) => {
		let aVal = get(a, key);
		if (aVal === undefined || aVal === null) {
			aVal = '';
		}
		let bVal = get(b, key);
		if (bVal === undefined || bVal === null) {
			bVal = '';
		}
		if (aVal === bVal) {
			return 0;
		}
		if (aVal === '') {
			return 1;
		}
		if (bVal === '') {
			return -1;
		}

		if (typeof aVal === 'number' && typeof bVal === 'number') {
			if (dir === 'asc') {
				return aVal < bVal ? -1 : 1;
			}
			return aVal > bVal ? -1 : 1;
		}

		aVal = aVal.toString();
		bVal = bVal.toString();
		return dir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
	})
);
