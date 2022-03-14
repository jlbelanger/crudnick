import PropTypes from 'prop-types';
import { useEffect } from 'react';

export default function MetaTitle({ title }) {
	useEffect(() => {
		let metaTitle = title;
		if (process.env.REACT_APP_TITLE) {
			if (metaTitle) {
				metaTitle += ' | ';
			}
			metaTitle += process.env.REACT_APP_TITLE;
		}
		document.querySelector('title').innerText = metaTitle;
		return () => {};
	}, [title]);

	return null;
}

MetaTitle.propTypes = {
	title: PropTypes.string,
};

MetaTitle.defaultProps = {
	title: '',
};
