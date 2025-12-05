import { Api, FormosaContext } from '@jlbelanger/formosa';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Auth from '../Utilities/Auth';
import { errorMessageText } from '../Utilities/Errors';
import MenuIcon from '../../svg/menu.svg?react'; // eslint-disable-line import/no-unresolved
import { NavLink } from 'react-router';
import PropTypes from 'prop-types';
import XIcon from '../../svg/x.svg?react'; // eslint-disable-line import/no-unresolved

export default function Nav({ nav }) {
	const { addToast } = useContext(FormosaContext);
	const dialogRef = useRef(null);
	const breakpoint = 1025;
	const [showInlineNav, setShowInlineNav] = useState(window.innerWidth >= breakpoint);

	const onTransitionEnd = () => {
		document.body.classList.remove('show-nav');
		if (dialogRef.current.tagName === 'DIALOG') {
			dialogRef.current.close();
		}
		dialogRef.current.removeEventListener('transitionend', onTransitionEnd);
	};

	const onResize = () => {
		setShowInlineNav(window.innerWidth >= breakpoint);
	};

	useEffect(() => {
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	useEffect(() => {
		if (showInlineNav) {
			hideMenu(); // eslint-disable-line no-use-before-define
			onTransitionEnd();
		}
	}, [showInlineNav]);

	const logout = () => {
		Api.delete('auth/logout')
			.catch((response) => {
				if (response.status === 401) {
					return;
				}
				addToast(errorMessageText(response), 'error');
			})
			.then(() => {
				Auth.logout();
			});
	};

	const hideMenu = () => {
		document.body.classList.remove('animate-nav');
		dialogRef.current.addEventListener('transitionend', onTransitionEnd);
	};

	const openMenu = () => {
		document.body.classList.add('show-nav');
		dialogRef.current.showModal();

		setTimeout(() => {
			document.body.classList.add('animate-nav');
		}, 10);
	};

	const onCancelDialog = (e) => {
		e.preventDefault();
		hideMenu();
	};

	const onClickDialog = (e) => {
		if (e.target.tagName === 'DIALOG') {
			hideMenu();
		}
	};

	const Dialog = showInlineNav ? 'div' : 'dialog';

	return (
		<nav id="crudnick-nav">
			<Dialog id="crudnick-nav__dialog" ref={dialogRef} onCancel={onCancelDialog} onClick={onClickDialog}>
				<button
					aria-controls="crudnick-nav__dialog"
					aria-expanded="false"
					className="formosa-button crudnick-menu-button"
					id="crudnick-menu-close-button"
					onClick={hideMenu}
					title="Close Menu"
					type="button"
				>
					<XIcon aria-hidden="true" />
					Close Menu
				</button>
				<ul id="crudnick-nav__list">
					{nav.map(({ label, path }) => (
						<li className="crudnick-list__item" key={path}>
							<NavLink
								className="formosa-button crudnick-list__button"
								onClick={hideMenu}
								to={path}
							>
								{label}
							</NavLink>
						</li>
					))}
					<li className="crudnick-list__item">
						<button className="formosa-button crudnick-list__button" data-cy="logout" id="crudnick-logout" onClick={logout} type="button">
							Logout
						</button>
					</li>
				</ul>
			</Dialog>
			<button
				aria-controls="crudnick-nav__dialog"
				aria-expanded="true"
				className="formosa-button crudnick-menu-button"
				data-cy="menu"
				id="crudnick-menu-show-button"
				onClick={openMenu}
				title="Show Menu"
				type="button"
			>
				<MenuIcon aria-hidden="true" />
				Show Menu
			</button>
		</nav>
	);
}

Nav.propTypes = {
	nav: PropTypes.array.isRequired,
};
