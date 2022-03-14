import React, { useState } from 'react'; // eslint-disable-line import/no-unresolved
import { ReactComponent as CheckIcon } from '../../svg/check.svg';
import { capitalize } from '../Utilities/Helpers';
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

	const onChange = (e) => {
		setAddAnother(e.target.checked);
	};

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
						<li className="formosa-field--label-after" id="crudnick-add-another-wrapper">
							<div className="formosa-input-wrapper formosa-input-wrapper--checkbox">
								<input
									className="formosa-field__input formosa-field__input--checkbox"
									checked={addAnother}
									id="crudnick-add-another"
									onChange={onChange}
									type="checkbox"
								/>
								<CheckIcon className="formosa-icon--check" height={16} width={16} />
								<div className="formosa-label-wrapper formosa-label-wrapper--checkbox">
									<label className="formosa-label" htmlFor="crudnick-add-another">
										{addAnotherText}
									</label>
								</div>
							</div>
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
				<FormComponent {...componentProps} />
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
	titlePrefixText: 'Add ',
};
