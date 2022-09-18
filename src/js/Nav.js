import { Api, FormosaContext } from '@jlbelanger/formosa';
import React, { useContext, useState } from 'react'; // eslint-disable-line import/no-unresolved
import Auth from './Utilities/Auth';
import { ReactComponent as MenuIcon } from '../svg/menu.svg';
import { NavLink } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import PropTypes from 'prop-types';

export default function Nav({ nav }) {
	const { addToast } = useContext(FormosaContext);
	const [showMenu, setShowMenu] = useState(false);
	const logout = () => {
		Api.delete('auth/logout')
			.then(() => {
				Auth.logout();
			})
			.catch((response) => {
				if (response.status === 401 || response.status === 404) {
					Auth.logout();
					return;
				}
				const text = response.message ? response.message : response.errors.map((err) => (err.title)).join(' ');
				addToast(text, 'error', 10000);
			});
	};
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	const hideMenu = () => {
		setShowMenu(false);
	};

	return (
		<nav id="crudnick-nav">
			<ul className={`crudnick-list${showMenu ? ' show' : ''}`} id="crudnick-nav__list">
				{nav.map(({ label, path }) => (
					<li className="crudnick-list__item" key={path}>
						<NavLink
							activeClassName="active"
							className="formosa-button crudnick-list__button"
							onClick={hideMenu}
							to={path}
						>
							{label}
						</NavLink>
					</li>
				))}
				<li className="crudnick-list__item">
					<button className="formosa-button crudnick-list__button" id="crudnick-logout" onClick={logout} type="button">Logout</button>
				</li>
			</ul>
			<button className="formosa-button" id="crudnick-menu-button" onClick={toggleMenu} type="button">
				<MenuIcon aria-hidden="true" />
				Menu
			</button>
		</nav>
	);
}

Nav.propTypes = {
	nav: PropTypes.array.isRequired,
};
