import { 
  settings,
  themeSwitcher,
  settingsBtn,
  sentSettsBtn,
  selectOptionToChange,
  newMinutesInput,
  startButton,
  stopButton,
  pomodoro,
  shortBreak,
  longBreak,
  actualActive  
} from './elements.js'

import {
  changeSettings
} from './timer-settings.js'

export default ({
  timer,
  sounds
}) => {

  themeSwitcher.addEventListener('change', () => {
    document.body.classList.toggle('light-theme')
  })

  startButton.addEventListener('click', () => {
    sounds.pressedButton();
    timer.start();
  })

  stopButton.addEventListener('click', () => {
    sounds.pressedButton();
    timer.pause();
  })

  settingsBtn.addEventListener('click', () => {
    settingsBtn.classList.toggle('jump');
    settings.classList.toggle('slide-left');
  })

  sentSettsBtn.addEventListener('click', () => {
    const minutes = newMinutesInput.value;
    const option  = selectOptionToChange.value;

    const exceedMaxOrMin = minutes > 999 || minutes < 0;

    if (exceedMaxOrMin) {
      return;
    }

    timer.pause();
    changeSettings(`${option}`, minutes);
    timer.updateOptionMinutes(actualActive)
  })

  pomodoro.addEventListener('click', () => {
    const isThisOptionTheActive = pomodoro === actualActive;

    if (isThisOptionTheActive) {
      return;
    }

    timer.updateActualOptionActive(pomodoro)
  })

  shortBreak.addEventListener('click', () => {
    const isThisOptionTheActive = shortBreak === actualActive;

    if (isThisOptionTheActive) {
      return;
    }

    timer.updateActualOptionActive(shortBreak)
  })

  longBreak.addEventListener('click', () => {
    const isThisOptionTheActive = longBreak === actualActive;

    if (isThisOptionTheActive) {
      return;
    }

    timer.updateActualOptionActive(longBreak)
  })
}