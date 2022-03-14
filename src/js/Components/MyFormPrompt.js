import React, { useContext } from 'react'; // eslint-disable-line import/no-unresolved
import { FormContext } from '@jlbelanger/formosa';
import { Prompt } from 'react-router-dom'; // eslint-disable-line import/no-unresolved

export default function MyFormPrompt() {
	const { formState } = useContext(FormContext);
	return (
		<Prompt
			when={formState.dirty.length > 0}
			message="You have unsaved changes. Are you sure you want to leave this page?"
		/>
	);
}
