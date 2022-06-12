export default () => {
  const pressedButtonSound = new Audio('./src/sounds/tick.mp3')
  const timeOutSound       = new Audio('./src/sounds/bell.mp3')

  function pressedButton() {
    pressedButtonSound.play()
  }

  function timeOut() {
    timeOutSound.play()
  }

  return { 
    pressedButton,
    timeOut
  }
}