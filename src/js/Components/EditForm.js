import React, { useEffect, useState } from 'react';
import Actions from './Actions';
import { Api } from '@jlbelanger/formosa';
import get from 'get-value';
import MetaTitle from '../MetaTitle';
import MyForm from './MyForm';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getErrorMessage } from '../Utilities/Helpers';

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

	useEffect(() => {
		Api.get(url)
			.then((response) => {
				setError(null);
				if (transform) {
					setRow(transform(response));
				} else {
					setRow(response);
				}
			})
			.catch((response) => {
				setError(response);
				setRow(null);
			});
		return () => {};
	}, [id]);

	const FormComponent = component;
	componentProps.formType = 'edit';
	const metaTitle = row ? `${titlePrefixText} ${get(row, name)}` : null;

	return (
		<>
			<MetaTitle title={metaTitle} />

			<header className="crudnick-header">
				<h1>{`${titlePrefixText} ${singular}`}</h1>
				{row && <Actions
					apiPath={apiPath}
					currentPage="/"
					path={path}
					saveButtonText={saveButtonText}
					row={row}
					setRow={setRow}
					subpages={subpages}
				>
					{actions ? actions(row, setRow) : null}
				</Actions>}
			</header>

			{error && <div className="formosa-message formosa-message--error">{getErrorMessage(error)}</div>}

			{row && <MyForm
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
				successToastText={`${singular} saved successfully.`}
				{...otherProps}
			>
				<FormComponent row={row} setRow={setRow} {...componentProps} />
			</MyForm>}

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
	name: PropTypes.string,
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
	titlePrefixText: 'Edit ',
	transform: null,
};
