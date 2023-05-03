import { Api, FormosaContext } from '@jlbelanger/formosa';
import { NavLink, useHistory } from 'react-router-dom'; // eslint-disable-line import/no-unresolved
import React, { useContext, useState } from 'react'; // eslint-disable-line import/no-unresolved
import { capitalize } from '../Utilities/Helpers';
import Modal from './Modal';
import PropTypes from 'prop-types';

export default function Actions({
	apiPath,
	children,
	currentPage,
	path,
	row,
	saveButtonText,
	showSave,
	singular,
	subpages,
}) {
	const history = useHistory();
	const { addToast, disableWarningPrompt, enableWarningPrompt } = useContext(FormosaContext);
	const [showModal, setShowModal] = useState(false);

	const onDelete = () => {
		setShowModal(false);
		disableWarningPrompt();

		Api.delete(`${apiPath}/${row.id}`)
			.then(() => {
				addToast(`${capitalize(singular)} deleted successfully.`, 'success');
				history.push(`/${path}`);
				enableWarningPrompt();
			})
			.catch((response) => {
				const text = response.message ? response.message : response.errors.map((err) => (err.title)).join(' ');
				addToast(text, 'error', 10000);
				enableWarningPrompt();
			});
	};

	return (
		<ul className="crudnick-list">
			{showSave && (
				<li>
					<button
						className="crudnick-list__button formosa-button"
						type="submit"
						form="crudnick-edit-form"
					>
						{saveButtonText}
					</button>
				</li>
			)}
			{currentPage !== '/' && (
				<li>
					<NavLink className="crudnick-list__button formosa-button" to={`/${path}/${row.id}`}>Edit</NavLink>
				</li>
			)}
			<li>
				<button
					className="crudnick-list__button formosa-button formosa-button--danger"
					onClick={(e) => {
						setShowModal(e);
					}}
					type="button"
				>
					Delete
				</button>
				{showModal && (
					<Modal
						event={showModal}
						okButtonClass="formosa-button--danger"
						okButtonText="Delete"
						onClickOk={onDelete}
						onClickCancel={() => {
							setShowModal(false);
						}}
						text={`Are you sure you want to delete this ${singular}?`}
					/>
				)}
			</li>
			{process.env.REACT_APP_FRONTEND_URL && row.url && (
				<li>
					<a
						className="crudnick-list__button formosa-button crudnick-button--secondary"
						href={`${process.env.REACT_APP_FRONTEND_URL}${row.url}`}
						rel="noreferrer"
						target="_blank"
					>
						View
					</a>
				</li>
			)}
			{subpages.map((page) => (
				<li key={page}>
					<NavLink
						className="crudnick-list__button formosa-button crudnick-button--secondary"
						to={`/${path}/${row.id}/${page.toLowerCase()}`}
					>
						{page}
					</NavLink>
				</li>
			))}
			{children}
		</ul>
	);
}

Actions.propTypes = {
	apiPath: PropTypes.string.isRequired,
	children: PropTypes.node,
	currentPage: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
	saveButtonText: PropTypes.string,
	row: PropTypes.object,
	showSave: PropTypes.bool,
	singular: PropTypes.string.isRequired,
	subpages: PropTypes.array,
};

Actions.defaultProps = {
	children: null,
	row: null,
	saveButtonText: 'Save',
	showSave: true,
	subpages: [],
};
