'use strict'

document.getElementById('mybtn').addEventListener('click', ageofuser)

function ageofuser() {
  const input = (document.getElementById('input').value)
  if (input >= 17) {
    alert('you can see an R rated movie alone')
  } else if (input >= 13) {
    alert('you can see a PG-13 movie alone')
  } else if (input >= 5) {
    alert('you can see a G or PG movie alone')
  } else {
    alert('you cannot see any movies alone')
  }
