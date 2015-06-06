# color-conversions [![Build Status](https://travis-ci.org/andrepolischuk/color-conversions.svg?branch=master)](https://travis-ci.org/andrepolischuk/color-conversions)

  > Color conversion functions

## Install

```sh
npm install --save color-conversions
```

```sh
component install andrepolischuk/color-conversions
```

## Usage

```js
var conversions = require('color-conversions');

conversions.hex2rgb('fff'); // [255, 255, 255]
conversions.hsl2cmyk(60, 100, 50, 0); // [0, 0, 100, 0]
conversions.keyword2hsv('red'); // [0, 100, 100]
```

## API

  Module has two-way conversion functions for color models:

  * RGB
  * Keyword
  * HEX
  * CMYK
  * HSL
  * HSV

## License

  MIT
