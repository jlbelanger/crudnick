import { cleanKey, filterByKeys, getErrorMessage, sortByKey } from '../Utilities/Helpers';
import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-unresolved
import { Api } from '@jlbelanger/formosa';
import { ReactComponent as ArrowIcon } from '../../svg/arrow.svg';
import { ReactComponent as CheckIcon } from '../../svg/check.svg';
import get from 'get-value';
import MetaTitle from '../MetaTitle';
import { NavLink } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../svg/search.svg';

export default function IndexTable({ columns, defaultOptions, path, title, url }) {
	const [rows, setRows] = useState(null);
	const [filteredRows, setFilteredRows] = useState([]);
	const [error, setError] = useState(false);
	const [options, setOptions] = useState({
		sortKey: 'name',
		sortDir: 'asc',
		filters: {},
	});

	useEffect(() => {
		setOptions(defaultOptions);
		Api.get(url)
			.then((response) => {
				setError(null);
				setRows(response);
				setFilteredRows(response);
			})
			.catch((response) => {
				setError(response);
				setRows(null);
				setFilteredRows([]);
			});
		return () => {};
	}, [url]);

	const sort = (e) => {
		const sortKey = e.target.getAttribute('data-key');
		let sortDir;
		if (options.sortKey === sortKey) {
			sortDir = options.sortDir === 'asc' ? 'desc' : 'asc';
		} else {
			sortDir = 'asc';
		}

		setOptions({
			...options,
			sortKey,
			sortDir,
		});

		setRows(sortByKey(rows, sortKey, sortDir));
		setFilteredRows(sortByKey(filteredRows, sortKey, sortDir));
	};

	const filter = (e) => {
		const key = e.target.getAttribute('data-key');
		const newFilters = {
			...options.filters,
			[key]: e.target.value,
		};

		setOptions({
			...options,
			filters: newFilters,
		});

		const newRows = filterByKeys(rows, newFilters);
		setFilteredRows(newRows);
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
				<NavLink className="crudnick-link--table" to={`/${path}/${row.id}`}>
					{value}
				</NavLink>
			);
		} else if (column.type === 'checkbox') {
			column.fn = (_row, value) => (value ? (<CheckIcon height={16} width={16} />) : null);
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
					<small>{numResults}</small>
				</h1>
				<ul className="crudnick-list">
					<li className="crudnick-list__item">
						<NavLink className="formosa-button crudnick-list__button" to={`/${path}/add`}>Add new</NavLink>
					</li>
				</ul>
			</header>

			{error ? (
				<div className="formosa-message formosa-message--error">{getErrorMessage(error)}</div>
			) : (
				<table>
					<thead>
						<tr>
							{columns.map(({
								disableSort,
								key,
								label,
								shortLabel,
								size,
							}) => (
								<th key={key} style={{ width: size ? 0 : null }}>
									{disableSort ? (shortLabel || label) : (
										<button
											className="formosa-button"
											data-key={key === 'name' ? 'slug' : cleanKey(key)}
											onClick={sort}
											type="button"
										>
											{shortLabel || label}
											{options.sortKey === (key === 'name' ? 'slug' : cleanKey(key)) ? (
												<ArrowIcon
													className={`crudnick-icon--caret ${options.sortDir === 'desc' ? 'flip' : ''}`}
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
							{columns.map(({ key, disableSearch, size }) => (
								<td className="formosa-input-wrapper--search" key={key}>
									{!disableSearch && (
										<div className="formosa-search-wrapper">
											<input
												className="formosa-field__input"
												data-key={cleanKey(key)}
												onChange={filter}
												size={size}
												type="search"
												value={options.filters[cleanKey(key)] || ''}
											/>
											<SearchIcon className="formosa-icon--search" height={16} width={16} />
										</div>
									)}
								</td>
							))}
						</tr>
					</thead>
					<tbody>
						{filteredRows.map((row) => (
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
