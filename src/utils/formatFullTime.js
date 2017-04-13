import {
  formatHour,
  formatTime,
} from './common';

const formatFullTime = function formatFullTime(hours, minutes, seconds, dayPart) {
  return `${formatHour(hours)}:${formatTime(minutes)}:${formatTime(seconds)}${dayPart}`;
}
export default formatFullTime;
