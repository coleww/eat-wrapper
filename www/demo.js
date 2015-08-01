var eatWrapper = require('../')()

document.getElementById('input').addEventListener('keyup', function (e) {
  document.getElementById('output').textContent = JSON.stringify(eatWrapper.key(document.getElementById('input').value))
})
