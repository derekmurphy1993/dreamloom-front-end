'use strict'
// Updates the UI
// const store = require('../store.js')
// const store = require('../store')
const showDreamsTemplate = require('../templates/dream-listing.handlebars')
const showDreamTemplate = require('../templates/dream-expand.handlebars')

// AUTHENTICATION

// On get dreams
const onGetDreamsSuccess = (data) => {
  const showDreamsHtml = showDreamsTemplate({ dreams: data.dreams })
  $('.dreams-content').html(showDreamsHtml)
  $('.dream-list').show()
}

const onGetDreamsFailure = responseData => {
}

const onGetDreamSuccess = (data) => {
  const showDreamHtml = showDreamTemplate({ dreams: data.dreams }) /// SHOW DATA????
  $('.dreams-content').html(showDreamHtml)
  $('.dream-list').show()
}

const onGetDreamFailure = responseData => {
}
//
// const onSignupSuccess = () => {
//   onSuccess('Your Sign Up Was Successful, Please Sign In')
// }
//
// const onSignupFailure = () => {
//   onFailure('Something went wrong')
// }

// const onSigninSuccess = responseData => {
//   store.user = responseData.user // store the user data in store.js
//   onSuccess('Your Sign In Was Successful')
//   $('.after-auth').show()
//   $('.before-auth').hide()
// }
//
// const onSigninFailure = () => {
//   onFailure('Username and Password Doesnt Match')
// }
//
// const onChangePasswordSuccess = () => {
//   onSuccess('You changed your password')
// }
//
// const onChangePasswordFailure = () => {
//   onFailure('Oh no.')
// }
//
// const onSignOutSuccess = () => {
//   store.user = {}
//   onSuccess('Successfully Signed Out')
//   $('.after-auth').hide()
//   $('.before-newgame').hide()
//   $('.after-newgame').hide()
//   $('.before-auth').show()
// }
//
// const onSignOutFailure = () => {
//   onFailure('Error, still logged in')
// }

module.exports = {
  onGetDreamSuccess,
  onGetDreamFailure,
  onGetDreamsSuccess,
  onGetDreamsFailure
}
