# React{ions}

[ ![Circle CI Status for GetAmbassador/react-ions](https://circleci.com/gh/GetAmbassador/react-ions.svg?style=shield&circle-token=d8458a09c88aa541c37a7d45b471f48c14cb6a71)](https://circleci.com/)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e8a2a7c1977a4bc480defb75d598d4f1)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=GetAmbassador/react-ions&amp;utm_campaign=Badge_Grade)

**React{ions}** is a suite of React components that implement Ambassador's Design and UX patterns. They are designed to be re-usable and composable across large-scale web applications.

Check out our [documentation site](http://react-ions.herokuapp.com/) for live examples.

## Installation
Ambassador's React{ions} is available as an [npm package](https://npmjs.com/react-ions).

`$ npm install react-ions`

## Prerequisites

React{ions} currently requires React 15.1.0 (support for 15.2+ coming soon).

We use CSS Modules by default to import stylesheets written in SASS. In case you want to import the components already bundled with CSS, your module bundler should be able to require these SASS modules.

## Basic Usage
In this minimal example, we import a Button with styles already bundled:

	import React from 'react'
	import Button from 'react-ions/lib/Button'

	const ExampleButtonDefault = () => (
	  <Button>I am a Button</Button>
	)

	export default ExampleButtonDefault

Live examples and more info [documentation site](http://react-ions.herokuapp.com/components)

## License
This project is licensed under the terms of the [MIT license](LICENSE)

## Release Process
1. Checkout / pull latest master branch
2. Create a new branch (named like `release_v0_0_5`)
3. Run: `$ npm run build:release`
4. Run: `$ npm version <semantic_version> (ex: 0.57.0)`
5. Edit `CHANGELOG.md` to reflect changes since last release
6. Ping someone to review `CHANGELOG.md`
3. Create a pull request for this branch
7. Merge pull request
8. Create release on Github
9. Run: `$ npm publish`
10. Ensure new version is published: [https://npmjs.com/react-ions](https://npmjs.com/react-ions)
