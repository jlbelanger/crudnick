import { Field, Form, FormAlert, Submit } from '@jlbelanger/formosa';
import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-unresolved
import { useHistory, useParams } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import { errorMessageText } from '../../Utilities/Errors';
import MetaTitle from '../../Components/MetaTitle';

export default function ResetPassword() {
	const [row, setRow] = useState({});
	const { token } = useParams();
	const history = useHistory();

	useEffect(() => {
		const urlSearchParams = new URLSearchParams(history.location.search);
		if (urlSearchParams.get('expires') < Math.floor(Date.now() / 1000)) {
			history.push('/?expired=1');
		}
	}, []);

	return (
		<Form
			afterSubmitSuccess={() => {
				history.push('/');
			}}
			className="crudnick-auth-form"
			errorMessageText={errorMessageText}
			method="PUT"
			path={`auth/reset-password/${token}${window.location.search}`}
			row={row}
			setRow={setRow}
			showMessage={false}
			successToastText="Password reset successfully."
		>
			<MetaTitle title="Reset password" />

			<h1>Reset password</h1>

			<FormAlert />

			<Field
				autoComplete="email"
				label="Email"
				name="email"
				required
				type="email"
			/>

			<Field
				autoComplete="new-password"
				label="New password"
				name="new_password"
				required
				type="password"
			/>

			<Field
				autoComplete="new-password"
				label="Confirm new password"
				name="new_password_confirmation"
				required
				type="password"
			/>

			<Submit label="Reset password" />
		</Form>
	);
}
