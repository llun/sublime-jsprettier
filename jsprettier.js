'use strict'
const getStdin = require('get-stdin')
var prettierStandard = require('prettier-standard')

getStdin().then(function (data) {
  prettierStandard.format(data).then(process.stdout)
})
