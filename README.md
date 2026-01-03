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
npm install --save https://github.com/jlbelanger/crudnick
```

## Setup

Create a new file `.env` containing the following (but replace the values):

```
VITE_API_URL=https://example.local/api
VITE_FRONTEND_URL=https://example.local
VITE_COOKIE_PREFIX=example
VITE_TITLE="Example"
```

Update `index.html`:

``` html
<!-- Replace: -->
<title>React App</title>

<!-- With: -->
<title>%VITE_TITLE%</title>
```

Create a subfolder in the `src` folder named `Pages` and a subfolder in `Pages` named `Users`. (So in all, you should have `my-app/src/Pages/Users`.)

Create four new files in the `Users` subfolder:

- `my-app/src/Pages/Users/Add.jsx`
- `my-app/src/Pages/Users/Edit.jsx`
- `my-app/src/Pages/Users/Form.jsx`
- `my-app/src/Pages/Users/Index.jsx`

Add the following to `src/Pages/Users/Add.jsx`:

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

Add the following to `src/Pages/Users/Edit.jsx`:

``` jsx
import { EditForm } from '@jlbelanger/crudnick';
import Form from './Form';
import React from 'react';
import { useParams } from 'react-router';

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

Add the following to `src/Pages/Users/Form.jsx`:

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

Add the following to `src/Pages/Users/Index.jsx`:

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
import { ForgotPassword, Login, NotFound, PrivateRoute, ResetPassword } from '@jlbelanger/crudnick';
import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import UserAdd from './Pages/Users/Add';
import UserEdit from './Pages/Users/Edit';
import UserIndex from './Pages/Users/Index';

export default createBrowserRouter(
	[
		{
			path: '/',
			Component: Layout,
			children: [
				{
					index: true,
					Component: Login,
				},
				{
					path: 'forgot-password',
					Component: ForgotPassword,
				},
				{
					path: 'reset-password/:token',
					Component: ResetPassword,
				},
				{
					path: '',
					Component: PrivateRoute,
					children: [
						{
							path: 'users',
							children: [
								{ index: true, Component: UserIndex },
								{ path: 'add', Component: UserAdd },
								{ path: ':id', Component: UserEdit },
							],
						},
					],
				},
				{
					path: '*',
					Component: NotFound,
				},
			],
		},
	],
);
```

Create a new file `src/Layout.jsx` containing the following:

``` jsx
import { Layout as CrudnickLayout } from '@jlbelanger/crudnick';
import { Outlet } from 'react-router';
import React from 'react';

export default function MyLayout() {
	return (
		<CrudnickLayout
			nav={[
				{ label: 'Users', path: '/users' },
			]}
		>
			<Outlet />
		</CrudnickLayout>
	);
}
```

Replace the contents of `src/index.jsx` with the following:

``` jsx
import '@jlbelanger/crudnick/dist/index.css';
import { createRoot } from 'react-dom/client';
import { CrudnickConfig } from '@jlbelanger/crudnick';
import { FormosaConfig } from '@jlbelanger/formosa';
import { RouterProvider } from 'react-router';
import Routes from './Routes';
import { StrictMode } from 'react';

CrudnickConfig.init({
	basePath: import.meta.env.VITE_BASE_PATH,
	cookiePrefix: import.meta.env.VITE_COOKIE_PREFIX,
	frontendUrl: import.meta.env.VITE_FRONTEND_URL,
	siteTitle: import.meta.env.VITE_TITLE,
});

FormosaConfig.init({
	apiPrefix: import.meta.env.VITE_API_URL,
});

const root = createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<RouterProvider router={Routes} />
	</StrictMode>
);
```

In the terminal, still in the `my-app` folder, run the following command:

``` bash
npm start
```

## Examples

- Corrieography: [React app](https://github.com/jlbelanger/corrie-admin) and [Laravel API](https://github.com/jlbelanger/corrie)
- Jenny's Wardrobe: [React app](https://github.com/jlbelanger/wardrobe-admin) and [Laravel API](https://github.com/jlbelanger/wardrobe)

## Development

### Requirements

- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/)

### Setup

``` bash
# Clone the repo
git clone https://github.com/jlbelanger/crudnick.git
cd crudnick

# Install dependencies
npm install
```

### Run

``` bash
npm start
```

### Lint

``` bash
npm run lint
```
