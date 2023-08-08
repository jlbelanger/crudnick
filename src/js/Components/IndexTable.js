import { Alert, Api, Input } from '@jlbelanger/formosa';
import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-unresolved
import { ReactComponent as ArrowIcon } from '../../svg/arrow.svg';
import { ReactComponent as CheckIcon } from '../../svg/check.svg';
import { cleanKey } from '../Utilities/String';
import { errorMessageText } from '../Utilities/Errors';
import { filterByKeys } from '../Utilities/Filter';
import get from 'get-value';
import { Link } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import MetaTitle from './MetaTitle';
import PropTypes from 'prop-types';
import { sortByKey } from '../Utilities/Sort';

export default function IndexTable({ columns, defaultOptions, path, title, url }) {
	const [rows, setRows] = useState(null);
	const [filteredRows, setFilteredRows] = useState([]);
	const [rowsError, setRowsError] = useState(false);
	const [sortKey, setSortKey] = useState('name');
	const [sortDir, setSortDir] = useState('asc');
	const [filters, setFilters] = useState(() => {
		const output = {};
		columns.forEach((column) => {
			output[cleanKey(column.key)] = '';
		});
		return output;
	});

	useEffect(() => {
		if (Object.prototype.hasOwnProperty.call(defaultOptions, 'sortKey')) {
			setSortKey(defaultOptions.sortKey);
		}

		if (Object.prototype.hasOwnProperty.call(defaultOptions, 'sortDir')) {
			setSortDir(defaultOptions.sortDir);
		}

		if (Object.prototype.hasOwnProperty.call(defaultOptions, 'filters')) {
			setFilters(defaultOptions.filters);
		}

		Api.get(url, false)
			.catch((response) => {
				setRowsError(errorMessageText(response));
				setRows(null);
				setFilteredRows([]);
			})
			.then((response) => {
				if (!response) {
					return;
				}
				setRows(response);
				setFilteredRows(response);
			});
	}, [url]);

	const sort = (e) => {
		const newSortKey = e.target.getAttribute('data-key');
		let newSortDir;
		if (sortKey === newSortKey) {
			newSortDir = sortDir === 'asc' ? 'desc' : 'asc';
		} else {
			newSortDir = 'asc';
		}

		setSortKey(newSortKey);
		setSortDir(newSortDir);

		setRows(sortByKey(rows, newSortKey, newSortDir));
		setFilteredRows(sortByKey(filteredRows, newSortKey, newSortDir));
	};

	const numRows = rows ? rows.length : 0;
	let numResults = ` (${filteredRows.length.toLocaleString()}`;
	if (filteredRows.length !== numRows) {
		numResults += ` of ${numRows.toLocaleString()}`;
	}
	numResults += ` result${numRows === 1 ? '' : 's'})`;

	columns = columns.map((column) => {
		if (column.link) {
			column.fn = (row, value) => (
				<Link className="crudnick-link--table" to={`/${path}/${row.id}`}>
					{value}
				</Link>
			);
		} else if (column.type === 'checkbox') {
			column.fn = (_row, value) => (value ? (<CheckIcon aria-hidden="true" height={16} width={16} />) : null);
			column.size = 4;
		}
		return column;
	});

	return (
		<>
			<MetaTitle title={title} />

			<header className="crudnick-header">
				<h1>
					<span>{title}</span>
					<small>{rows ? numResults : null}</small>
				</h1>
				<ul className="crudnick-list">
					<li className="crudnick-list__item">
						<Link className="formosa-button crudnick-list__button" to={`/${path}/add`}>Add new</Link>
					</li>
				</ul>
			</header>

			{rowsError ? (
				<Alert type="error">{rowsError}</Alert>
			) : (
				<table>
					<thead>
						<tr>
							{columns.map((column) => (
								<th key={column.key} scope="col" style={{ width: column.size ? 0 : null }} {...column.thAttributes}>
									{column.disableSort ? (column.shortLabel || column.label) : (
										<button
											aria-label={`Sort by ${column.label}`}
											className="formosa-button"
											data-key={column.sortKey || cleanKey(column.key)}
											disabled={rows === null}
											onClick={sort}
											type="button"
										>
											{column.shortLabel || column.label}
											{sortKey === (column.sortKey || cleanKey(column.key)) ? (
												<ArrowIcon
													aria-hidden="true"
													className={`crudnick-icon--caret ${sortDir === 'desc' ? 'flip' : ''}`}
													height={12}
													width={12}
												/>
											) : null}
										</button>
									)}
								</th>
							))}
						</tr>
						<tr>
							{columns.map(({ key, disableSearch, label, size }) => (
								<td className="formosa-input-wrapper--search" key={key}>
									{!disableSearch && (
										<Input
											aria-label={`Search ${label}`}
											className="formosa-field__input"
											disabled={rows === null}
											setValue={(newValue) => {
												const newFilters = {
													...filters,
													[cleanKey(key)]: newValue,
												};
												setFilters(newFilters);

												const newRows = filterByKeys(rows, newFilters);
												setFilteredRows(newRows);
											}}
											size={size}
											type="search"
											value={filters[cleanKey(key)]}
										/>
									)}
								</td>
							))}
						</tr>
					</thead>
					<tbody>
						{rows === null
							? (
								<tr>
									<td colSpan={columns.length}>
										<div className="formosa-spinner" role="status" style={{ justifyContent: 'center', margin: '16px auto' }}>
											Loading...
										</div>
									</td>
								</tr>
							) : filteredRows.map((row) => (
								<tr key={row.id}>
									{columns.map(({ fn, key }) => (
										<td className={`crudnick-cell--${key}`} key={key}>
											{fn ? fn(row, get(row, cleanKey(key)), key) : get(row, cleanKey(key))}
										</td>
									))}
								</tr>
							))}
					</tbody>
				</table>
			)}
		</>
	);
}

IndexTable.propTypes = {
	columns: PropTypes.array.isRequired,
	defaultOptions: PropTypes.object.isRequired,
	path: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
