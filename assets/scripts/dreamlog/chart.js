const Chart = require('chart.js')
const api = require('./api')

// api.getDreams()

let xs = []
let ys = []

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

async function sleepChart() {
  xs = []
  ys = []
  const data = await getData()
  const ctx = document.getElementById('myChart')
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.xs,
      datasets: [{
        label: 'Sleep Record',
        data: data.ys,
        backgroundColor: 'rgba(153, 102, 255, 0.8)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 6
          }
        }],
        xAxes: [{
          ticks: {
            maxTicksLimit: 7
          }
        }]
      }
    }
  })
}

async function getData() {
  const res = await api.getDreams()
  const data = res.dreams

  data.forEach(dream => {
    const date = dream.date
    xs.push(date)
    const mood = parseInt(dream.mood)
    console.log(typeof mood)
    ys.push(mood)
  })
  return { xs, ys }
}

module.exports = {
  sleepChart
}
