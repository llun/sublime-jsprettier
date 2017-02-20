'use strict'
var getStdin = require('get-stdin')
var prettierStandard = require('prettier-standard-formatter')

getStdin().then(function (data) {
  var scope = process.argv[3]
  try {
    if (scope) {
      prettierStandard.format(data).then(result => {
        process.stdout.write(result)
      })
    }
  } catch (error) {
    throw error
  }
})
