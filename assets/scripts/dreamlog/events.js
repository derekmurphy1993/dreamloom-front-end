'use strict'
// HANDLES EVENTS
// const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

// New Dream Log new-dream
const onNewDream = event => {
  event.preventDefault()

  const form = event.target // form that was submited
  const formData = getFormFields(form) // get that form and run it

  api.newDream(formData)
    .then(ui.onSignupSuccess)
    .then(function (data) {
      onGetDreams(event)
    })
    .catch(console.error)
}

// Get all the dreams
const onGetDreams = (event) => {
  event.preventDefault()

  api.getDreams()
    .then(ui.onGetDreamsSuccess)
    .catch(ui.onGetDreamsFailure)
}

const onGetDream = event => {
  event.preventDefault()
  api.getDream($(event.target).data('id')) // puts the event.targets data id as param
    .then(ui.onGetDreamSuccess)
    .catch(console.error())
}

const onDelete = (event) => {
  event.preventDefault()
  api.deleteDream($(event.target).data('id')) // puts the event.targets data id as param
    .then(function (data) {
      onGetDreams(event)
    })
    .catch(console.error)
}

// to steamline the module.exports
const addHandlers = event => {
  $('#new-dream').on('submit', onNewDream)
  $('#get-dreams').on('click', onGetDreams)
  $('#dreams-content').on('click', '.read', onGetDream)
  $('#dreams-content').on('click', '.delete', onDelete)
}

// is game over

module.exports = {
  addHandlers
}