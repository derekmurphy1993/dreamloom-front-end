'use strict'
// TALK w API
const config = require('../config.js')
const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const signOut = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const demoSignIn = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: 'Dreamer@DreamLoom',
        password: 'xf!2@1^3'
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  demoSignIn
}
