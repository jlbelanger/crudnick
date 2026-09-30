import { Alert, Api, Input } from '@jlbelanger/formosa';
import { Link, useSearchParams } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import ArrowIcon from '../../svg/arrow.svg?react'; // eslint-disable-line import/no-unresolved
import CheckIcon from '../../svg/check.svg?react'; // eslint-disable-line import/no-unresolved
import { cleanKey } from '../Utilities/String.js';
import { errorMessageText } from '../Utilities/Errors.js';
import { filterByKeys } from '../Utilities/Filter.js';
import get from 'get-value';
import MetaTitle from './MetaTitle.jsx';
import Pagination from './Pagination.jsx';
import PropTypes from 'prop-types';
import { sortByKey } from '../Utilities/Sort.js';

export default function IndexTable({ columns, defaultOptions, path, perPage = 10, title, url }) {
	const [urlSearchParams] = useSearchParams();
	const [rows, setRows] = useState(null);
	const [numPages, setNumPages] = useState(null);
	const [numRows, setNumRows] = useState(0);
	const [numFilteredRows, setNumFilteredRows] = useState(0);
	const [currentPage, setCurrentPage] = useState(() => {
		if (urlSearchParams.get('page')) {
			const page = parseInt(urlSearchParams.get('page'), 10);
			if (page > 0) {
				return page;
			}
		}
		return 1;
	});
	const [filteredRows, setFilteredRows] = useState([]);
	const [rowsError, setRowsError] = useState(false);
	const [sortKey, setSortKey] = useState(() => {
		if (Object.hasOwn(defaultOptions, 'sortKey')) {
			return defaultOptions.sortKey;
		}
		return 'name';
	});
	const [sortDir, setSortDir] = useState(() => {
		if (Object.hasOwn(defaultOptions, 'sortDir')) {
			return defaultOptions.sortDir;
		}
		return 'asc';
	});
	const [activeFilters, setActiveFilters] = useState(() => {
		const output = {};
		columns.forEach((column) => {
			const key = cleanKey(column.key);
			let value = '';
			if (Object.hasOwn(defaultOptions, 'filters') && Object.hasOwn(defaultOptions.filters, key)) {
				value = defaultOptions.filters[key];
			}
			output[key] = value;
		});
		return output;
	});
	const [filters, setFilters] = useState({ ...activeFilters });
	const api = Api.instance();
	const isPaginated = perPage !== null;
	const requestUrl = useMemo(() => {
		let output = url;
		if (!isPaginated) {
			return output;
		}

		if (output.includes('?')) {
			output += '&';
		} else {
			output += '?';
		}

		output += `page[size]=${perPage}&page[number]=${currentPage}`;

		if (sortKey) {
			output += `&sort=${sortDir === 'desc' ? '-' : ''}${sortKey}`;
		}

		if (activeFilters) {
			Object.keys(activeFilters).forEach((key) => {
				const value = activeFilters[key];
				if (value !== '') {
					output += `&filter[${key}][like]=%25${value}%25`;
				}
			});
		}
		return output;
	}, [url, currentPage, sortKey, sortDir, activeFilters]);

	useEffect(() => {
		fetchRows();
	}, [requestUrl]);

	const fetchRows = () => {
		if (rows !== null) {
			setRows(null);
		}
		api(requestUrl, false)
			.catch((response) => {
				setRowsError(errorMessageText(response));
				setRows(null);
				setFilteredRows([]);
				setNumFilteredRows(0);
			})
			.then((response) => {
				if (!response) {
					return;
				}
				if (isPaginated) {
					setRows(response.data || []);
					setFilteredRows(response.data || []);
					setNumRows(response.meta.page.total);
					setNumFilteredRows(response.meta.page.total);
					setNumPages(response.meta.page.total_pages);
					if (response.meta.page.total_pages > 0 && currentPage > response.meta.page.total_pages) {
						setCurrentPage(response.meta.page.total_pages);
					}
				} else {
					setRows(response);
					setFilteredRows(response);
					setNumRows(response.length);
					setNumFilteredRows(response.length);
					setNumPages(1);
				}
			});
	};

	const sort = (e) => {
		const newSortKey = e.target.getAttribute('data-crudnick-sort');
		let newSortDir;
		if (sortKey === newSortKey) {
			newSortDir = sortDir === 'asc' ? 'desc' : 'asc';
		} else {
			newSortDir = 'asc';
		}

		setSortKey(newSortKey);
		setSortDir(newSortDir);

		if (!isPaginated) {
			setRows(sortByKey(rows, newSortKey, newSortDir));
			setFilteredRows(sortByKey(filteredRows, newSortKey, newSortDir));
		}
	};

	let numResults = ` (${numFilteredRows.toLocaleString()}`;
	if (numFilteredRows !== numRows) {
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
			// eslint-disable-next-line @stylistic/no-extra-parens
			column.fn = (_row, value) => (value ? <CheckIcon aria-hidden="true" height={16} width={16} /> : null);
			column.size = 4;
		}
		return column;
	});

	const onSubmitPaginationForm = (e) => {
		e.preventDefault();
		setCurrentPage(1);
		setActiveFilters({ ...filters });
	};

	return (
		<>
			<MetaTitle title={title} />

			<header className="crudnick-header">
				<h1>
					<span data-cy="title">{title}</span>
					{rows === null ? null : <small data-cy="num-results">{numResults}</small>}
				</h1>
				<ul className="crudnick-list">
					<li className="crudnick-list__item">
						<Link className="formosa-button crudnick-list__button" data-cy="add" to={`/${path}/add`}>
							Add new
						</Link>
					</li>
				</ul>
			</header>

			{isPaginated ? (
				<form id="crudnick-pagination" onSubmit={onSubmitPaginationForm}>
					<Pagination currentPage={currentPage} numPages={numPages} setCurrentPage={setCurrentPage} />
				</form>
			) : null}

			{rowsError ? <Alert type="error">{rowsError}</Alert> : (
				<table>
					<thead>
						<tr>
							{columns.map((column) => (
								<th
									className={column.size ? 'crudnick-column--shrink' : null}
									key={column.key}
									scope="col"
									{...column.thAttributes}
								>
									{column.disableSort ? column.shortLabel || column.label : (
										<button
											aria-label={`Sort by ${column.label}`}
											className="formosa-button crudnick-column__button"
											data-crudnick-sort={column.sortKey || cleanKey(column.key)}
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
								<td className={`formosa-input-wrapper--search${isPaginated ? ' crudnick__filter' : ''}`} key={key}>
									{!disableSearch && (
										<>
											<Input
												aria-label={`Search ${label}`}
												className="formosa-field__input"
												data-crudnick-filter={cleanKey(key)}
												disabled={rows === null}
												form={isPaginated ? 'crudnick-pagination' : null}
												setValue={(newValue) => {
													const newFilters = {
														...filters,
														[cleanKey(key)]: newValue,
													};
													setFilters(newFilters);

													if (!isPaginated) {
														setCurrentPage(1);
														setActiveFilters(newFilters);

														const newRows = filterByKeys(rows, newFilters);
														setFilteredRows(newRows);
														setNumFilteredRows(newRows.length);
													}
												}}
												size={size}
												type="search"
												value={filters[cleanKey(key)]}
											/>
											{isPaginated && filters[cleanKey(key)] ? (
												<button
													className="crudnick__filter-button crudnick__filter-button--clear"
													data-crudnick-filter-clear={cleanKey(key)}
													onClick={() => {
														const newFilters = {
															...filters,
															[cleanKey(key)]: '',
														};
														setFilters(newFilters);
														setActiveFilters({ ...newFilters });
														setCurrentPage(1);
													}}
													type="button"
												>
													{`Clear ${label} filter`}
												</button>
											) : null}
											{isPaginated ? (
												<button
													className="crudnick__filter-button crudnick__filter-button--submit"
													data-crudnick-filter-submit={cleanKey(key)}
													form="crudnick-pagination"
													type="submit"
												>
													{`Filter by ${label}`}
												</button>
											) : null}
										</>
									)}
								</td>
							))}
						</tr>
					</thead>
					<tbody>
						{rows === null ? (
							<tr>
								<td colSpan={columns.length}>
									<div className="formosa-spinner" role="status">
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
	perPage: PropTypes.number,
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};
