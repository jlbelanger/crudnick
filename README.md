# Crudnick

Crudnick is a framework for creating an admin backend CMS with React and [Laravel JSON API](https://github.com/jlbelanger/laravel-json-api).

## Setup

In the terminal, run the following commands:

``` sh
npx create-react-app my-app
cd my-app

# With npm:
npm install @jlbelanger/crudnick react-router-dom@^5.3.0 --save

# Or with yarn:
yarn add @jlbelanger/crudnick react-router-dom@^5.3.0
```

Replace the contents of `src/index.js` with the following:

``` jsx
import '@jlbelanger/crudnick/dist/index.css';
import { App } from '@jlbelanger/crudnick';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

ReactDOM.render(
	<React.StrictMode>
		<App
			nav={[
				{ label: 'Users', path: '/users' },
			]}
		>
			<Routes />
		</App>
	</React.StrictMode>,
	document.getElementById('root')
);
```

Create a new file `src/Routes.js` containing the following:

``` jsx
import { Route } from 'react-router-dom';
import UserAdd from './Pages/Users/Add';
import UserEdit from './Pages/Users/Edit';
import UserIndex from './Pages/Users/Index';

export default function Routes() {
	return (
		<>
			<Route exact path="/users" component={UserIndex} />
			<Route exact path="/users/add" component={UserAdd} />
			<Route exact path="/users/:id(\d+)" component={UserEdit} />
		</>
	);
}
```

Create a new file `.env` containing the following (but replace the values):

```
REACT_APP_API_URL=https://example.local/api
REACT_APP_FRONTEND_URL=https://example.local
REACT_APP_COOKIE_PREFIX=example
REACT_APP_TITLE="Example"
```

Update `public/index.html`:

``` html
<!-- Replace: -->
<title>React App</title>

<!-- With: -->
<title>%REACT_APP_TITLE%</title>
```

Create a subfolder in the `src` folder named `Pages` and a subfolder in `Pages` named `Users`. (So in all, you should have `my-app/src/Pages/Users`.)

Create four new files in the `Users` subfolder:

- `my-app/src/Pages/Users/Add.js`
- `my-app/src/Pages/Users/Edit.js`
- `my-app/src/Pages/Users/Form.js`
- `my-app/src/Pages/Users/Index.js`

Add the following to `Add.js`:

``` jsx
import { AddForm } from '@jlbelanger/crudnick';
import Form from './Form';
import React from 'react';

export default function Add() {
	return (
		<AddForm
			apiPath="users"
			component={Form}
			path="users"
			singular="user"
		/>
	);
}
```

Add the following to `Edit.js`:

``` jsx
import { EditForm } from '@jlbelanger/crudnick';
import Form from './Form';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Edit() {
	const { id } = useParams();

	return (
		<EditForm
			apiPath="users"
			component={Form}
			name="username"
			path="users"
			singular="user"
			url={`users/${id}`}
		/>
	);
}
```

Add the following to `Form.js`:

``` jsx
import { Field } from '@jlbelanger/formosa';
import PropTypes from 'prop-types';
import React from 'react';

export default function Form({ formType }) {
	return (
		<div className="formosa-horizontal">
			<Field label="Username" name="username" required />
			<Field label="Email" name="email" type="email" required />
			<Field label="Password" name="password" type="password" required={formType === 'add'} />
		</div>
	);
}

Form.propTypes = {
	formType: PropTypes.string.isRequired,
};
```

Add the following to `Index.js`:

``` jsx
import { IndexTable } from '@jlbelanger/crudnick';
import React from 'react';

export default function Index() {
	return (
		<IndexTable
			columns={[
				{
					key: 'username',
					label: 'Username',
					link: true,
				},
				{
					key: 'email',
					label: 'Email',
				},
			]}
			defaultOptions={{
				sortKey: 'username',
				sortDir: 'asc',
				filters: {},
			}}
			path="users"
			title="Users"
			url="users?sort=username&fields[users]=username,email"
		/>
	);
}
```

In the terminal, still in the `my-app` folder, run the following command:

``` sh
# With npm:
npm start

# Or with yarn:
yarn start
```

You should now have the following basic functionality:

- login
- request password reset
- reset password
- log out
- list/add/edit/delete users
