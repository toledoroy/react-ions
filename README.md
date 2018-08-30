# React{ions}

[ ![Circle CI Status for GetAmbassador/react-ions](https://circleci.com/gh/GetAmbassador/react-ions.svg?style=shield&circle-token=d8458a09c88aa541c37a7d45b471f48c14cb6a71)](https://circleci.com/)

**React{ions}** is a suite of React components that implement Ambassador's Design and UX patterns. They are designed to be re-usable and composable across large-scale web applications.

Check out our [documentation site](http://reactions.getambassador.com/) for live examples.

## Installation
Ambassador's React{ions} is available as an [npm package](https://npmjs.com/react-ions).

`$ npm install react-ions`

## Prerequisites

React{ions} currently requires React 15.1+.

We use CSS Modules by default to import stylesheets written in SASS. In case you want to import the components already bundled with CSS, your module bundler should be able to require these SASS modules.

## Example Webpack App
Here is an example [React{ions} Webpack app](https://github.com/GetAmbassador/reactions-webpack-example) to get you started.

## Basic Usage
In this minimal example, we import a Button with styles already bundled:

	import React from 'react'
	import Button from 'react-ions/lib/Button'

	<Button>I am a Button</Button>

Live examples and more info [documentation site](http://reactions.getambassador.com/components).

Icons
-----
To limit the number of network requests, this library dynamically generates an `.svg` sprite, to handle our user interfaces. The list of available icons is here: http://reactions.getambassador.com/foundations/iconography.

The list is primarily made up of [Material Icons](https://material.io/icons/). However, there are a few social icons that we have added on our own.

If you've cloned the React:ions library, and wish to add/remove Material icons, or add custom (eg: non-Material) icons, to the sprite, follow the directions below.

### To add a Material Icon to the svg sprite:
- Search for the icon on the [Material Icon](https://material.io/icons/) site.
- Open the master list `/react-ions/src/assets/icons/master-list.js`, and add the icon to the `material` array.
  - The *category* of the icon is needed to construct the path.
  - The *hash* after the path will be the `name` prop as passed into the React:ions `Icon` component.
  - All Material icon names should be prefixed with `md-`.
- Stop and then start the `React-ions` app
- Go to: http://localhost:3000/foundations/iconography and your icon will be visible in the list.

#### To release an icon update
- Run `npm run build:sprite` and commit the changes to a feature branch
- Have someone review, and merge to master
- In the next release, those icons will be available

### To make a Custom Icon available in our apps:
- Follow the instructions for adding a `Material` app, however instead you will add to the `mbsy` array, and include a raw `.svg` file here: `/react-ions/src/assets/icons/svg`.

## License
This project is licensed under the terms of the [MIT license](LICENSE)
