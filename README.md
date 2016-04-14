# Notice: Many conventions, coming soon.
### Not ready for production.
Stay tuned.

# React Conventions
React Conventions is a set of [React](http://facebook.github.io/react/) components that implement [Ambassador's](https://www.getambassador.com) Design and UX patterns.

## Installation
```
git clone git@github.com:GetAmbassador/react-conventions.git
cd react-conventions
npm install
npm start
```

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
