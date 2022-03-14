import { Form } from '@jlbelanger/formosa';
import MyFormPrompt from './MyFormPrompt';
import PropTypes from 'prop-types';
import React from 'react'; // eslint-disable-line import/no-unresolved

export default function MyForm({ children, checkForUnsavedChanges, ...otherProps }) {
	return (
		<Form {...otherProps}>
			{children}
			{checkForUnsavedChanges && <MyFormPrompt />}
		</Form>
	);
}

MyForm.propTypes = {
	checkForUnsavedChanges: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

MyForm.defaultProps = {
	checkForUnsavedChanges: true,
};
