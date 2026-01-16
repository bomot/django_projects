const barButton = document.querySelector('.bar > button')
const barList = document.querySelector('.bar-list')
const barOverlay = document.querySelector('.bar-overlay')

function barToggle() {
  const isClose = barList.dataset.barStatus === 'off'

  if (isClose) {
    barList.style.maxHeight = barList.scrollHeight + 'px'
    barList.dataset.barStatus = 'on'
    barButton.dataset.barStatus = 'on'
    barOverlay.dataset.barStatus = 'on'   
  } else {
    barList.style.maxHeight = '0'
    barList.dataset.barStatus = 'off'
    barButton.dataset.barStatus = 'off'
    barOverlay.dataset.barStatus = 'off'
  }
}

barButton.addEventListener('click', barToggle)
barList.addEventListener('click', barToggle)
barOverlay.addEventListener('click', barToggle)
