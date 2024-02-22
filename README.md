# funcs

> [!IMPORTANT]
> The docs are currently under development and will be updated in the next version.

[![libraries dependency status][libraries-status-image]][libraries-status-url]
[![libraries sourcerank][libraries-sourcerank-image]][libraries-sourcerank-url]
[![Release date][release-date-image]][release-url]
[![npm license][license-image]][download-url]

## Install

[![NPM version][npm-image]][npm-url]
[![NPM bundle size][npm-bundle-size-image]][npm-url]
[![npm download][download-image]][download-url]

```shell
# via npm
$ npm install @khaidev1012/funcs --save

# via yarn
$ yarn add @khaidev1012/funcs
```

## Usage

```javascript
import { getBytes } from "@khaidev1012/funcs";
// or const { getBytes } = require('@khaidev1012/funcs');

console.log(getBytes(1024)); // 1.00 KB
```

## Functions

- `duration`
- `fetchWithTimeout`
- `firstUpperCase`
- `formatTimeMs`
- `getBytes`
- `getMemory`
- `hexToInt`
- `hexToRgb`
- `intToHex`
- `isArray`
- `isBoolean`
- `isFunction`
- `isNull`
- `isNumber`
- `isObject`
- `isPromise`
- `isString`
- `isUndefined`
- `isUrl`
- `percentage`
- `randomInt`
- `randomKey`
- `readFiles`
- `rgbToHex`
- `shuffle`
- `wait`

## Classes

- `Timer`

<!-- Links: -->

[npm-image]: https://img.shields.io/npm/v/@khaidev1012/funcs
[npm-url]: https://npmjs.org/package/@khaidev1012/funcs
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/min/@khaidev1012/funcs
[download-image]: https://img.shields.io/npm/dt/@khaidev1012/funcs
[download-url]: https://npmjs.org/package/@khaidev1012/funcs
[libraries-status-image]: https://img.shields.io/librariesio/release/npm/@khaidev1012/funcs
[libraries-sourcerank-image]: https://img.shields.io/librariesio/sourcerank/npm/@khaidev1012/funcs
[libraries-status-url]: https://libraries.io/github/TruongDuyKhai/funcs
[libraries-sourcerank-url]: https://libraries.io/npm/@khaidev1012%2Ffuncs
[release-date-image]: https://img.shields.io/github/release-date/TruongDuyKhai/funcs
[release-url]: https://github.com/TruongDuyKhai/funcs/releases
[license-image]: https://img.shields.io/npm/l/@khaidev1012/funcs
