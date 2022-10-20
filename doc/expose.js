// part2.js

function fetchData() {
  fetch('./citylots.json')
}

function init() {
  document.getElementById('fetchData').addEventListener('click', fetchData);
}

window.addEventListener('DOMContentLoaded', init);