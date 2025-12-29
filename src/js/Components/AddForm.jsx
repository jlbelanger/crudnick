import { useEffect, useRef, useState } from 'react';
import { capitalize } from '../Utilities/String.js';
import { errorMessageText } from '../Utilities/Errors.js';
import { Field } from '@jlbelanger/formosa';
import MetaTitle from './MetaTitle.jsx';
import MyForm from './MyForm.jsx';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

export default function AddForm({
	addAnotherText = 'Add another',
	apiPath,
	component,
	componentProps = {},
	defaultRow = {},
	extra = null,
	filterBody = null,
	filterValues = null,
	path,
	relationshipNames = [],
	saveButtonText = 'Save',
	showAddAnother = true,
	singular,
	titlePrefixText = 'Add',
	...otherProps
}) {
	const [row, setRow] = useState(defaultRow);
	const [addAnother, setAddAnother] = useState(false);
	const navigate = useNavigate();
	const submitRef = useRef(null);

	const afterSubmitSuccess = (response) => {
		if (!addAnother) {
			navigate(`/${path}/${response.id}`);
		}
	};

	const FormComponent = component;
	componentProps.formType = 'add';

	const onKeyDown = (e) => {
		if (e.key === 's' && e.metaKey && submitRef && submitRef.current) {
			e.preventDefault();
			submitRef.current.click();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, []);

	return (
		<>
			<MetaTitle title={`${titlePrefixText} ${singular}`} />

			<header className="crudnick-header">
				<h1 data-cy="title">{`${titlePrefixText} ${singular}`}</h1>
				<ul className="crudnick-list">
					<li>
						<button
							className="formosa-button"
							data-cy="save"
							form="crudnick-add-form"
							ref={submitRef}
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
				afterSubmitSuccess={afterSubmitSuccess}
				clearOnSubmit
				defaultRow={defaultRow}
				errorMessageText={errorMessageText}
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
