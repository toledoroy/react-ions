# Notice: Many conventions, coming soon.
### Not ready for production.
Stay tuned.

# React Conventions
React Conventions is a set of [React](http://facebook.github.io/react/) components that implement [Ambassador's](https://www.getambassador.com) Design and UX patterns.

## Installation


### Pull down the repository

Make sure you `cd` to your favorite directory. Then we'll clone the ambassador-snippet repo:

    $ git clone git@github.com:GetAmbassador/react-conventions.git

Move into the project:

    $ cd react-conventions

### Install Git hooks

    $ ln -s ../../git-hooks/prepare-commit-msg .git/hooks/prepare-commit-msg
    $ ln -s ../../git-hooks/pre-push .git/hooks/pre-push

The `pre-push` hook requires re-initialization of the repo:

    $ git init

Make sure the `pre-push` hook is executable:

    $ chmod +x .git/hooks/pre-push

### Configure your environment

Install Node packages:

    $ npm install

Run the app

    $ npm start

Once the app is installed and running, point your browser to: [http://localhost:3000](http://localhost:3000)

## Testing
```js
npm test
```

## Usage
Using Ambassador's react components is very straightforward.

```js
import React from 'react';
import Button from 'react-conventions/lib/Button';

const MyComponent = () => (
  <Button />
);

export default MyComponent;
```

## Release Process
1. Create release branch & pull request
2. Run: `npm version <semantic_version>`
3. Edit `CHANGELOG.md` to reflect changes
4. Review `CHANGELOG.md`
5. Merge pull request
6. Create release on Github
7. Run: `npm publish`
8. Ensure new version is published https://npmjs.com/react-conventions
