import React, { useState } from 'react'; // eslint-disable-line import/no-unresolved
import { capitalize } from '../Utilities/Helpers';
import { Field } from '@jlbelanger/formosa';
import MetaTitle from '../MetaTitle';
import MyForm from './MyForm';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'; // eslint-disable-line import/no-unresolved

export default function AddForm({
	addAnotherText,
	apiPath,
	component,
	componentProps,
	defaultRow,
	extra,
	filterBody,
	filterValues,
	path,
	relationshipNames,
	saveButtonText,
	showAddAnother,
	singular,
	titlePrefixText,
	...otherProps
}) {
	const [row, setRow] = useState(defaultRow);
	const [addAnother, setAddAnother] = useState(false);
	const history = useHistory();

	const afterSubmit = (response) => {
		if (!addAnother) {
			history.push(`/${path}/${response.id}`);
		}
	};

	const FormComponent = component;
	componentProps.formType = 'add';

	return (
		<>
			<MetaTitle title={`${titlePrefixText} ${singular}`} />

			<header className="crudnick-header">
				<h1>{`${titlePrefixText} ${singular}`}</h1>
				<ul className="crudnick-list">
					<li>
						<button
							className="formosa-button"
							form="crudnick-add-form"
							type="submit"
						>
							{saveButtonText}
						</button>
					</li>
					{showAddAnother && (
						<li>
							<Field
								id="crudnick-add-another"
								label={addAnotherText}
								labelPosition="after"
								setValue={setAddAnother}
								type="checkbox"
								value={addAnother}
							/>
						</li>
					)}
				</ul>
			</header>

			<MyForm
				afterSubmit={afterSubmit}
				clearOnSubmit
				defaultRow={defaultRow}
				filterBody={filterBody}
				filterValues={filterValues}
				htmlId="crudnick-add-form"
				method="POST"
				path={apiPath}
				preventEmptyRequest
				relationshipNames={relationshipNames}
				row={row}
				setRow={setRow}
				successToastText={`${capitalize(singular)} added successfully.`}
				{...otherProps}
			>
				<FormComponent row={row} setRow={setRow} {...componentProps} />
			</MyForm>

			{extra ? extra(row) : null}
		</>
	);
}

AddForm.propTypes = {
	addAnotherText: PropTypes.string,
	apiPath: PropTypes.string.isRequired,
	component: PropTypes.func.isRequired,
	componentProps: PropTypes.object,
	defaultRow: PropTypes.object,
	extra: PropTypes.func,
	filterBody: PropTypes.func,
	filterValues: PropTypes.func,
	path: PropTypes.string.isRequired,
	relationshipNames: PropTypes.array,
	saveButtonText: PropTypes.string,
	showAddAnother: PropTypes.bool,
	singular: PropTypes.string.isRequired,
	titlePrefixText: PropTypes.string,
};

AddForm.defaultProps = {
	addAnotherText: 'Add another',
	componentProps: {},
	defaultRow: {},
	extra: null,
	filterBody: null,
	filterValues: null,
	relationshipNames: [],
	saveButtonText: 'Save',
	showAddAnother: true,
	titlePrefixText: 'Add',
};
