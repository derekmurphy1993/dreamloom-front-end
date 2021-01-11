'use strict'
// HANDLES EVENTS
// const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const dream = require('../dreamlog/api')

// API SIGN IN
const onSignUp = event => {
  event.preventDefault()

  const form = event.target // form that was submited
  const formData = getFormFields(form) // get that form and run it

  api.signUp(formData)
    .then(ui.onSignupSuccess)
    .catch(ui.onSignupFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target // form that was submited
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.onSigninSuccess)
    .catch(ui.onSigninFailure)
}

const onSettings = event => {
  event.preventDefault()
  ui.onSettingsSuccess()
}

const onChangePassword = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  // leaving out form data bc we arnt submiting data
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const demodata = {
  dream: {
    body: 'sup',
    date: '2021-01-11',
    mood: 'Tired'
  }
}

const onDemoLogin = () => {
  event.preventDefault()

  api.demoSignIn()
    .then(ui.onSigninSuccess)
    .then(dream.deleteDreams)
    .catch(ui.onSigninFailure)
}

// to steamline the module.exports
const addHandlers = event => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#get-settings').on('click', onSettings)
  $('#DEMO-LOGIN').on('click', onDemoLogin) // demo log in
}

// is game over

module.exports = {
  addHandlers
}
