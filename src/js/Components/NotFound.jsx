import { Alert } from '@jlbelanger/formosa';
import Auth from '../Utilities/Auth.js';

export default function NotFound() {
	if (!Auth.isLoggedIn()) {
		window.location.href = `/?redirect=${encodeURIComponent(`${window.location.pathname}${window.location.search}`)}`;
		return null;
	}

	return (
		<Alert type="error">Page not found.</Alert>
	);
}
