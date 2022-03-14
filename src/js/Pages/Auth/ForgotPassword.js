import { Field, Form, Message, Submit } from '@jlbelanger/formosa';
import React, { useState } from 'react';
import MetaTitle from '../../MetaTitle';
import { NavLink } from 'react-router-dom';

export default function ForgotPassword() {
	const [row, setRow] = useState({});

	return (
		<Form
			className="crudnick-auth-form"
			clearOnSubmit
			method="POST"
			path="auth/forgot-password"
			row={row}
			setRow={setRow}
			showMessage={false}
			successMessageText="If there is an account with this email address, you will receive a password reset email shortly."
		>
			<MetaTitle title="Forgot your password?" />

			<h1>Forgot your password?</h1>

			<Message />

			<Field
				autoComplete="email"
				label="Email"
				name="email"
				required
				type="email"
			/>

			<Submit
				label="Send reset link"
				postfix={(
					<NavLink className="formosa-button crudnick-button--link" to="/">Back to login</NavLink>
				)}
			/>
		</Form>
	);
}
