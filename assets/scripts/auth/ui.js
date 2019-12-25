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
}

const onSignupFailure = () => {
  onFailure('Something went wrong')
}

const onSigninSuccess = responseData => {
  store.user = responseData.user // store the user data in store.js
  onSuccess('Your Sign In Was Successful')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSigninFailure = () => {
  onFailure('Username and Password Doesnt Match')
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
}

const onChangePasswordFailure = () => {
  onFailure('Oh no.')
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
