const Chart = require('chart.js')
const api = require('./api')

// api.getDreams()

const xs = []
const ys = []

async function sleepChart() {
  const data = await getData()
  const ctx = document.getElementById('myChart')
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.xs,
      datasets: [{
        label: 'Sleep Record',
        data: data.ys,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    }
  })
}

async function getData() {
  const res = await api.getDreams()
  const data = res.dreams

  data.forEach(dream => {
    const date = dream.date
    const mood = parseInt(dream.mood)
    xs.push(date)
    ys.push(mood)
  })
  return { xs, ys }
}

module.exports = {
  sleepChart,
  getData
}
