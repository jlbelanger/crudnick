import { Alert, Api } from '@jlbelanger/formosa';
import React, { useEffect, useState } from 'react'; // eslint-disable-line import/no-unresolved
import Actions from './Actions';
import { capitalize } from '../Utilities/String';
import Error from './Error';
import { errorMessageText } from '../Utilities/Errors';
import get from 'get-value';
import MetaTitle from './MetaTitle';
import MyForm from './MyForm';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'; // eslint-disable-line import/no-unresolved

export default function EditForm({
	actions,
	apiPath,
	component,
	componentProps,
	extra,
	filterBody,
	filterValues,
	name,
	path,
	relationshipNames,
	saveButtonText,
	singular,
	subpages,
	titlePrefixText,
	transform,
	url,
	...otherProps
}) {
	const { id } = useParams();
	const [row, setRow] = useState(null);
	const [error, setError] = useState(false);
	const [actionError, setActionError] = useState(false);

	useEffect(() => {
		Api.get(url)
			.catch((response) => {
				setError(response);
			})
			.then((response) => {
				if (!response) {
					return;
				}
				if (transform) {
					setRow(transform(response));
				} else {
					setRow(response);
				}
			});
	}, [url]);

	if (error) {
		return (
			<Error error={error} />
		);
	}

	const afterSubmitFailure = (e) => {
		setActionError(errorMessageText(e));
	};

	const FormComponent = component;
	componentProps.formType = 'edit';
	const metaTitle = row ? `${titlePrefixText} ${typeof name === 'function' ? name(row) : get(row, name)}` : '';

	return (
		<>
			<MetaTitle title={metaTitle} />

			<header className="crudnick-header">
				<h1>{`${titlePrefixText} ${singular}`}</h1>
				{row && (
					<Actions
						apiPath={apiPath}
						currentPage="/"
						path={path}
						saveButtonText={saveButtonText}
						row={row}
						setActionError={setActionError}
						singular={singular}
						subpages={subpages}
					>
						{actions ? actions(row, setRow) : null}
					</Actions>
				)}
			</header>

			{actionError && (<Alert type="error">{actionError}</Alert>)}

			{row && (
				<MyForm
					afterSubmitFailure={afterSubmitFailure}
					beforeSubmit={() => { setActionError(false); return true; }}
					filterBody={filterBody}
					filterValues={filterValues}
					htmlId="crudnick-edit-form"
					id={id}
					method="PUT"
					path={apiPath}
					preventEmptyRequest
					relationshipNames={relationshipNames}
					row={row}
					setRow={setRow}
					successToastText={`${capitalize(singular)} saved successfully.`}
					{...otherProps}
				>
					<FormComponent row={row} setRow={setRow} {...componentProps} />
				</MyForm>
			)}

			{row && extra ? extra(row) : null}
		</>
	);
}

EditForm.propTypes = {
	actions: PropTypes.func,
	apiPath: PropTypes.string.isRequired,
	component: PropTypes.func.isRequired,
	componentProps: PropTypes.object,
	extra: PropTypes.func,
	filterBody: PropTypes.func,
	filterValues: PropTypes.func,
	name: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.string,
	]),
	path: PropTypes.string.isRequired,
	relationshipNames: PropTypes.array,
	saveButtonText: PropTypes.string,
	singular: PropTypes.string.isRequired,
	subpages: PropTypes.array,
	titlePrefixText: PropTypes.string,
	transform: PropTypes.func,
	url: PropTypes.string.isRequired,
};

EditForm.defaultProps = {
	actions: null,
	componentProps: {},
	extra: null,
	filterBody: null,
	filterValues: null,
	name: null,
	relationshipNames: [],
	saveButtonText: 'Save',
	subpages: [],
	titlePrefixText: 'Edit',
	transform: null,
};
