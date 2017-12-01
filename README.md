![isc](https://img.shields.io/badge/license-ISC-lightgrey.svg?style=flat-square)
[![style](https://img.shields.io/badge/code%20style-semistandard-lightgrey.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![npm](https://img.shields.io/npm/v/@polkadot/util.svg?style=flat-square)](https://www.npmjs.com/package/@polkadot/util)
[![travis](https://img.shields.io/travis/polkadot-js/util.svg?style=flat-square)](https://travis-ci.org/polkadot-js/util)
[![maintainability](https://img.shields.io/codeclimate/maintainability/polkadot-js/util.svg?style=flat-square)](https://codeclimate.com/github/polkadot-js/util/maintainability)
[![coverage](https://img.shields.io/coveralls/polkadot-js/util.svg?style=flat-square)](https://coveralls.io/github/polkadot-js/util?branch=master)
[![greenkeeper](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io/)
[![dependency](https://img.shields.io/david/polkadot-js/util.svg?style=flat-square)](https://david-dm.org/polkadot-js/util)
[![devDependency](https://img.shields.io/david/dev/polkadot-js/util.svg?style=flat-square)](https://david-dm.org/polkadot-js/util#info=devDependencies)

# @polkadot/util

Various useful utility functions that are used across all projects in the [@polkadot](https://polkadot.js.org) namespace. It provides utility functions with additional safety checks, allowing not only for consistent coding, but also reducing the general boilerplate.

## Usage

Installation -

```
npm install --save @polkadot/util
```

Functions can be imported directly from the package, e.g.

```js
import { isHex } from '@polkadot/util';
```

Alternatively the function can be accessed directly,

```js
import isHex from '@polkadot/util/is/hex';
```

## Available Utilities

For a list of currently exposed methods, see the [library documentation](docs/README.md).
