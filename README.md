# Crudnick

Crudnick is a framework for creating an admin backend CMS with [React](https://www.npmjs.com/package/react) and [Tapioca](https://github.com/jlbelanger/tapioca).

## Features

- Authentication
	- Login
	- Log out
	- Request password reset
	- Reset password
	- List/add/edit/delete users
- Index pages
	- Search
	- Sort
- Add/edit pages
	- Delete records

## Requirements

- [React](https://www.npmjs.com/package/react) 19+
- [Tapioca](https://github.com/jlbelanger/tapioca) (Laravel API framework)

## Install

**Warning: This package is still a work-in-progress. Use at your own risk.**

In the terminal, run the following commands:

``` bash
npx create-react-app my-app
cd my-app

# With npm:
npm install https://github.com/jlbelanger/crudnick react-router-dom@^5.3.0 --save

# Or with yarn:
yarn add https://github.com/jlbelanger/crudnick react-router-dom@^5.3.0
```

## Setup

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

Add the following to `src/Pages/Users/Add.js`:

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

Add the following to `src/Pages/Users/Edit.js`:

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

Add the following to `src/Pages/Users/Form.js`:

``` jsx
import { Field } from '@jlbelanger/formosa';
import PropTypes from 'prop-types';
import React from 'react';

export default function Form({ formType }) {
	return (
		<div className="formosa-horizontal">
			<Field autoComplete="off" label="Username" name="username" required />
			<Field autoComplete="off" label="Email" name="email" type="email" required />
			<Field autoComplete="off" label="Password" name="password" type="password" required={formType === 'add'} />
		</div>
	);
}

Form.propTypes = {
	formType: PropTypes.string.isRequired,
};
```

Add the following to `src/Pages/Users/Index.js`:

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
			}}
			path="users"
			title="Users"
			url="users?sort=username&fields[users]=username,email"
		/>
	);
}
```

Create a new file `src/Routes.js` containing the following:

``` jsx
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import UserAdd from './Pages/Users/Add';
import UserEdit from './Pages/Users/Edit';
import UserIndex from './Pages/Users/Index';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" />

			<Route exact path="/users"><UserIndex /></Route>
			<Route exact path="/users/add"><UserAdd /></Route>
			<Route exact path="/users/:id(\d+)"><UserEdit /></Route>

			<Route>Page not found.</Route>
		</Switch>
	);
}
```

Replace the contents of `src/index.js` with the following:

``` jsx
import '@jlbelanger/crudnick/dist/index.css';
import { App } from '@jlbelanger/crudnick';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App
			nav={[
				{ label: 'Users', path: '/users' },
			]}
		>
			<Routes />
		</App>
	</React.StrictMode>
);
```

In the terminal, still in the `my-app` folder, run the following command:

``` bash
# With npm:
npm start

# Or with yarn:
yarn start
```

## Examples

- Corrieography: [React app](https://github.com/jlbelanger/corrie-admin) and [Laravel API](https://github.com/jlbelanger/corrie)
- Jenny's Wardrobe: [React app](https://github.com/jlbelanger/wardrobe-admin) and [Laravel API](https://github.com/jlbelanger/wardrobe)

## Development

### Requirements

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

### Setup

``` bash
# Clone the repo
git clone https://github.com/jlbelanger/crudnick.git
cd crudnick

# Install dependencies
yarn install
```

### Run

``` bash
yarn start
```

### Lint

``` bash
yarn lint
```
