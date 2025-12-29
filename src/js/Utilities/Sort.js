import get from 'get-value';

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
