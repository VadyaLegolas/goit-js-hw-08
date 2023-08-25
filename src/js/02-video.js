import Player from '@vimeo/player';
import trottle from 'lodash.throttle';
import { common } from '../common';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', () => player.setCurrentTime(Number(JSON.parse(localStorage.getItem(common.VIDEOPLAYER_CURRENT_TIME)) ?? 0)));

player.ready().then(function() {
  // the player is ready
  player.setCurrentTime(Number(JSON.parse(localStorage.getItem(common.VIDEOPLAYER_CURRENT_TIME)) ?? 0))
});

player.on('timeupdate', trottle(getTime, 1000));

function getTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(
      common.VIDEOPLAYER_CURRENT_TIME,
      JSON.stringify(seconds)
    );
  });
}
