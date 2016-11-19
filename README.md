megasena-result
=====

A module to generate lottery to help you win the lottery.


[![Build Status](https://travis-ci.org/IanRamosC/megasena-result.svg?branch=master)](https://travis-ci.org/IanRamosC/megasena-result)

### Installation

```sh
$ npm install megasena-result
```

### Usage

```sh
$ megasena-result
$ // 01, 05, 19, 30, 48, 57
$ megasena-result 9
$ // 01, 05, 11, 19, 23, 30, 36, 48, 57
```

or NodeJS

```js
import megasena from 'megasena-result'

megasena()
// [01, 05, 19, 30, 48, 57]

megasena(9, true)
// "01, 05, 11, 19, 23, 30, 36, 48, 57"


```

### License

[MIT](https://github.com/ianramosc/megasena-result/blob/master/LICENSE) © Ian Ramos
