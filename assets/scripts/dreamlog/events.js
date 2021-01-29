'use strict'
// HANDLES EVENTS
// const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const onMakeDreams = event => {
  event.preventDefault()
  ui.makeDreamSuccess()
}
// New Dream Log new-dream
const onNewDream = event => {
  event.preventDefault()

  const form = event.target // form that was submited
  const formData = getFormFields(form) // get that form and run it

  api.newDream(formData)
    .then(ui.onCreateSuccess)
    .then(onGetDreams(event))
    .catch(ui.onCreateFail)
}

// Get all the dreams
const onGetDreams = (event) => {
  event.preventDefault()

  api.getDreams()
    .then(ui.onGetDreamsSuccess)
    .catch(ui.onGetDreamsFailure)
}

// get single dream
const onGetDream = event => {
  event.preventDefault()
  api.getDream($(event.target).data('id')) // puts the event.targets data id as param
    .then(ui.onGetDreamSuccess)
    .catch(ui.onGetDreamFailure)
}

// trigger the edit form
const onEditDream = (event) => {
  event.preventDefault()
  const dreamId = $(event.target).data('id')
  ui.onEditDreamsSuccess(dreamId)
}

// save the edit form
const onSaveDream = event => {
  event.preventDefault()

  const form = event.target // form that was submited
  const dreamId = $(event.target).data('id')
  const formData = getFormFields(form) // get that form and run it

  api.updateDream(dreamId, formData)
    .then(ui.onSaveEditSuccess)
    .catch(ui.onSaveEditFail)
}

// delete dream

const onDelete = (event) => {
  event.preventDefault()

  api.deleteDream($(event.target).data('id')) // puts the event.targets data id as param
    .then(ui.dreamDeleteSuccess)
    .catch(ui.dreamDeleteFail)
}

// delete dream
const onDeleteAll = () => {
  event.preventDefault()

  api.deleteDreams() // puts the event.targets data id as param
    .then(ui.dreamDeleteSuccess)
    .catch(ui.dreamDeleteFail)
}

const onGetChart = (event) => {
  event.preventDefault()

  ui.onGetChartSuccess()
}

// to steamline the module.exports
const addHandlers = event => {
  $('#get-dreams').on('click', onGetDreams) // gets dreams
  $('#make-dreams').on('click', onMakeDreams) // pull up create form
  $('#get-chart').on('click', onGetChart) // gets dreams
  $('#new-dream').on('submit', '.newDreamForm', onNewDream) // new dream!
  $('#dreams-content').on('click', '.read', onGetDream) // get dream
  $('#dreams-content').on('click', '.edit', onEditDream) // pull up edit form
  $('#edit-dreams').on('submit', '.dreamForm', onSaveDream) // save dream
  $('#deleteModal').on('click', '.delete_all', onDeleteAll) // delete all
  $('#dreams-content').on('click', '.delete', onDelete) // delete dream
}
// is game over

module.exports = {
  addHandlers
}
