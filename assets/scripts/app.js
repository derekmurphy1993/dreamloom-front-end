'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// const authEvents = require('./auth-scripts/events')
const authEvents = require('./auth/events')
const dreamEvents = require('./dreamlog/events')

$(() => {
  // authEvents.addHandlers()
  authEvents.addHandlers()
  dreamEvents.addHandlers()
})
