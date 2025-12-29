import { Alert, Api, Field, FormAlert, FormContext, Submit } from '@jlbelanger/formosa';
import { errorMessageText } from '../../Utilities/Errors.js';
import { Link } from 'react-router';
import MetaTitle from '../../Components/MetaTitle.jsx';
import PropTypes from 'prop-types';
import { useContext } from 'react';

export default function LoginForm({
	message = null,
	row,
	setMessage,
	setShowVerificationButton,
	showVerificationButton = false,
}) {
	const { clearAlert } = useContext(FormContext);

	const resendVerificationEmail = () => {
		clearAlert();
		setMessage(null);
		setShowVerificationButton(false);
		const data = {
			username: row.username || showVerificationButton,
		};
		Api.post('auth/resend-verification', JSON.stringify(data))
			.catch((response) => {
				setMessage(errorMessageText(response));
			})
			.then((response) => {
				if (!response) {
					return;
				}
				setMessage({
					text: 'Check your email to continue the registration process.',
					type: 'success',
				});
			});
	};

	return (
		<>
			<MetaTitle title="Login" />

			<h1>Login</h1>

			{message && (<Alert type={message.type}>{message.text}</Alert>)}
			{showVerificationButton && (
				<p className={`formosa-alert formosa-alert--${showVerificationButton === true ? 'error' : 'success'} post-alert-button`}>
					<button className="formosa-button button--secondary" onClick={resendVerificationEmail} type="button">
						Resend verification email
					</button>
				</p>
			)}

			<FormAlert />

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
					<Link className="formosa-button crudnick-button--link" to="/forgot-password">Forgot password?</Link>
				)}
			/>
		</>
	);
}

LoginForm.propTypes = {
	message: PropTypes.object,
	row: PropTypes.object.isRequired,
	setMessage: PropTypes.func.isRequired,
	setShowVerificationButton: PropTypes.func.isRequired,
	showVerificationButton: PropTypes.bool,
};
