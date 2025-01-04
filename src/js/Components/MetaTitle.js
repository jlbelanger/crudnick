import PropTypes from 'prop-types';
import { useEffect } from 'react'; // eslint-disable-line import/no-unresolved

export default function MetaTitle({ title = '' }) {
	useEffect(() => {
		let metaTitle = title;
		if (process.env.REACT_APP_TITLE) {
			if (metaTitle) {
				metaTitle += ' | ';
			}
			metaTitle += process.env.REACT_APP_TITLE;
		}
		document.querySelector('title').innerText = metaTitle;
	}, [title]);

	return null;
}

MetaTitle.propTypes = {
	title: PropTypes.string,
};
