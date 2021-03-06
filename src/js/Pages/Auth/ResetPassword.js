import { Field, Form, Message, Submit } from '@jlbelanger/formosa';
import React, { useState } from 'react'; // eslint-disable-line import/no-unresolved
import { useHistory, useParams } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import MetaTitle from '../../MetaTitle';

export default function ResetPassword() {
	const [row, setRow] = useState({});
	const { token } = useParams();
	const history = useHistory();

	return (
		<Form
			afterSubmit={() => {
				history.push('/');
			}}
			className="crudnick-auth-form"
			method="PUT"
			path={`auth/reset-password/${token}`}
			row={row}
			setRow={setRow}
			showMessage={false}
			successToastText="Password reset successfully."
		>
			<MetaTitle title="Reset password" />

			<h1>Reset password</h1>

			<Message />

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
