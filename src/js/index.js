import Sounds from './sounds.js';
import Events from './events.js';
import Timer from './timer.js';

const sounds = Sounds();

const timer = Timer({sounds});

Events({
  timer,
  sounds
});
