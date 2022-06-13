import {
  title,
  startButton,
  stopButton, 
  time,
  actualActive,
  changeActualActive,
  pomodoro,
  shortBreak,
  longBreak
} from './elements.js'

import {
  pomodoroMinutes,
  shortBreakMinutes,
  longBreakMinutes,
} from './timer-settings.js'

export default ({sounds}) => {

  let minutes = 25;
  let seconds = 0;

  let timerCountdownInterval;

  function start() {
    startButton.classList.add('hide');
    stopButton.classList.remove('hide');

    timerCountdownInterval = setInterval(() => {
      countdown()
    }, 1000);
  }

  function pause() {
    stopButton.classList.add('hide');
    startButton.classList.remove('hide');

    clearInterval(timerCountdownInterval);

    title.textContent = 'Pomodoro'
  }

  function countdown() {

    const hasTimedOut = minutes === 0 && seconds === 0;

    if (hasTimedOut) {
      timeOut();
      return;
    }

    seconds--;

    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }

    updateTimerDisplay();
  }

  function timeOut() {
    pause();
    sounds.timeOut();

    stopButton.classList.add('hide');
    startButton.classList.remove('hide');

    const isPomodoroTheActive = actualActive === pomodoro;

    if (isPomodoroTheActive) {
      updateActualOptionActive(shortBreak);
    } else {
      updateActualOptionActive(pomodoro)
    }
  }

  function updateTimerDisplay() {
    time.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    updatePageTitle();
  }

  function updatePageTitle() {
    title.textContent = time.textContent;
  }

  function updateMinutes(minutesToUpdate) {
    minutes = minutesToUpdate;
    seconds = 0;
    updateTimerDisplay();
  }

  function updateActualOptionActive(option) {
    pause();

    actualActive.classList.remove('active');
    option.classList.add('active');

    changeActualActive(option);
    updateOptionMinutes(option)
  }

  function updateOptionMinutes(option) {
    switch(option) {
      case pomodoro:   updateMinutes(pomodoroMinutes);   break;
      case shortBreak: updateMinutes(shortBreakMinutes); break;
      case longBreak:  updateMinutes(longBreakMinutes);  break;
    }
  }

  return { 
    start,
    pause,
    updateMinutes,
    updateActualOptionActive,
    updateOptionMinutes
  }
}