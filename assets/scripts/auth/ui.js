'use strict'
// Updates the UI
// const store = require('../store.js')
const store = require('../store')

// AUTHENTICATION
const onSuccess = (message) => {
  $('#feedback').text(message).css('color', 'green')
  // the index and its value gets passed to the stored data
}

const onFailure = (message) => {
  $('#feedback').text(message).css('color', 'red')
}

const onSignupSuccess = () => {
  onSuccess('Your Sign Up Was Successful, Please Sign In')
  $('form').trigger('reset')
}

const onSignupFailure = () => {
  onFailure('Something went wrong')
  $('form').trigger('reset')
}

const onSigninSuccess = responseData => {
  store.user = responseData.user // store the user data in store.js
  onSuccess('Your Sign In Was Successful')
  $('.after-auth').show()
  $('.before-auth').hide()
  $('form').trigger('reset')
}

const onSigninFailure = () => {
  onFailure('Username and Password Doesnt Match')
  $('form').trigger('reset')
}

const onSettingsSuccess = () => {
  $('.v').hide()
  $('.user-settings').show()
}

const onSettingsFail = () => {
  onFailure('Error.')
}

const onChangePasswordSuccess = () => {
  onSuccess('Password Successfully Updated')
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  onFailure('Oh no.')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  store.user = {}
  onSuccess('Successfully Signed Out')
  $('.dreams-content').html('')
  $('.after-auth').hide()
  $('.before-auth').show()
  $('.getDreams').show()
}

const onSignOutFailure = () => {
  onFailure('Error, still logged in')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onSettingsSuccess,
  onSettingsFail,
  onFailure,
  onSuccess
}
