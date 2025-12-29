import { Field, Form, FormAlert, Submit } from '@jlbelanger/formosa';
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import Auth from '../../Utilities/Auth.js';
import { errorMessageText } from '../../Utilities/Errors.js';
import MetaTitle from '../../Components/MetaTitle.jsx';

export default function ResetPassword() {
	const [row, setRow] = useState({});
	const { token } = useParams();
	const [urlSearchParams] = useSearchParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (urlSearchParams.get('expires') < Math.floor(Date.now() / 1000)) {
			navigate('/forgot-password?expired=1');
		}
	}, []);

	if (Auth.isLoggedIn()) {
		return null;
	}

	return (
		<Form
			afterSubmitSuccess={() => {
				navigate('/');
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
