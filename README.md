# Notice: Many conventions, coming soon.
### Not ready for production.
Stay tuned.

# Introduction
**React Conventions** is a set of React components that implement Ambassador's Design and UX patterns. They are designed to be re-usable and composable across large-scale web applications.

## Installation
`$ npm install react-conventions`

## Development
1) Clone the react-conventions repo:
`$ git clone git@github.com:GetAmbassador/react-conventions.git`

2) Move into the project:
`$ cd react-conventions`

3) Install the *git hooks*:
Ask an Ambassador engineer for the directory `git-hooks`

4) Run:
	`$ ln -s ../../git-hooks/prepare-commit-msg .git/hooks/prepare-commit-msg
	$ ln -s ../../git-hooks/pre-push .git/hooks/pre-push`

5) The pre-push hook requires re-initialization of the repo:
`$ git init`

6) Make sure the pre-push hook is executable:
`$ chmod +x .git/hooks/pre-push`

7) Install node packages:
`$ npm install`

8) Run the app:
`$ npm start`

Point your browser to **http://localhost:3000**

## Testing
We use [Enzyme](https://github.com/airbnb/enzyme) JavaScript testing utilities for react.

Each component requires a test to be written with **95**% test coverage.

Run the tests:
`$ npm test`

### Usage
Using Ambassador's react components is very straightforward.

	`import React from 'react';
	import Button from 'react-conventions/lib/Button';

	const MyComponent = () => (
	  <Button />
	);

	export default MyComponent;`

Visit the [React Conventions](http://react-conventions.herokuapp.com) for more examples.

## JavaScript

### ES6 Syntax
- No semi-colons needed for import statements or top-level functions, variables, constants, etc

## CSS

### CSS Modules
- CSS modules, use `baseStyles` for base CSS import and `localStyles` for local CSS import (note: it's plural).

- Ensure that the top-level DOM element has an imported className(style.[CLASSNAME]) to avoid leaks

### Mixins

- Add includes and mixins first in CSS definition eg:

		.component {
			  @include clearfix;
			  padding: 20px 24px;
		}


### Comments

- Only leave comments above selector eg:

		// Good
		.wrapper {
		  padding: 1em;
		}

		.wrapper {
		  padding: 1em; // Bad
		}

### Avoid deeply nested selectors

- In general, try and keep selectors to 3 levels


### Media Query Usage

Nest media-queries at the exact component level eg:

	.content {
	  padding: 1em

	  @media #{$media-small-minus} {
	    padding: 0;
	  }
	}

### Z-Index Usage

We manage z-index layers inside of common _config.scss and utilize the z function found in functions.scss

Apply it any time you need to use a z-index eg:

	.modal {
	  // ...
	  z-index: z('modal');
	}

	.modal-overlay {
	  // ...
	  z-index: z('modal') - 1;
	}

Use this function when defining z-index values. Using it only part of the time makes no sense and pretty much kills the system.

Try to keep the layer map as _light_ as possible. The more layers we add, the more you make your Z scale complex. Try finding a couple of recurring values, map them to generic keywords, and you should be good to go.

Reference: [A Better Solution for Managing z-index with Sass](http://www.sitepoint.com/better-solution-managing-z-index-sass/)

### Release Process
1. Checkout / pull latest master branch
2. Run: `$ npm run build:release`
3. Run: `$ npm version <semantic_version>`
4. Edit `CHANGELOG.md` to reflect changes
5. Review `CHANGELOG.md`
6. Merge pull request
7. Create release on Github
8. Run: `$ npm publish`
9. Ensure new version is published: [https://npmjs.com/react-conventions](https://npmjs.com/react-conventions)
