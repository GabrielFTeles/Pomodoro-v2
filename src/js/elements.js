const title                = document.querySelector('title');
const themeSwitcher        = document.querySelector('.checkbox');
const settings             = document.querySelector('.config-content');
const settingsBtn          = document.querySelector('#settings-button');
const sentSettsBtn         = document.querySelector('#sent-button');
const selectOptionToChange = document.querySelector('#option-to-change')
const newMinutesInput      = document.querySelector('#new-minutes');
const startButton          = document.querySelector('#start-button');
const stopButton           = document.querySelector('#stop-button');
const time                 = document.querySelector('#time-left');
const pomodoro             = document.querySelector('.options span:nth-child(1)');
const shortBreak           = document.querySelector('.options span:nth-child(2)');
const longBreak            = document.querySelector('.options span:nth-child(3)');

let actualActive   = document.querySelector('.active');

function changeActualActive(option) {
  actualActive = option;
}

export {
  title,
  themeSwitcher,
  settings,
  settingsBtn,
  sentSettsBtn,
  selectOptionToChange,
  newMinutesInput,
  startButton,
  stopButton,
  time,
  pomodoro, 
  shortBreak, 
  longBreak,
  actualActive,
  changeActualActive
}