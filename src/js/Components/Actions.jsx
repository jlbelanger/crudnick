import { Api, FormosaContext } from '@jlbelanger/formosa';
import { NavLink, useNavigate } from 'react-router';
import { useContext, useEffect, useRef, useState } from 'react';
import { capitalize } from '../Utilities/String.js';
import CrudnickConfig from '../Utilities/Config.js';
import { errorMessageText } from '../Utilities/Errors.js';
import Modal from './Modal.jsx';
import PropTypes from 'prop-types';

export default function Actions({
	apiPath,
	children = null,
	currentPage,
	path,
	row = null,
	saveButtonText = 'Save',
	setActionError = null,
	showDelete = true,
	showSave = true,
	singular,
	subpages = [],
}) {
	const navigate = useNavigate();
	const { addToast, disableWarningPrompt, enableWarningPrompt } = useContext(FormosaContext);
	const [showModal, setShowModal] = useState(false);
	const submitRef = useRef(null);

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

	const onDelete = () => {
		setShowModal(false);
		disableWarningPrompt();

		Api.delete(`${apiPath}/${row.id}`)
			.catch((response) => {
				if (setActionError) {
					setActionError(errorMessageText(response));
				} else {
					addToast(errorMessageText(response), 'error', 10000);
				}
				enableWarningPrompt();
			})
			.then((response) => {
				if (!response) {
					return;
				}
				addToast(`${capitalize(singular)} deleted successfully.`, 'success');
				navigate(`/${path}`);
				enableWarningPrompt();
			});
	};

	const frontendUrl = CrudnickConfig.get('frontendUrl');

	return (
		<ul className="crudnick-list">
			{showSave && (
				<li>
					<button
						className="crudnick-list__button formosa-button"
						data-cy="save"
						form="crudnick-edit-form"
						ref={submitRef}
						type="submit"
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
			{showDelete && (
				<li>
					<button
						className="crudnick-list__button formosa-button formosa-button--danger"
						data-cy="delete"
						onClick={(e) => {
							if (setActionError) {
								setActionError(false);
							}
							setShowModal(e);
						}}
						type="button"
					>
						Delete
					</button>
					{showModal && (
						<Modal
							event={showModal}
							okButtonAttributes={{ 'data-cy': 'modal-delete' }}
							okButtonClass="formosa-button--danger"
							okButtonText="Delete"
							onClickCancel={() => {
								setShowModal(false);
							}}
							onClickOk={onDelete}
							text={`Are you sure you want to delete this ${singular}?`}
						/>
					)}
				</li>
			)}
			{frontendUrl && row.url && (
				<li>
					<a
						className="crudnick-list__button formosa-button crudnick-button--secondary"
						href={`${frontendUrl}${row.url}`}
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
	row: PropTypes.object,
	saveButtonText: PropTypes.string,
	setActionError: PropTypes.func,
	showDelete: PropTypes.bool,
	showSave: PropTypes.bool,
	singular: PropTypes.string.isRequired,
	subpages: PropTypes.array,
};
