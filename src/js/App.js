import { Api, FormContainer } from '@jlbelanger/formosa';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './Utilities/Auth';
import Nav from './Nav';
import PropTypes from 'prop-types';
import React from 'react';
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Login from './Pages/Auth/Login';
import RedirectToHome from './RedirectToHome';
import ResetPassword from './Pages/Auth/ResetPassword';

export default function App({ children, nav }) {
	if (Auth.isLoggedIn() && !Api.getToken()) {
		Api.setToken(Auth.token());
	}

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<FormContainer>
				{Auth.isLoggedIn() && <Nav nav={nav} />}
				<article id="crudnick-article">
					<Switch>
						<Route exact path="/" component={Auth.isLoggedIn() ? null : Login} />

						{Auth.isLoggedIn() ? children : (
							<>
								<Route exact path="/forgot-password" component={ForgotPassword} />
								<Route exact path="/reset-password/:token" component={ResetPassword} />
							</>
						)}

						<Route component={RedirectToHome} />
					</Switch>
				</article>
			</FormContainer>
		</BrowserRouter>
	);
}

App.propTypes = {
	children: PropTypes.node.isRequired,
	nav: PropTypes.array.isRequired,
};
