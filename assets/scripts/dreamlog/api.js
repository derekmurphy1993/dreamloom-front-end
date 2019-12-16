'use strict'
// TALK w API
const config = require('../config.js')
const store = require('../store')

// submit a new dream to the API log
const newDream = formData => {
  return $.ajax({
    url: config.apiUrl + '/dreams',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

// View existing entries in Dream Log
const getDreams = () => {
  return $.ajax({
    url: config.apiUrl + `/dreams`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// get specific dream
const getDream = function (dreamId) {
  return $.ajax({
    url: config.apiUrl + '/dreams/' + dreamId,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// delete specific dream
const deleteDream = function (dreamId) {
  return $.ajax({
    url: config.apiUrl + '/dreams/' + dreamId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

// update dream
const updateDream = function (formData) {
  return $.ajax({
    url: config.apiUrl + `/dreams/` + store.dream.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  newDream,
  getDreams,
  getDream,
  updateDream,
  deleteDream
}
