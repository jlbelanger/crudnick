import get from 'get-value';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
const escapeRegExp = (string) => (string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'));

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

export const filterByKeys = (records, filters) => { // eslint-disable-line import/prefer-default-export
	Object.keys(filters).forEach((key) => {
		records = filterByKey(records, key, filters[key]);
	});
	return records;
};
