# React{ions}

[ ![Circle CI Status for GetAmbassador/react-ions](https://circleci.com/gh/GetAmbassador/react-ions.svg?style=shield&circle-token=d8458a09c88aa541c37a7d45b471f48c14cb6a71)](https://circleci.com/)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e8a2a7c1977a4bc480defb75d598d4f1)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=GetAmbassador/react-ions&amp;utm_campaign=Badge_Grade)

**React{ions}** is a suite of React components that implement Ambassador's Design and UX patterns. They are designed to be re-usable and composable across large-scale web applications.

Check out our [documentation site](http://reactions.getambassador.com/) for live examples.

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

Live examples and more info [documentation site](http://reactions.getambassador.com/components).

## License
This project is licensed under the terms of the [MIT license](LICENSE)

## Icon License
This project uses [Streamline Icons](http://www.streamlineicons.com/). If you use React{ions} in your project please adhere to the Streamline Icons [license agreement](http://www.streamlineicons.com/license.html).
