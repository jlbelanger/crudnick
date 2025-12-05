import { Api, FormContainer } from '@jlbelanger/formosa';
import Auth from './Utilities/Auth';
import Nav from './Components/Nav';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

export default function Layout({
	articleProps = null,
	children,
	nav,
}) {
	if (Auth.isLoggedIn() && !Api.getToken()) {
		Api.setToken(Auth.token());
	}

	document.addEventListener('formosaApiRequest', () => {
		Auth.refresh();
	});

	// Accessibility: skip to content (https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/).
	const onClick = (e) => {
		e.preventDefault();
		const id = e.target.getAttribute('href').split('#')[1];
		const elem = document.getElementById(id);
		elem.setAttribute('tabindex', -1);
		elem.addEventListener('blur', () => {
			elem.removeAttribute('tabindex');
		});
		elem.focus();
	};

	return (
		<>
			<a href="#crudnick-article" id="crudnick-skip" onClick={onClick}>Skip to content</a>
			<FormContainer>
				{Auth.isLoggedIn() && <Nav nav={nav} />}
				<article id="crudnick-article" {...articleProps}>
					{children}
				</article>
			</FormContainer>
		</>
	);
}

Layout.propTypes = {
	articleProps: PropTypes.object,
	children: PropTypes.node,
	nav: PropTypes.array.isRequired,
};
