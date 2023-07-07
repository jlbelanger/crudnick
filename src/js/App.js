import { Api, FormContainer } from '@jlbelanger/formosa';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import Auth from './Utilities/Auth';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Login from './Pages/Auth/Login';
import Nav from './Components/Nav';
import PropTypes from 'prop-types';
import React from 'react'; // eslint-disable-line import/no-unresolved
import ResetPassword from './Pages/Auth/ResetPassword';

export default function App({
	articleProps,
	children,
	nav,
	routerAttributes,
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
		<BrowserRouter {...routerAttributes}>
			<a href="#crudnick-article" id="crudnick-skip" onClick={onClick}>Skip to content</a>
			<FormContainer>
				{Auth.isLoggedIn() && <Nav nav={nav} />}
				<article id="crudnick-article" {...articleProps}>
					{Auth.isLoggedIn() ? children : (
						<Switch>
							<Route exact path="/"><Login /></Route>
							<Route exact path="/forgot-password"><ForgotPassword /></Route>
							<Route exact path="/reset-password/:token"><ResetPassword /></Route>
							<Route><Redirect to="/" /></Route>
						</Switch>
					)}
				</article>
			</FormContainer>
		</BrowserRouter>
	);
}

App.propTypes = {
	articleProps: PropTypes.object,
	children: PropTypes.node.isRequired,
	nav: PropTypes.array.isRequired,
	routerAttributes: PropTypes.object,
};

App.defaultProps = {
	articleProps: null,
	routerAttributes: null,
};
