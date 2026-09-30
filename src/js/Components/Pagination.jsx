import { Link, useLocation } from 'react-router';
import PropTypes from 'prop-types';

export default function Pagination({ currentPage, numPages, setCurrentPage }) {
	const location = useLocation();

	const fill = (length, start = 1) => Array.from({ length }, (_, i) => start + i);

	const getPages = () => {
		if (numPages <= 7) {
			return fill(numPages);
		}
		if (currentPage <= 4) {
			return [1, 2, 3, 4, 5, '...', numPages];
		}
		if (currentPage > (numPages - 4)) {
			return [1, '...'].concat(fill(5, numPages - 4));
		}
		return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', numPages];
	};

	const pages = getPages();

	const goToPage = (e) => {
		const url = e.target.getAttribute('href');
		const newPage = url.substr(url.lastIndexOf('=') + 1);
		setCurrentPage(parseInt(newPage, 10));
	};

	return (
		<nav aria-label="Pagination" className="crudnick-pagination">
			<ul className="crudnick-pagination__list">
				<li className="crudnick-pagination__item">
					<Link
						aria-label="Previous page"
						className="crudnick-pagination__link crudnick-pagination__link--prev"
						disabled={currentPage <= 1}
						onClick={goToPage}
						to={`${location.pathname}${currentPage > 2 ? `?page=${currentPage - 1}` : ''}`}
					>
						&lsaquo;
					</Link>
				</li>
				{pages.map((p) => (
					<li className="crudnick-pagination__item" key={p}>
						{p === '...' ? (
							<span className="crudnick-pagination__link crudnick-pagination__link--dots">
								&hellip;
							</span>
						) : (
							<Link
								aria-current={p === currentPage ? 'page' : null}
								aria-label={`Page ${p}`}
								className="crudnick-pagination__link"
								onClick={goToPage}
								to={`${location.pathname}${p > 1 ? `?page=${p}` : ''}`}
							>
								{p}
							</Link>
						)}
					</li>
				))}
				<li className="crudnick-pagination__item">
					<Link
						aria-label="Next page"
						className="crudnick-pagination__link crudnick-pagination__link--next"
						disabled={currentPage >= numPages}
						onClick={goToPage}
						to={`${location.pathname}?page=${currentPage + 1}`}
					>
						&rsaquo;
					</Link>
				</li>
			</ul>
		</nav>
	);
}

Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	numPages: PropTypes.number.isRequired,
	setCurrentPage: PropTypes.func.isRequired,
};
