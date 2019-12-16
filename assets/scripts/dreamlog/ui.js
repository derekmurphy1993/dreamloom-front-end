'use strict'
// Updates the UI
// const store = require('../store.js')
const store = require('../store')
const showDreamsTemplate = require('../templates/dream-listing.handlebars')
const showDreamTemplate = require('../templates/dream-expand.handlebars')
const editDreamTemplate = require('../templates/dream-edit.handlebars')

// AUTHENTICATION

// On get dreams
const onGetDreamsSuccess = (data) => {
  const showDreamsHtml = showDreamsTemplate({ dreams: data.dreams })
  $('.dreams-content').html(showDreamsHtml)
  $('.dream-list').show()
}

const onGetDreamsFailure = responseData => {
}

// on expand dream
const onGetDreamSuccess = (data) => {
  store.dream = data.dream
  console.log(store.dream)
  const showDreamHtml = showDreamTemplate({ dream: data.dream }) /// SHOW DATA????
  $('.dreams-content').html(showDreamHtml)
}

const onGetDreamFailure = responseData => {
}

const onEditDreamsSuccess = (data) => {
  $('.edit-dreams').show()
  const editDreamHtml = editDreamTemplate({ dream: data.dream }) /// SHOW DATA????
  console.log(store.dream)
  $('.dreams-content').html(editDreamHtml)
}

const onSaveEditSuccess = data => {
  $('.edit-dreams').hide()
  store.dream = ''
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
  onGetDreamsFailure,
  onEditDreamsSuccess,
  onSaveEditSuccess
}
