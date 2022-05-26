import { Form, FormosaContext } from '@jlbelanger/formosa';
import React, { useContext } from 'react'; // eslint-disable-line import/no-unresolved
import MyFormPrompt from './MyFormPrompt';
import PropTypes from 'prop-types';

export default function MyForm({ children, showWarningPrompt, ...otherProps }) {
	const { formosaState } = useContext(FormosaContext);

	return (
		<Form {...otherProps}>
			{children}
			{showWarningPrompt && formosaState.showWarningPrompt && <MyFormPrompt />}
		</Form>
	);
}

MyForm.propTypes = {
	children: PropTypes.node.isRequired,
	showWarningPrompt: PropTypes.bool,
};

MyForm.defaultProps = {
	showWarningPrompt: true,
};
