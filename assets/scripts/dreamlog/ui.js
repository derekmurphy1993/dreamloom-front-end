'use strict'
// Updates the UI
// const store = require('../store.js')
const showDreamsTemplate = require('../templates/dream-listing.handlebars')
const showDreamTemplate = require('../templates/dream-expand.handlebars')
const editDreamTemplate = require('../templates/dream-edit.handlebars')

// AUTHENTICATION

// on create dream success
const onCreateSuccess = () => {
  $('.newDream').hide()
}
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
  const showDreamHtml = showDreamTemplate({ dream: data.dream }) /// SHOW DATA????
  $('.dreams-content').html(showDreamHtml)
}

const onGetDreamFailure = responseData => {
}

const onEditDreamsSuccess = (dreamId) => {
  $('#edit-dreams').show()
  const editDreamHtml = editDreamTemplate({ dream: dreamId }) /// SHOW DATA????
  $('#edit-dreams').html(editDreamHtml)
  $('.dreams-content').hide()
}

const onSaveEditSuccess = data => {
  $('.dreams-content').show()
  $('#edit-dreams').hide()
}

module.exports = {
  onCreateSuccess,
  onGetDreamSuccess,
  onGetDreamFailure,
  onGetDreamsSuccess,
  onGetDreamsFailure,
  onEditDreamsSuccess,
  onSaveEditSuccess
}
