'use strict'
// Updates the UI
// const store = require('../store.js')
const store = require('../store')

// AUTHENTICATION
const onSuccess = () => {
}

const onFailure = () => {
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

const onChangePasswordSuccess = () => {
  onSuccess('You changed your password')
}

const onChangePasswordFailure = () => {
  onFailure('Oh no.')
}

const onSignOutSuccess = () => {
  store.user = {}
  onSuccess('Successfully Signed Out')
  $('.after-auth').hide()
  $('.before-newgame').hide()
  $('.after-newgame').hide()
  $('.before-auth').show()
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
  onSignOutFailure
}
