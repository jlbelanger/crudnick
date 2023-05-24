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

	return (
		<BrowserRouter {...routerAttributes}>
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
