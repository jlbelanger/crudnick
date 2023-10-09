import { Alert, Field, Form, FormAlert, Submit } from '@jlbelanger/formosa';
import { Link, useHistory } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-unresolved
import { errorMessageText } from '../../Utilities/Errors';
import MetaTitle from '../../Components/MetaTitle';

export default function ForgotPassword() {
	const history = useHistory();
	const [row, setRow] = useState({});
	const [message, setMessage] = useState(false);

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(history.location.search);
		if (urlSearchParams.get('expired')) {
			setMessage({
				text: 'Error: This link has expired.',
				type: 'error',
			});
			history.replace({ search: '' });
		}
	}, []);

	return (
		<Form
			beforeSubmit={() => { setMessage(false); return true; }}
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
			{message && (<Alert type={message.type}>{message.text}</Alert>)}

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
