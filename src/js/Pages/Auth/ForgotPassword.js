import { Field, Form, FormAlert, Submit } from '@jlbelanger/formosa';
import React, { useState } from 'react'; // eslint-disable-line import/no-unresolved
import { errorMessageText } from '../../Utilities/Errors';
import { Link } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import MetaTitle from '../../Components/MetaTitle';

export default function ForgotPassword() {
	const [row, setRow] = useState({});

	return (
		<Form
			className="crudnick-auth-form"
			clearOnSubmit
			errorMessageText={errorMessageText}
			method="POST"
			path="auth/forgot-password"
			row={row}
			setRow={setRow}
			showMessage={false}
			successMessageText="If there is an account with this email address, you will receive a password reset email shortly."
		>
			<MetaTitle title="Forgot your password?" />

			<h1>Forgot your password?</h1>

			<FormAlert />

			<Field
				autoComplete="email"
				label="Email"
				name="email"
				required
				type="email"
			/>

			<Submit
				label="Send link"
				postfix={(
					<Link className="formosa-button crudnick-button--link" to="/">Back to login</Link>
				)}
			/>
		</Form>
	);
}
