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
    .catch(ui.onSignupFailure)
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

  api.getDream()
    .then(ui.onGetDreamSuccess)
    .catch(console.error())
}

// const onSignIn = event => {
//   event.preventDefault()
//
//   const form = event.target // form that was submited
//   const formData = getFormFields(form)
//
//   api.signIn(formData)
//     .then(ui.onSigninSuccess)
//     .catch(ui.onSigninFailure)
// }

// const onChangePassword = event => {
//   event.preventDefault()
//
//   const form = event.target
//   const formData = getFormFields(form)
//
//   api.changePassword(formData)
//     .then(ui.onChangePasswordSuccess)
//     .catch(ui.onChangePasswordFailure)
// }

// to steamline the module.exports
const addHandlers = event => {
  $('#new-dream').on('submit', onNewDream)
  $('#get-dreams').on('click', onGetDreams)
  $('#view-dream').on('click', onGetDream)
}

// is game over

module.exports = {
  addHandlers
}
