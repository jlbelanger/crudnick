import { Field, Form, Message, Submit } from '@jlbelanger/formosa';
import React, { useState } from 'react'; // eslint-disable-line import/no-unresolved
import Auth from '../../Utilities/Auth';
import { Link } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import MetaTitle from '../../MetaTitle';

export default function Login() {
	const [row, setRow] = useState({});

	const afterSubmit = (response) => {
		Auth.login(response.user, response.token, response.remember);
		window.location.reload();
	};

	return (
		<Form
			afterSubmit={afterSubmit}
			className="crudnick-auth-form"
			method="POST"
			path="auth/login"
			row={row}
			setRow={setRow}
			showMessage={false}
		>
			<MetaTitle title="Login" />

			<h1>Login</h1>

			<Message />

			<Field
				autoCapitalize="none"
				autoComplete="username"
				label="Username"
				name="username"
				required
				type="text"
			/>

			<Field
				autoComplete="current-password"
				label="Password"
				name="password"
				required
				type="password"
			/>

			<Field
				label="Remember me"
				labelPosition="after"
				name="remember"
				type="checkbox"
			/>

			<Submit
				label="Log in"
				postfix={(
					<Link className="formosa-button crudnick-button--link" to="/forgot-password">Forgot your password?</Link>
				)}
			/>
		</Form>
	);
}
