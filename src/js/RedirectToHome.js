import React from 'react'; // eslint-disable-line import/no-unresolved
import { Redirect } from 'react-router-dom'; // eslint-disable-line import/no-unresolved

export default function RedirectToHome() {
	return (
		<Redirect to="/" />
	);
}
