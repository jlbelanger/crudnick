import { Redirect, Route, Switch, useLocation } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import ForgotPassword from './Pages/Auth/ForgotPassword';
import Login from './Pages/Auth/Login';
import React from 'react'; // eslint-disable-line import/no-unresolved
import ResetPassword from './Pages/Auth/ResetPassword';

export default function Routes() {
	const location = useLocation();

	return (
		<Switch>
			<Route exact path="/"><Login /></Route>
			<Route exact path="/forgot-password"><ForgotPassword /></Route>
			<Route exact path="/reset-password/:token"><ResetPassword /></Route>
			<Route><Redirect to={`/?redirect=${encodeURIComponent(`${process.env.PUBLIC_URL}${location.pathname}${location.search}`)}`} /></Route>
		</Switch>
	);
}
