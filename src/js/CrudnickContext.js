import React from 'react'; // eslint-disable-line import/no-unresolved

export default React.createContext(
	{
		checkForUnsaveChanges: true,
		setCheckForUnsavedChanges: null,
	}
);
