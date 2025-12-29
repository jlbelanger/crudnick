import CrudnickConfig from '../Utilities/Config.js';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function MetaTitle({ title = '' }) {
	useEffect(() => {
		let metaTitle = title;
		const siteTitle = CrudnickConfig.get('siteTitle');
		if (siteTitle) {
			if (metaTitle) {
				metaTitle += ' | ';
			}
			metaTitle += siteTitle;
		}
		document.querySelector('title').innerText = metaTitle;
	}, [title]);

	return null;
}

MetaTitle.propTypes = {
	title: PropTypes.string,
};
