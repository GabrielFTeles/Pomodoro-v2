let pomodoroMinutes = 25;
let shortBreakMinutes = 5;
let longBreakMinutes = 15;

function changeSettings(changingOption, minutes) {

  switch(changingOption) {
    case 'pomodoro':   pomodoroMinutes   = minutes; break;
    case 'shortBreak': shortBreakMinutes = minutes; break;
    case 'longBreak':  longBreakMinutes  = minutes; break;
  }

}

export {
  pomodoroMinutes,
  shortBreakMinutes,
  longBreakMinutes,
  changeSettings
  }